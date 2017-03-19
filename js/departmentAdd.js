// JavaScript Document
//新增部门
function submitDepartment(){
	var params=$('input').serialize();
	$.ajax({
		method:"post",
		url:"",
		data:params,
		dataType:"json",
		success:function(data){
			window.location.reload(true);
		},
		error:function(){
			console.log("Error");
		}
	});
}