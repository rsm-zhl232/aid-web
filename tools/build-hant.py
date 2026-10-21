#!/usr/bin/env python3
"""
Generate the Traditional Chinese (繁體) copy from the Simplified copy.

Every <span data-lang="zh">…</span> on every page gets a sibling
<span data-lang="hant">…</span> right after it, and every <option data-zh="…">
gets a matching data-hant. Run it after any change to the Simplified text:

    pip install opencc-python-reimplemented
    python3 tools/build-hant.py

It is safe to re-run: existing hant spans are removed and rebuilt.

Two steps per string:
  1. PHRASES — mainland wording swapped for wording readers in both Hong Kong
     and Taiwan understand (e.g. 签证→工程变更计价, 复盘→检讨). Keys are
     Simplified, longest first, so specific phrases win over general ones.
  2. OpenCC 's2t' — plain character conversion. Deliberately not s2tw / s2hk:
     the copy should read naturally in both places, not lean towards one.
Brand lines stay as they are (读懂大师，落地大师; 全周期落地包).
"""
import glob
import os
import re

from opencc import OpenCC

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PHRASES = [
    # Construction and delivery jargon
    ("可直接进入签证流程", "可直接进入工程变更计价流程"),
    ("返工、签证、索赔", "返工、追加费用、索赔"),
    ("启动会纪要", "启动会记录"),
    ("出纪要", "出会议记录"),
    ("提资清单", "资料清单"),
    ("提资流程", "资料往来流程"),
    ("提资自动提醒", "缺资料自动提醒"),
    ("原图问题与提资", "原图问题与资料提供"),
    ("提资、模型共享", "资料提交、模型共享"),
    ("驻场与交底差旅", "驻场与技术说明差旅"),
    ("交底记录", "技术说明记录"),
    ("技术交底", "施工技术说明"),
    ("交底、巡场、驻场", "技术说明、工地巡视、驻场"),
    ("巡场与驻场", "工地巡视与驻场"),
    ("巡场报告", "工地巡视报告"),
    ("巡场", "工地巡视"),
    ("按人天", "按人日"),
    ("工程量清单", "工程数量清单"),
    ("扩初改", "初步设计修改"),
    ("扩初", "初步设计"),
    ("确认单收口", "确认单结案"),  # here 收口 means "close off", not edge detailing
    ("收口", "收边"),
    ("合入", "合并"),
    ("全程留痕", "全程留下纪录"),
    ("全周期留痕", "全程留存纪录"),
    ("变更留痕", "变更纪录"),
    ("和留痕", "和纪录"),
    ("技术底座", "技术平台"),
    ("微信只做提醒", "即时通讯软体只做提醒"),
    ("复盘", "检讨"),
    ("盯人", "追进度"),
    ("抵扣", "折抵"),
    # General vocabulary
    ("营销、运营", "市场推广、营运"),
    ("软件", "软体"),
    ("信息", "资讯"),
    ("质量", "品质"),
    ("邮箱", "电子邮件"),
    ("优先响应", "优先回应"),
    ("书面反馈", "书面回覆"),
    # "数字" reads as "numbers" in Taiwan; 數位 is understood in both places
    ("数字化转型", "数位转型"),
    ("数字建造", "数位建造"),
    ("数字档案", "数位档案"),
    ("数字权益", "数位权益"),
    ("错漏碰缺", "错漏与碰撞问题"),
    ("可视化", "视觉化"),
    ("导出", "汇出"),
    ("合同", "合约"),
    ("核心接口人", "主要联络人"),
    ("大师只对接一个人", "大师只需找一个人"),
    ("大师只对接 AID，由 AID 对接专业顾问", "大师只需联络 AID，由 AID 协调专业顾问"),
    ("就近对接", "就近服务"),
    ("主推", "推荐"),
    ("电话 / 微信", "电话 / 即时通讯"),
    ("联系", "联络"),
]

# After conversion: forms OpenCC's generic table picks that read as
# mainland-in-Traditional-dress.
POST = [
    # mainland-style Traditional forms → forms used in Hong Kong and Taiwan
    ("爲", "為"), ("裏", "裡"), ("啓", "啟"), ("着", "著"), ("覈", "核"),
    ("剋制", "克制"), ("平臺", "平台"), ("總賬", "總帳"), ("合並", "合併"),
    ("瞭解", "了解"), ("籤", "簽"),
    ("回復", "回覆"),
    ("回覆“收到”", "回覆「收到」"),
    ("“", "「"),
    ("”", "」"),
]

cc = OpenCC("s2t")


def to_hant(s):
    for a, b in PHRASES:
        s = s.replace(a, b)
    s = cc.convert(s)
    for a, b in POST:
        s = s.replace(a, b)
    return s


SPAN = re.compile(r'<span data-lang="zh">(.*?)</span>', re.S)
OLD = re.compile(r'<span data-lang="hant">.*?</span>', re.S)
OPT = re.compile(r'(<option\b[^>]*?data-zh=")([^"]*)("[^>]*?)(\sdata-hant="[^"]*")?(>)')


def build(path):
    src = open(path, encoding="utf-8").read()
    out = OLD.sub("", src)
    out = SPAN.sub(lambda m: m.group(0) + '<span data-lang="hant">' + to_hant(m.group(1)) + "</span>", out)
    out = OPT.sub(lambda m: m.group(1) + m.group(2) + m.group(3) + ' data-hant="' + to_hant(m.group(2)) + '"' + m.group(5), out)
    if out != src:
        open(path, "w", encoding="utf-8").write(out)
    return len(SPAN.findall(out))


if __name__ == "__main__":
    for f in sorted(glob.glob(os.path.join(ROOT, "*.html"))):
        print(f"{os.path.basename(f)}: {build(f)} strings")
