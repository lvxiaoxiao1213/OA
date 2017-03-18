// JavaScript Document
//保存草稿
function saveDraft(id){
	console.log("saveDraft:"+id);
	$.ajax({
		method : "post",
		url : "",
		data : {
			"id" : id,
			"accept" : $("#accept").val(),
			"theme" : $("#theme").val(),
			"content" : $("#content").val()
		},
		dataType : "json",
		success : function(){},
		error : function(){
			$("#saveFailure").modal({
				keyboard : false
			});
		}
	});
};
//发送
function sendDraft(id){
	$.ajax({
		method : "post",
		url : "",
		data : {
			"id" : id,
			"accept" : $("#accept").val(),
			"theme" : $("#theme").val(),
			"content" : $("#content").val()
		},
		dataType : "json",
		success : function(){},
		error : function(){
			$("#sendFailure").modal({
				keyboard : false
			});
		}
	});
}
//返回草稿箱
function returnDraft(){
	window.location = "draft.html";
}
//刷新
function winreload(){
	window.location.reload = "true";
}
//点击联系人自动加在收件人
function addressee(name){
	document.getElementById('accept').value = name;
}