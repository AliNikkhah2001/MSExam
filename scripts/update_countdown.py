import re
from datetime import date

README_PATH = "README.md"

EXAM_DAY1 = date(2026, 5, 7)
EXAM_DAY2 = date(2026, 5, 8)

def main() -> None:
    today = date.today()
    days1 = (EXAM_DAY1 - today).days
    days2 = (EXAM_DAY2 - today).days

    with open(README_PATH, "r", encoding="utf-8") as f:
        text = f.read()

    new_block = f"""<!-- COUNTDOWN_START -->
![Exam](https://img.shields.io/badge/Exam-AI%20MSc%201405-blue)
![Target Rank](https://img.shields.io/badge/Target%20Rank-1--3-brightgreen)
![Days_to_Day_1](https://img.shields.io/badge/days_to_day1-{days1}-informational)
![Days_to_Day_2](https://img.shields.io/badge/days_to_day2-{days2}-informational)

> As of {{today:%d %b %Y}} (GitHub Actions date)  
> - Day 1: 7 May 2026 → **{{days1}} days left**  
> - Day 2: 8 May 2026 → **{{days2}} days left**
<!-- COUNTDOWN_END -->"""

    # Fill f-string placeholders
    new_block_filled = new_block.format(today=today, days1=days1, days2=days2)

    pattern = r"<!-- COUNTDOWN_START -->[\s\S]*?<!-- COUNTDOWN_END -->"
    new_text = re.sub(pattern, new_block_filled, text)

    with open(README_PATH, "w", encoding="utf-8") as f:
        f.write(new_text)

if __name__ == "__main__":
    main()
