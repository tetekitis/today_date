var todayDay = new Date().getDay()
switch(todayDay) {
	case 0:
	document.getElementById('h1Id').innerHTML = "Sunday";
	break;
	case 1:
	document.getElementById('h1Id').innerHTML = "Monday";
	break;
	case 2:
	document.getElementById('h1Id').innerHTML = "Tuesday";
	break;
	case 3:
	document.getElementById('h1Id').innerHTML = "Wednesday";
	break;
	case 4:
	document.getElementById('h1Id').innerHTML = "Thursday";
	break;
	case 5:
	document.getElementById('h1Id').innerHTML = "Friday";
	break;
	case 6:
	document.getElementById('h1Id').innerHTML = "Saturday";
	break;
}