# coding: utf-8
# if文による条件分岐
import random
number = random.randint(1, 3)
print("あなたの順位は" + str(number) + "位です")
# ここにif文を追加する
if number == 1:
    print("おめでとう")
if number == 2:
    print("あと少し！")   
if number == 3:
    print("次こそ頑張ろう")

# 順位が1位のみおめでとうを表示
# あなたの順位は1位です
# おめでとう