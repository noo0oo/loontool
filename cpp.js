#!name = eTicket Pro
#!desc = 车票票会员解锁
#!openUrl = 
#!author = @chxm1023
#!homepage = https://github.com/sooyaaabo/Loon
#!icon = https://raw.githubusercontent.com/sooyaaabo/Loon/main/Icon/eTicket.png
#!date = 2024-03-19 18:00

# 2023-08-19
# https://github.com/chxm1023/Rewrite/blob/main/Revenuecat/chepiaopiao.js

[Script]
http-response ^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) script-path = https://raw.githubusercontent.com/chxm1023/Rewrite/main/Revenuecat/chepiaopiao.js, requires-body = true, tag = 车票票会员
http-request ^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) script-path = https://raw.githubusercontent.com/chxm1023/Rewrite/main/Revenuecat/chepiaopiao.js, requires-body = true, tag = 车票票会员

[Mitm]
hostname = api.revenuecat.com
