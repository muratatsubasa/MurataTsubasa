seireki = rand(1912..2018)	# 西暦年
print "西暦#{seireki}年は"
# 年を計算する
# 平成年を出力する
heisei = seireki-1988
showa = seireki-1925
taisyo = seireki-1911

if seireki > 1988
  print "平成#{heisei}年です"
# 昭和年を出力する
elsif seireki > 1925
  print "昭和#{showa}年です"
# 大正年を出力する
else
  print "大正#{taisyo}年です"
end



# seireki の中には、西暦年として 1912~2018 までの数字がランダムで
# 代入されます。
# 入力された西暦年をif分を用いて平成年、昭和年、大正年に変換し「西暦19○○年は、昭和○○年です」と
# 出力してください。