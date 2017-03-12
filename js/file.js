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