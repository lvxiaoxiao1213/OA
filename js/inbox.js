// JavaScript Document

//删除邮件
function deleteInbox(id){
	console.log("deleteInbox:" + id);
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
//已读的查看
function boxinRead(id){
	console.log("boxinRead:" + id);
	$.ajax({
		method : "post",
		url : "",
		data : {
			"id" : id
		},
		dataType : "json",
		success : function(){
			window.location = "inboxRead.html";
		},
		error : function(){
			console.log("error");
			window.location = "inboxRead.html";
		}
	});
};
//未读的查看
function boxinUnread(id){
	console.log("boxinUnread:" + id);
	$.ajax({
		method : "post",
		url : "",
		data : {
			"id" : id
		},
		dataType : "json",
		success : function(){
			window.location = "inboxRead.html";
		},
		error : function(){
			console.log("error");
			window.location = "inboxRead.html";
		}
	});
};