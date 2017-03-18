// JavaScript Document
//还原
function recoveryTrash(id){
    console.log("recovery :" + id);
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
//删除
function deleteTrash(id){
	console.log("delete :" + id);
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