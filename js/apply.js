// JavaScript Document
//刷新
function winreload(){
	window.location.reload(true);
}

//出差，补签，请假
function operation(op){
	console.log("operation:" + op);
	$.ajax({
		method : "post",
		url : "",
		data : {
			"operation" : op,
			"accept" :$("#accept").val(),
			"content" : $("#content").val(),
			"startDays" : $("#startDays").val(),
			"endDays" : $("#endDays").val()
		},
		dataType : "json",
		success: function(){},
		error: function(){
			console.log("error");
			$("#sendFailure").modal({
				keyboard : false
			});
		}
	});
};