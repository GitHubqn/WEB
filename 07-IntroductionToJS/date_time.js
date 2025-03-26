// JavaScript source code
//alert("Date & Time");
let current_time = new Date();
let date_and_time = document.getElementById("date-and-time");
date_and_time.innerHTML = `getDate():\t${current_time.getDate()};<br>`;
date_and_time.append(`getTime():\t${current_time.getTime()};`);
date_and_time.append(`getDay():\t${(new Date(2025, 03 - 1, 16)).toLocaleString("default", {weekday:"long"})};`);

//const WEEK = [""]

function tick_timer()
{
	let current_time = new Date();
	if (document.getElementById("show-date").checked)
	{
		let yyyy = current_time.getFullYear();
		let MM = checkNumber(current_time.getMonth() + 1);
		let dd = checkNumber(current_time.getDate());
		let date_string = `${yyyy}.${MM}.${dd}`;
		document.getElementById("date").innerHTML = date_string;
	}
	else
	{
		document.getElementById("date").innerHTML = "";
	}

	document.getElementById("weekday").innerHTML =
		document.getElementById("show-weekday").checked ? current_time.toLocaleString("default", { weekday: "long" }) : ""; 

	let hh = checkNumber(current_time.getHours());
	let mm = checkNumber(current_time.getMinutes());
	let ss = checkNumber(current_time.getSeconds());

	let time_string = `${hh}:${mm}:${ss}`;
	document.getElementById("time").innerHTML = time_string;
	setTimeout(tick_timer, 1000);	//setTimeout(function_pointer, milliseconds) - �������� ��������� ������� ����� ��������� ���������� �������.
}

function checkNumber(i)
{
	return i < 10 ? "0" + i : i;
}

function start_timer()
{
	let user_date_input = document.getElementById("user-date");
	let user_time_input = document.getElementById("user-time");
	let user_datetime_local = document.getElementById("user-datetime-local");

	let start_timer_button = document.getElementById("start-timer");

	let user_date = user_date_input.valueAsDate;
	let user_time = user_time_input.valueAsDate;

	document.getElementById("user-values-date").innerHTML = user_date;
	document.getElementById("user-values-time").innerHTML = user_time;
	document.getElementById("user-datetime-local-values").innerHTML = user_datetime_local.value;
	//document.getElementById("user-datetime-local-timestamp").innerHTML = new Date(user_datetime_local.value);
	document.getElementById("user-datetime-local-timestamp").innerHTML = user_datetime_local.valueAsNumber;

	if (start_timer_button.value === "Start" && user_date_input.value !== "" && user_time_input.value !== "")
	{
		start_timer_button.value = "Stop";
		user_date_input.disabled = user_time_input.disabled = user_datetime_local.disabled = true;
		countdown_timer();
	}
	else
	{
		start_timer_button.value = "Start";
		user_date_input.disabled = user_time_input.disabled = user_datetime_local.disabled = false;
	}
}

function countdown_timer()
{
	let user_datetime =  +new Date(document.getElementById("user-datetime-local").value);
	let current_time = +new Date();
	let timezone_offset = new Date().getTimezoneOffset()/60;
	//current_time += timezone_offset * 3600000;

	document.getElementById("current-timezone").innerHTML = `Current timezone: ${timezone_offset}`;
	document.getElementById("user-timezone").innerHTML = `Current timezone: ${document.getElementById("user-datetime-local").valueAsDate.getTimezoneOffset()}`;
	current_time = Math.trunc(current_time / 1000);
	user_datetime = Math.trunc(user_datetime / 1000);
	document.getElementById("current-timestamp").innerHTML = current_time;
	let timestamp = user_datetime - current_time;
	//timestamp = Math.trunc(timestamp / 1000);
	document.getElementById("difference").innerHTML = timestamp;

	const SECONDS_IN_MINUTE = 60;
	const SECONDS_IN_HOUR = 3600;
	const SECONDS_IN_DAY = 86400;
	const SECONDS_IN_WEEK = 86400 * 7;
	const DAYS_IN_MONTH = 365 / 12;
	const SECONDS_IN_MONTH = DAYS_IN_MONTH * SECONDS_IN_DAY;
	const SECONDS_IN_YEAR = SECONDS_IN_DAY * 365 + SECONDS_IN_HOUR * 6;

	let years = Math.trunc(timestamp / SECONDS_IN_YEAR);
	timestamp = Math.trunc(timestamp % SECONDS_IN_YEAR);

	let monthes = Math.trunc(timestamp / SECONDS_IN_MONTH);
	timestamp = Math.trunc(timestamp % SECONDS_IN_MONTH);

	let weeks = Math.trunc(timestamp / SECONDS_IN_WEEK);
	timestamp = Math.trunc(timestamp % SECONDS_IN_WEEK);

	let days = Math.trunc(timestamp / SECONDS_IN_DAY);
	timestamp = Math.trunc(timestamp % SECONDS_IN_DAY);

	let hours = Math.trunc(timestamp / SECONDS_IN_HOUR);
	timestamp = Math.trunc(timestamp % SECONDS_IN_HOUR);

	let minutes = Math.trunc(timestamp / SECONDS_IN_MINUTE);
	timestamp = Math.trunc(timestamp % SECONDS_IN_MINUTE);

	let seconds = Math.trunc(timestamp);


	document.getElementById("time-units").innerHTML =
		`${years} years, ${monthes} monthes, ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

	setTimeout(countdown_timer, 1000);
}

//alert(current_time);
/*
Date();			//Default constructor - ���������� ������� ���� � �����
Date(string);
Date(milliseconds);
Date(year);
Date(year,month);
Date(year,month,day);
Date(year,month,day,hours);
Date(year,month,day,hours,minutes);
Date(year,month,day,hours,minutes,seconds);
Date(year,month,day,hours,minutes,seconds,milliseconds);
 */