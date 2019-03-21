# 肉の量り売り
price = 128
weight = 300
amount = ((price.to_f / 100)* weight).to_i
puts "100グラム#{price}円の肉、#{weight}グラムは、#{amount}円です。"


# 間違いを修正して、肉の価格を出力してください。
# 100グラム128円の肉、300グラムは、384円です。