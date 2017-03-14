// JavaScript Document
$(function() {
	$('[data-toggle="tooltip"]').tooltip();
});
//排序
function sortBy(id){
	console.log("operation:" +id);
	$.ajax({
		method : "post",
		url : "",
		data : {
			"sort" : id
		},
		dataType : "json",
		success: function(){
			window.location.reload(true);
		},
		error: function(){
			console.log("error");
			window.location.reload(true);
		}
	});
};