# scratch/verify_md.py
import os

def test_cv_md():
    path = "cv.md"
    assert os.path.exists(path), f"{path} does not exist"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Check for new contact details
    assert "+63 920 633 1342" in content, "Phone number missing"
    assert "rjcbuisan@usm.edu.ph" in content, "Email address missing"
    assert "Pikit, Cotabato" in content, "Home address missing"

    # Check for target role alignment
    assert "Full-stack Software Engineer" in content, "Target alignment missing"

    # Check for OJT experience
    assert "INFOSOFT" in content, "OJT company name missing"
    assert "June 2025 – August 2025" in content, "OJT date missing"

    # Check for leadership roles
    assert "PSITS" in content, "PSITS organization missing"
    assert "Socio-Cultural & Sports Chairperson" in content, "Chairperson role missing"

    # Verify old projects and minor items are cleaned up/removed
    assert "Thesis Defense Scheduler" not in content, "Thesis Defense Scheduler should be omitted to fit 1-page"
    assert "Optimization Algorithms Assignment" not in content, "Academic assignments should be omitted to fit 1-page"

    print("cv.md Verification: PASS")

if __name__ == "__main__":
    test_cv_md()
