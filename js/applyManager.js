// JavaScript Document
//刷新
function winreload(){
	window.location.reload(true);
}
//查看
function applyRead(id){
	$.ajax({
		method : "post",
		url : "",
		data : {
			"id" : id
		},
		dataType : "json",
		success : function(data) {
			window.location = "applyInfo.html";
		},
		error : function() {
			console.log("Error");
			window.location = "applyInfo.html";
		}
	});
}
//驳回
function applyRefuse(id){
	$.ajax({
		method : "post",
		url : "",
		data : {
			"id" : id
		},
		dataType : "json",
		success : function(data) {},
		error : function() {
			$("#opFailure").modal({
				keyboard : false
			});
			console.log("Error");
		}
	});
}
//通过
function applyOk(id){
	$.ajax({
		method : "post",
		url : "",
		data : {
			"id" : id
		},
		dataType : "json",
		success : function(data) {},
		error : function() {
			$("#opFailure").modal({
				keyboard : false
			});
			console.log("Error");
		}
	});
}