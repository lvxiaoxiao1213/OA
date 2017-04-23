// JavaScript Document
//编辑用户角色
var edid = 0;
function editUser(id){
	$('#editUser').modal({
		keyboard : false
	});
	edid = id;
	console.log(edid);
}
function editUserRole(){
	var id=edid;
	var input=document.getElementById('userRole').value;
	console.log(id);
	console.log(input)
	$.ajax({
		method : "post",
		url : "",
		data : {
			"id" : id,
			"role" : input
		},
		dataType : "json",
		success : function(){	
			window.location.reload(true);
		},
		error : function(){
			console.log("error");
		}
	});
};
//查看用户详情
function openUserInfo(id){
	$.ajax({
		method : "post",
		url : "",
		data : {
			"id" : id,
		},
		dataType : "json",
		success : function(){	
		},
		error : function(){
			window.location.href="userListInfo.html";
		}
	});
}