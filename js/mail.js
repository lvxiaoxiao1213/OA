// JavaScript Document
//刷新页面
function winreload(){
	window.location.reload(true);
};
//验证表单
$().ready(function() {
    $("#sendForm").validate({
		rules : {
			accept : {
				required : true,
				email : true
			},
			content : {
				required : true,
				minlength : 2
			}
		},
		messages : {
			accept : {
				required : "请输入收件人邮箱",
				email : "请输入正确格式的电子邮箱"
			},
			content : {
				required : "请输入邮件内容",
				minlength : "邮件内容不能少于2个字符"
			}
		}
	});
});
//验证submit
$.validator.setDefaults({
	submitHandler : function(){
		$.ajax({
			method : "post",
			url : "",
			data : {
				"accept" : $("#accept").val(),
				"theme" : $("#theme").val(),
				"content" : $("#content").val()
			},
			dataType : "json",
			success: function(){},
			error: function(){
				console.log("error");
				$("#sendFailure").modal({
					keyboard : false
				});
			}
		});
	}
});