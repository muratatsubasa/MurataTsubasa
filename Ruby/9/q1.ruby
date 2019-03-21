# if文による条件分岐
omikuji = rand(1..100)
if omikuji > 29
  puts "omikujiの中身は#{ omikuji }なので大吉"
else
  puts "omikujiの中身は#{ omikuji }なので大凶"
end

# omikuji の数字が30~100の時は「omikujiの中身は○○なので大吉」と表示、
# omikuji の数字が29以下の時は「omikujiの中身は○○なので大凶」と表示する。