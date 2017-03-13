// JavaScript Document
//提示框
$(function () { $("[data-toggle='tooltip']").tooltip(); });
//modal
var edid = 0;
var deid = 0;
function folder(){
	$('#folder').modal({
		keyboard : false
	});
};
function file(){
	$('#file').modal({
	    keyboard : false	
	});
};
function edit(editid){
	$('#edit').modal({
		keyboard : false
	});
	edid = editid;
	console.log("edid" + edid);
};
function editFo(editid){
	$('#editFo').modal({
		keyboard : false
	});
	edid = editid;
	console.log("edidFolder" + edid);
};
function deleteFo(deleteid){
	$('#deleteFo').modal({
		keyboard : false
	});
	deid = deleteid;
	console.log(deid);
};
function deleteFi(deleteid){
	$('#deleteFi').modal({
		keyboard : false
	});
	deid = deleteid;
	console.log(deid);
};
//新建文件夹
function createFolder(){
	var params = $('#folderName').serialize();
	$.ajax({
		method : "post",
		url : "",
		data : params,
		dataType : "json",
		success : function(){},
		error : function(){
			console.log("error");
			window.location.reload(true);
		}
	});
};
//新建文件
function createFile(){
	var params = $('#fileName').serialize();
	$.ajax({
		method : "post",
		url : "",
		data : params,
		dataType : "json",
		success : function(){},
		error : function(){
			console.log("error");
		}
	}); 
};
//打开文件夹
function openFolder(openFo){
	var id=openFo.id + "";
	console.log(id);
	$.ajax({
		method : "post",
		url : "",
		dataType : "json",
		success : function(data){
			window.location.reload(true);
		},
		error : function(){
			console.log("error");
		}
	});
};
//返回上级目录
function returnLast(retu){
	var id =retu.id + "";
	console.log(id);
	$.ajax({
		method : "post",
		url : "",
		dataType : "json",
		success : function(){},
		error: function(){
			console.log("error");
		}
	});
};
//确认删除文件夹
function confirmDeleteFo(){
	var id=deid;
	console.log(id);
	$.ajax({
		method : "post",
		url : "",
		dataType : "json",
		success : function(){},
		error : function(){
			console.log("error");
		}
	});
};
//确认删除文件
function confirmDeleteFi(){
	var id=deid;
	console.log(id);
	$.ajax({
		method : "post",
		url : "",
		dataType : "json",
		success : function(){},
		error : function(){
			console.log("error");
		}
	});
};
//文件重命名
function editName(){
	var id=edid;
	var input=document.getElementById('editinput').value;
	console.log(id);
	if(input == null || input == ""){
		document.getElementById('editMessage').style.display = "block";
		document.getElementById('topinfo').style.display = "none";
	}else{
		$.ajax({
			method : "post",
			url : "",
			data : {
				"id" : id,
				"newname" : input
			},
			dataType : "json",
			success : function(){},
			error : function(){
				console.log("error");
			}
		});
	}
};
//文件夹重命名
function editFoName(){
	var id = edid;
	var input = document.getElementById('editFoinput').value;
	console.log("edid: " + edid);
	console.log("input: " + input);
	if(input == null || input == ""){
		document.getElementById('editMessage').style.display = 'block';
		document.getElementById('topinfo').style.display = 'none';
	}else{
		$.ajax({
			method : "post",
			url : "",
			data : {
				"id" : id,
				"newname" : input
			},
			dataType : "json",
			success : function(){},
			error : function(){
				console.log("error");
			}
		});
	}
};


//提示创建失败信息
function co() {
	document.getElementById("message").style.display = 'none';
	document.getElementById("topinfo").style.display = 'block';
}
//返回父层目录（到头了）
function coReturn() {
	document.getElementById("returnMessage").style.display = 'none';
	document.getElementById("topinfo").style.display = 'block';
}
//重命名
function coEdit() {
	document.getElementById("editMessage").style.display = 'none';
	document.getElementById("topinfo").style.display = 'block';
}