"""Run with: python3 scratch/verify_portfolio.py (Python Playwright + Chrome)."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from shutil import which
from threading import Thread

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *_):
        pass


def no_overflow(page):
    assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), page.url


def verify(browser, base):
    errors = []
    context = browser.new_context(viewport={"width": 1440, "height": 900}, color_scheme="light")
    context.set_default_timeout(10000)
    page = context.new_page()
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.goto(base)
    assert page.locator('.project-card').count() == 10
    assert page.locator('.project-card.featured, .project-card.compact').count() == 0
    assert page.locator('.project-art').count() == 10
    assert page.locator('.logo-wall .logo-tile').count() == 10
    assert page.locator('.logo-wall .logo-tile').evaluate_all('(els) => new Set(els.map(e => e.href)).size') == 10
    assert page.locator('.contact-list a[href="mailto:oslecbuisan613@gmail.com"]').count() == 1
    page.wait_for_timeout(1300)
    page.locator('.logo-stage').hover(position={'x': 20, 'y': 20})
    assert page.locator('.logo-wall').evaluate('(e) => e.style.getPropertyValue("--wall-x")')
    page.keyboard.press('Tab')
    assert page.locator('.logo-wall').evaluate('(e) => !e.style.getPropertyValue("--wall-x")')
    assert page.locator('main img[src*="hammerpulse-reporting"], main img[src*="hammerpulse-metrics"]').count() == 0
    assert page.locator('#project-hammerpulse img').get_attribute('src').endswith('hammerpulse-logo-light.svg')
    for category, count in {"ai": 3, "fullstack": 8, "security": 4, "academic": 5, "all": 10}.items():
        button = page.locator(f'[data-filter="{category}"]')
        button.click()
        assert page.locator('.project-card:visible').count() == count, category
        assert button.get_attribute('aria-pressed') == 'true'
        assert page.locator('#project-count').inner_text() == f'Showing {count} projects'
    assert page.evaluate("document.getAnimations().some(a => a.id === 'project-reflow')")
    page.emulate_media(reduced_motion='reduce')
    page.wait_for_function("!document.getAnimations().some(a => ['project-reflow','portfolio-intro'].includes(a.id))")
    page.locator('.logo-stage').hover(position={'x':20,'y':20})
    assert page.locator('.logo-wall').evaluate('(e) => !e.style.getPropertyValue("--wall-x")')
    page.locator('[data-filter="ai"]').click()
    assert not page.evaluate("document.getAnimations().some(a => a.id === 'project-reflow')")
    page.locator('[data-filter="all"]').click()
    page.emulate_media(reduced_motion='no-preference')
    page.locator('[data-filter="all"]').focus()
    page.keyboard.press('ArrowRight')
    assert page.locator('[data-filter="ai"]').evaluate('(e) => e === document.activeElement')

    page.locator('#theme-toggle').click()
    page.reload()
    assert page.locator('html').get_attribute('data-theme') == 'dark'
    assert page.locator('#project-hammerpulse img').get_attribute('src').endswith('hammerpulse-logo-dark.svg')
    page.locator('#theme-toggle').click()
    # Section selection follows the text under the sticky header, including reverse scrolling.
    page.emulate_media(reduced_motion='reduce')
    for section in ['case-notes', 'skills', 'thesis', 'cv', 'skills', 'projects']:
        page.locator('#' + section).evaluate('(e) => e.scrollIntoView()')
        page.wait_for_function("id => document.querySelector('.nav a[aria-current]')?.hash === '#' + id", arg=section)
    page.goto(base + 'project.html?id=hammerpulse')
    projects = page.evaluate('window.portfolioProjects.map(p => ({id:p.id, title:p.displayName || p.title, mark:!!p.mark}))')
    assert projects[0]['id'] == 'hammerpulse' and len(projects) == 10
    for project in projects:
        page.goto(base + 'project.html?id=' + project['id'])
        assert page.locator('h1').inner_text() == project['title']
        if project['mark']:
            assert page.locator('#project-mark').is_visible() and page.locator('#project-image').is_hidden()
        else:
            assert page.locator('#project-image').evaluate('(e) => e.complete && e.naturalWidth > 0')
        assert page.locator('.project-identity').bounding_box()['height'] < 200
    page.goto(base + 'case-studies.html')
    assert page.locator('.study-entry').count() == 10
    assert page.locator('.study-entry[open]').count() == 0
    assert page.locator('img[src*="hammerpulse-reporting"]:visible').count() == 0
    page.locator('#classvision > summary').focus()
    page.keyboard.press('Enter')
    assert page.locator('#classvision').get_attribute('open') is not None
    page.keyboard.press('Enter')
    assert page.locator('#classvision').get_attribute('open') is None
    for project in projects:
        page.goto(base + 'case-studies.html#' + project['id'])
        page.wait_for_function("id => document.getElementById(id).open", arg=project['id'])
        assert page.locator('#' + project['id'] + ' .study-body').is_visible()
    page.goto(base + 'case-studies.html#hammerpulse')
    page.locator('.study-evidence > summary').click()
    assert page.locator('img[src*="hammerpulse-reporting"]').is_visible()
    page.goto(base + 'case-studies.html#%E0%A4%A')
    for query in ['?id=missing', '?id=']:
        page.goto(base + 'project.html' + query)
        assert page.locator('h1').inner_text() == 'Project not found'
        assert page.locator('meta[name="robots"]').get_attribute('content') == 'noindex'
    page.goto(base + 'project.html')
    assert 'ClassVision' in page.locator('h1').inner_text()

    page.emulate_media(reduced_motion='reduce')
    for width in [320, 390, 768, 1024, 1440, 1905]:
        page.set_viewport_size({"width": width, "height": 900})
        for path in ['', 'project.html?id=hammerpulse', 'project.html?id=classvision', 'case-studies.html', 'case-studies.html#classvision', 'cv.html', 'cv-traditional.html']:
            page.goto(base + path)
            page.evaluate('document.fonts.ready')
            no_overflow(page)
            if not path:
                assert page.locator('.logo-tile').evaluate_all("""els => {
                  const rects = els.map(e => e.getBoundingClientRect());
                  return rects.every((a, i) => rects.every((b, j) => i === j || a.right <= b.left || a.left >= b.right || a.bottom <= b.top || a.top >= b.bottom));
                }"""), f'Overlapping project logos at {width}px'
    page.set_viewport_size({"width": 320, "height": 720})
    page.goto(base)
    page.locator('#menu-toggle').focus()
    page.keyboard.press('Enter')
    assert page.locator('#menu-toggle').get_attribute('aria-expanded') == 'true'
    assert page.locator('#primary-nav a').first.evaluate('(e) => e === document.activeElement')
    page.keyboard.press('Escape')
    assert page.locator('#menu-toggle').get_attribute('aria-expanded') == 'false'
    assert page.locator('#menu-toggle').evaluate('(e) => e === document.activeElement')
    page.locator('#menu-toggle').click()
    page.locator('#primary-nav a[href="#projects"]').click()
    assert page.locator('#menu-toggle').get_attribute('aria-expanded') == 'false'
    assert page.locator('#projects').evaluate('(e) => getComputedStyle(e).opacity') == '1'
    page.locator('#menu-toggle').click()
    page.mouse.click(5, 700)
    assert page.locator('#menu-toggle').get_attribute('aria-expanded') == 'false'
    page.emulate_media(reduced_motion='reduce')
    assert page.locator('.hero-actions .button').first.evaluate('(e) => getComputedStyle(e).transitionDuration') == '0s'
    context.close()

    for storage_blocked in [False, True]:
        context = browser.new_context(color_scheme='dark')
        if storage_blocked:
            context.add_init_script("Object.defineProperty(window, 'localStorage', {get() {throw new Error('Storage unavailable')}})")
        page = context.new_page()
        page.on('pageerror', lambda error: errors.append(str(error)))
        page.goto(base)
        assert page.locator('html').get_attribute('data-theme') == 'dark'
        page.emulate_media(color_scheme='light')
        page.wait_for_function("document.documentElement.dataset.theme === 'light'")
        page.locator('#theme-toggle').click()
        assert page.locator('html').get_attribute('data-theme') == 'dark'
        context.close()

    context = browser.new_context(java_script_enabled=False, viewport={"width": 320, "height": 720})
    page = context.new_page()
    page.goto(base)
    assert page.locator('h1').is_visible() and page.locator('.project-card:visible').count() == 10
    assert page.locator('.logo-tile:visible').count() == 10
    assert page.locator('#primary-nav').is_visible()
    assert page.locator('#projects').evaluate('(e) => getComputedStyle(e).opacity') == '1'
    no_overflow(page)
    page.goto(base + 'case-studies.html')
    page.locator('#classvision > summary').click()
    assert page.locator('#classvision .study-body').is_visible()
    no_overflow(page)
    page.goto(base + 'project.html?id=hammerpulse')
    assert page.get_by_role('link', name='Read the complete case studies').is_visible()
    context.close()
    assert not errors, errors


if __name__ == '__main__':
    server = ThreadingHTTPServer(('127.0.0.1', 0), partial(QuietHandler, directory=str(ROOT)))
    Thread(target=server.serve_forever, daemon=True).start()
    try:
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(executable_path=which('google-chrome') or which('chromium'), headless=True)
            verify(browser, f'http://127.0.0.1:{server.server_port}/')
            browser.close()
        print('Portfolio verification: PASS (10 projects, filters, themes, menu, routes, responsive layout, no-JS fallback)')
    finally:
        server.shutdown()
        server.server_close()
