import os
from html.parser import HTMLParser

class CVParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text_content = []
        self.hrefs = []

    def handle_data(self, data):
        self.text_content.append(data.strip())

    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            for attr in attrs:
                if attr[0] == 'href':
                    self.hrefs.append(attr[1])

def test_cv_html():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    path = os.path.join(script_dir, "../cv.html")
    assert os.path.exists(path), f"{path} does not exist"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    parser = CVParser()
    parser.feed(content)
    full_text = " ".join(parser.text_content)

    # Check elements
    assert "+63 920 633 1342" in full_text, "Phone number missing in HTML"
    assert "rjcbuisan@usm.edu.ph" in full_text, "Email missing in HTML"
    assert "INFOSOFT" in full_text, "OJT missing in HTML"
    assert "Socio-Cultural & Sports Chairperson" in full_text, "Chairperson role missing in HTML"
    assert "External Officer" in full_text, "PSITS role missing in HTML"
    assert "Thesis Defense Scheduler" not in full_text, "Thesis Defense Scheduler should be removed"

    # Check links
    assert "rjcbuisan@usm.edu.ph" in parser.hrefs or "mailto:rjcbuisan@usm.edu.ph" in parser.hrefs or any("rjcbuisan@usm.edu.ph" in h for h in parser.hrefs), "Email link missing"
    assert "https://github.com/De1m0z/chantea-kiosk" in parser.hrefs, "Cheen tea link missing"

    print("cv.html Verification: PASS")

if __name__ == "__main__":
    test_cv_html()
