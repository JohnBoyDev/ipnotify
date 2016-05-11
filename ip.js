function getIP(json) {
	document.write("Your IPv4 address: ","<br>","<b>", '<p id="iptext">',json.ip,"</p>","</b>");
}

document.write('<script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"></script>')