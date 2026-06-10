# scratch/verify_print_styles.py
import os

def test_styles():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    path = os.path.join(script_dir, "../styles.css")
    assert os.path.exists(path), f"{path} does not exist"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Assert grid definitions exist
    assert ".cv-grid-container" in content, "Grid container styling missing"
    assert ".cv-main-col" in content, "Main column styling missing"
    assert ".cv-side-col" in content, "Sidebar column styling missing"
    assert "@media print" in content, "Print media query missing"

    # Print-specific size reductions
    assert "@page" in content, "Print page rules missing"
    assert "0.3in" in content or "0.4in" in content, "Page margins in print missing"

    print("styles.css Verification: PASS")

if __name__ == "__main__":
    test_styles()
