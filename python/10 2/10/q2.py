# coding: utf-8
# if文による条件分岐
import random
number = random.randint(1,5)
print("あなたの順位は" + str(number) + "位です")
# ここにif文を追加する
if number == 1:
    print("おめでとう")
else:
    print("もう少し") 
# 順位が1位のみ
# あなたの順位は1位です
# おめでとう

# 順位が2~5の場合
# あなたの順位は2~5位です
# もう少し