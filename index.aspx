<!DOCTYPE html>
<html>
<head>
	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="main.css">
	<!-- Title -->
	<title>Home | IPNotify</title>
	<!-- JavaScript -->
	<script type="text/javascript" src="alert.js"></script>
</head>
<body>
	<div class="ip-bg">
		<div class="ip">
			<script src="ip.js"></script>
		</div>
	</div>
	<div class="calc">
		<form>
			<input type="text" name="FirstName" id="First" placeholder="First Name" accept="yes">
			<p>Send Alert?</p>
			<input type="checkbox" name="NumberOne" id="1">
				<br>
			<button type="button" onclick="javascript:AlertMe();">Alert</button>
		</form>
		<p id="result"></p>
	</div>
</body>
</html>