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

function countdown_timer() {
	let user_date_input = document.getElementById("user-date");
	let user_time_input = document.getElementById("user-time");
	let start_timer_button = document.getElementById("start-timer");

	let user_date = new Date(user_date_input.value);
	let user_time = new Date(user_time_input.value);


	document.getElementById("user-values-date").innerHTML = user_date.getMilliseconds();
	document.getElementById("user-values-time").innerHTML = user_time.getMilliseconds();
	if (start_timer_button.value === "Start" && user_date_input.value !== "" && user_time_input.value !== "")
	{
		start_timer_button.value = "Stop";
		user_date_input.disabled = user_time_input.disabled = true;
	}
	else
	{
		start_timer_button.value = "Start";
		user_date_input.disabled = user_time_input.disabled = false;

	}

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