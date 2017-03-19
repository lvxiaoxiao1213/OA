// JavaScript Document
//刷新
function winreload(){
	window.location.reload(true);
}
//签到
function signIn(){
	$.ajax({
		method : "post",
		url : "",
		dataType : "json",
		success : function(){},
		error : function(){
			$("#signInFailure").modal({
				keyboard : false
			});
			console.log("Error");
		}
	});
}