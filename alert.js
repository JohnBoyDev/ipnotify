var End = document.getElementById("result");
var Checkbox = document.getElementById("1");
var Text = document.getElementById("First");
var IpText = document.getElementById("iptext");

function AlertMe(alrt) {
	document.execCommand(copy)
}

var copyTextareaBtn = document.querySelector('IpText');

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
}