// Form Variables
var Text = document.getElementById("First");
var Send = document.getElementById("Send");
var Success = "Success."
var Failure = "Please check the box to see your public IPv4 address."
var Message = "You have been alerted."
// IP Variables
var IpText = document.getElementById("iptext");

// Code
function LearnIP(alrt) {
	// Function Variables
	var Result = document.getElementById("Result");
	var Send = document.getElementById("Send");
	// Code
	if (Send.value=="off") {
		Send.value = "on"
		Result.innerHTML=('IPv4 is the fourth revision of the Internet Protocol and is the most common version used today. It uses 32-bit addresses, which are formatted as "111.111.111.111." Each section may contain a number from 0 to 255, which provides a total of 4,294,967,296 (2^32) possible addresses.')
	} else if (Send.value=="on") {
		Result.innerHTML=("")
		Send.value = "off"
	}
}