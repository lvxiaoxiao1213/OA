// JavaScript Document
//删除
function deleteOutbox(id){
	console.log("DeleteOutbox:" + id);
	$.ajax({
		method : "post",
		url : "",
		data : {
			"id" : id
		},
		dataType : "json",
		success: function(){},
		error: function(){
			console.log("error");
		}
	});
};
//查看发件箱信件内容
function boxoutRead(id){
	console.log("boxoutRead :" +id);
	$.ajax({
		method : "post",
		url : "",
		data : {
			"id" : id
		},
		dataType : "json",
		success : function(){
			window.location = "outboxRead.html";
		},
		error : function(){
			console.log("error");
			window.location = "outboxRead.html";
		}
	});
};