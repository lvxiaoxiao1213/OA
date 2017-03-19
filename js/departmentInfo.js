// JavaScript Document
//查看部门信息
function openDepartment(id) {
	console.log("Department ID: " + id);
	$.ajax({
		method : "post",
		url : "",
		data : {
			"id" : id
		},
		dataType : "json",
		success : function() {
			window.location = "";
		},
		error : function() {
			window.location = "departmentDetails.html";
			console.log("error");
		}
	});
};