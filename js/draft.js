// JavaScript Document
//刷新页面
function winreload(){
	window.location.reload("true");
}
//查看
function draftRead(id){
	console.log("readDraft:" + id);
	$.ajax({
		method : "post",
		url : "",
		data : {
			"id" : id
		},
		dataType : "json",
		success : function(){},
		error : function(){
			window.location = "draftRead.html"
			console.log("error");
		}
	});
};
//删除
function deleteDraft(id){
	console.log("delete:"+id);
	$.ajax({
		method : "post",
		url : "",
		data : {
			"id" : id
		},
		dataType : "json",
		success : function(){},
		error : function(){
			console.log("error");
		}
	});
};
//发送
function sendDraft(id){
	console.log("sendDraft:" + id);
	$.ajax({
		method : "post",
		url : "",
		data : {
			"id" : id
		},
		dataType : "json",
		success: function(){},
		error: function(){
			$("#sendFailure").modal({
				keyboard : false
			});
		}
	});
};