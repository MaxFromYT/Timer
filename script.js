var hours = 0;
var minutes = 0;
var seconds = 0;
var timer;








for (var i = 0; i < 1; i++){




alert("MUST PAY $10,000,000")

}
function hourup() {
	var hour = document.getElementById("hours");
	hour.innerHTML = parseInt(hour.innerHTML) + 1;
	if (parseInt(hour.innerHTML) > 23) {
	hour.innerHTML = 0;
	}
}
function hourdown() {
var hour = document.getElementById("hours");
	hour.innerHTML = parseInt(hour.innerHTML) - 1;
	if (parseInt(hour.innerHTML) < 0) {
	hour.innerHTML = 23;
	}
}
function minuteup() {
var minute = document.getElementById("minutes");
	minute.innerHTML = parseInt(minute.innerHTML) + 1;
	if (parseInt(minute.innerHTML) > 59) {
	minute.innerHTML = 0;
	}
}
function minutedown() {
var minute = document.getElementById("minutes");
	minute.innerHTML = parseInt(minute.innerHTML) - 1;
	if (parseInt(minute.innerHTML) < 0) {
	minute.innerHTML = 59;
	}
}
function secondup() {
var second = document.getElementById("seconds");
	second.innerHTML = parseInt(second.innerHTML) + 1;
	if (parseInt(second.innerHTML) > 59) {
	second.innerHTML = 0;
	}
}
function seconddown() {
var second = document.getElementById("seconds");
	second.innerHTML = parseInt(second.innerHTML) - 1;
	if (parseInt(second.innerHTML) < 0) {
	second.innerHTML = 59;
	}
}
function starttimer() {

	var buttons = document.getElementsByTagName("Button");
	for (var i = 0; i < buttons.length - 1; i += 1){
		buttons[i].style.display = "none";
	}
	hours = parseInt(document.getElementById("hours").innerHTML);
	minutes = parseInt(document.getElementById("minutes").innerHTML);
	seconds = parseInt(document.getElementById("seconds").innerHTML);

	timer =	setInterval(countdown, 1000);

	
alert("TIMER HAS STARTED");

}

function closeModal() {
location.reload();

}

function countdown(){
	seconds -= 1;

	if (seconds < 0) {
		minutes -= 1;
		seconds = 59;

		if (minutes < 0) {
			hours -= 1;
			minutes = 59;

			if (hours < 0) {
				hours = 0;
				minutes = 0;
				seconds = 0;
			}
		}
	}
 
	if (seconds == 0 && minutes == 0 && hours == 0) {
		document.getElementById("myModal").style.display = "block";
		clearInterval(timer);
	}

document.getElementById("seconds").innerHTML = seconds;
document.getElementById("minutes").innerHTML = minutes; 
document.getElementById("hours").innerHTML = hours; 


}