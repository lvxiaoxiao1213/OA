// JavaScript Document
//修改密码
function updatePassword(){
	$("#uPassword").modal({
		keyboard : false
	});
}
//验证
$().ready(function(e) {
    $("#conPassword").validate({
		rules : {
			password : {
				required : true,
				minlength : 5
			},
			confirmPassword : {
				required : true,
				minlength : 5,
				equalTo : "#password"
			}
		},
		messages : {
			password : {
				required : "请输入密码",
				minlength : "密码长度不得少于5个字符"
			},
			confirmPassword : {
				required : "请确认密码",
				minlength : "密码长度不得少于5个字符",
				equalTo : "两次密码不匹配，请重新输入"
			}
		}
	});
});
//提交
$.validator.setDefaults({
	submitHandler : function(){
		var params = $("input").serialize();
		$.ajax({
			method : "post",
			url : "",
			data : params,
			dataType : "json",
			success: function(){
				console.log("success");
			},
			error: function(){
				console.log("error");
			}  
		});
	}
});