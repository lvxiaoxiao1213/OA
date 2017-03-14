// JavaScript Document
//彻底删除文件
function deleteFile(id){
	console.log("file:" +id);
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
			window.location.reload(true);
		}
	});
};
//彻底删除文件夹
function deleteDirectory(id){
	console.log("Directory:"+id);
	$.ajax({
		method : "post",
		url:"",
		data : {
			"id" : id
		},
		dataType : "json",
		success: function(){},
		error: function(){
			console.log("error");
			window.location.reload(true);
		}
	});
};
//还原删除文件
function returnTrashFile(id){
	console.log("还原File:" + id);
	$.ajax({
		method : "post",
		url : "",
		data : {
			"id" : id
		},
		dataType : "json",
		success: function(){
			
		},
		error: function(){
			console.log("error");
			window.location.reload(true);
		}
	});
};
//还原删除文件夹
function returnTrashDirectory(id){
	console.log("还原Directory:" +id);
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
			window.location.reload(true);
		}
	});
};
//关闭提示s
function co(){
	document.getElementById('message').style.display = 'none';
};


