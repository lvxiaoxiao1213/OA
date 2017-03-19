// JavaScript Document
//显示时间
function showTime(){
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth()+1;
	var day = today.getDate();
	var week = today.getDay();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	hours = addZero(hours);
	minutes = addZero(minutes);
	seconds = addZero(seconds);
	switch(week){
		case 0:
		week = "星期日";
		break;
		case 1:
		week = "星期一";
		break;
		case 2:
		week = "星期二";
		break;
		case 3:
		week = "星期三";
		break;
		case 4:
		week = "星期四";
		break;
		case 5:
		week = "星期五";
		break;
		case 6:
		week = "星期六";
		break;
	}
	document.getElementById('txt').innerHTML = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds + " " + week;
	t = setTimeout('showTime()',500);
};
//补零
function addZero(i){
	if(i < 10){
		i = "0" +i;
	}
	return i;
}
//签到
function signIn(){
	$.ajax({
		method : "post",
		url : "",
		dataType : "json",
		success: function(){},
		error: function(){
			$("#signInFailure").modal({
				keyboard : false
			});
			console.log("error");
		}
	});
};
//签退
function signOut(){
	$.ajax({
		method : "post",
		url : "",
		dataType : "json",
		success: function(){},
		error: function(){
			$("#signOutFailure").modal({
				keyboard : false
			});
			console.log("error");
		}
	});
}