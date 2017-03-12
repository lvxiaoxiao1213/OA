// JavaScript Document
//提示框
$(function () { $("[data-toggle='tooltip']").tooltip(); });
//modal
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