// JavaScript Document

//刷新页面
function winreload(){
	window.location.reload(true);
}
//保存草稿
function savaDraft(){
	$.ajax({
		method : "post",
		url : "",
		data : {
			"accept" : $('#accept').val(),
			"theme" : $('#theme').val(),
			"content" : $('#content').val()
		},
		dataType : "json",
		success : function(){},
		error : function(){
			console.log("error");
			$('#saveFailure').modal({
				keyboard : false
			});
		}
	});
};
//验证表单
$().ready(function() {
    $('#sendForm').validate({
		rules : {
			accept : {
				required : true
			},
			content : {
				required : true,
				minlength : 5
			}
		},
		messages : {
			accept : {
				required : "请输入消息接收者"
			},
			content : {
				required : "请输入消息内容",
				minlength : "消息内容不得少于5个字符"
			}
		}
	});
});

//submit验证
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
			success : function(){},
			error : function(){
				console.log("error");
				$("#sendFailure").modal({
					keyboard : false
				});
			}
		});	
	}
});

//从联系人上点击直接输入到接收方
function clickName(name){
	console.log(name);
	document.getElementById("accept").value = name;
};
