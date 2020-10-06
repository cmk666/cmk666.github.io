<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<link rel="stylesheet" type="text/css" href="/css/all/css" />
<title>cmk的收藏夹</title>
</head>
<body>
<h1>cmk的收藏夹</h1>
<hr />
<?php
$type = $_GET['type'] ?? 7;
if ( intdiv($type,1)%2 == 1 ) //useful
{
	echo '<p><a href="/search/?type=baidu">百度搜索</a></p>';
	echo '<p><a href="/search/?type=baidufanyi1">百度翻译(中-&gt;英)</a></p>';
	echo '<p><a href="/search/?type=baidufanyi2">百度翻译(英-&gt;中)</a></p>';
	echo '<p><a href="/search/?type=baidutupian">百度图片</a></p>';
	echo '<p><a href="/go/?url=//mail.qq.com/">QQ邮箱</a></p>';
}
if ( intdiv($type,2)%2 == 1 ) //progrmming
{
	echo '<p><a href="/go/?url=//www.luogu.com.cn/">洛谷</a></p>';
	echo '<p><a href="/search/?type=luogu">洛谷题库搜索</a></p>';
	echo '<p><a href="/go/?url=//www.h2zbmh.com:8080/html/JudgeOnline/">杭二中白马湖OJ</a></p>';
	echo '<p><a href="/go/?url=//www.runoob.com/">菜鸟教程</a></p>';
}
if ( intdiv($type,4)%2 == 1 ) //song
{
	echo '<p><a href="/go/?url=//music.163.com/#/song?id=1357785909">野狼disco</a></p>';
	echo '<p><a href="/go/?url=//music.163.com/#/song?id=108795">曹操</a></p>';
	echo '<p><a href="/go/?url=//music.163.com/#/song?id=1369798757">芒种</a></p>';
	echo '<p><a href="/go/?url=//music.163.com/#/song?id=36990266">Faded</a></p>';
	echo '<p><a href="/go/?url=//music.163.com/#/song?id=38592976">Dream It Possible</a></p>';
	echo '<p><a href="/go/?url=//music.163.com/#/song?id=1353428173">buttercup</a></p>';
}
if ( intdiv($type,8)%2 == 1 ) //mc
{
	echo '<p><a href="/search/?type=mcwiki">MC wiki搜索</a></p>';
	echo '<p><a href="/search/?type=mcmod">模组搜索</a></p>';
	echo '<p><a href="/go/?url=//www.mcmod.cn/tools/cbcreator/">命令生成器</a></p>';
}
?>
<hr />
<div id="browser">
<script type="text/javascript" src="/js/browser.js"></script>
<script type="text/javascript">
browser_=getbrowser()
document.getElementById("browser").innerHTML="你正在使用"+browser_+"浏览器"
</script>
</body>
</html>