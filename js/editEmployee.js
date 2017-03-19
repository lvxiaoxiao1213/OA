// JavaScript Document
//保存
function editInformation(){
	var params = $("input").serialize();
	console.log(params);
	$.ajax({
		method : "post",
		url : "",
		data : params,
		dataType : "json",
		success : function(data) {
			console.log("success");
		},
		error : function() {
			console.log("error");
		}
	});
};