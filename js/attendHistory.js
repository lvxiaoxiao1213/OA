// JavaScript Document
//提交
function submitDay(){
	var params = $("input").serialize();
	console.log(params);
	$.ajax({
		method : "post",
		url : "",
		data : params,
		dataType : "json",
		success: function(){
			window.location.reload(true);
		},
		error: function(){
			console.log("error");
		}
	});
};
//清空
function clearDay(){
	$.ajax({
		method : "post",
		url : "",
		dataType : "json",
		success: function(){
			window.location.reload(true);
		},
		error : function(){
			console.log("error");
		}
	});
}
