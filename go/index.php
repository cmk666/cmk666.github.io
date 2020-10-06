<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>跳转中,请稍后</title>
</head>
<body>
<h1>跳转中,请稍后</h1>
<script type="text/javascript">
setTimeout(function(){
<?php
echo 'location.href = "' . ( $_GET['url'] ?? '/' ) . '";';
?>
}, 1000);
</script>
</body>
</html>