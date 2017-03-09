// JavaScript Document

//注册校验

function checkUserName()
{
	var oName=document.getElementById('username');
	var errorInfo=document.getElementById('e_info');
	var reName=/^[a-z0-9_]{3,16}$/;
	if(!reName.test(oName.value))
	{
		errorInfo.innerHTML='用户名为3-16位字符，包括数字，字母和下划线';
		oName.style.border='1px solid red';
	}else
	{
		errorInfo.innerHTML='';
		oName.style.border='1px solid grey';
		return true;
	}
}

function checkPwd()
{
	var oPwd=document.getElementById('password');
	var errorInfo=document.getElementById('e_info');
	var rePwd=/^[a-zA-Z0-9]{8,16}$/;
	if(!rePwd.test(oPwd.value))
	{
		errorInfo.innerHTML='密码位8-16字符';
		oPwd.style.border='1px solid red';
	}else
	{
		errorInfo.innerHTML='';
		oPwd.style.border='1px solid grey';
		return true;
	}
}
function checkRePwd()
{
	var oPwd=document.getElementById('password');
	var oRePwd=document.getElementById('repassword');
	var errorInfo=document.getElementById('e_info');
	if(oRePwd.value!=oPwd.value)
	{
		errorInfo.innerHTML='两次密码不一致';
		oRePwd.style.border='1px solid red';
	}else
	{
		errorInfo.innerHTML='';
		oRePwd.style.border='1px solid grey';
		return true;
	}
}
function checkTel()
{
	var oTel=document.getElementById('tel');
	var errorInfo=document.getElementById('e_info');
	var reTel=/^1\w{10}$/;
	if(!reTel.test(oTel.value))
	{
		errorInfo.innerHTML='手机号应为1开头的11位数字';
		oTel.style.border='1px solid red';
	}else
	{
		errorInfo.innerHTML='';
		oTel.style.border='1px solid grey';
		return true;
	}
}
function checkEmail()
{
	var oEmail=document.getElementById('email');
	var errorInfo=document.getElementById('e_info');
	var reEmail=/^\w+@[a-z0-9]+\.[a-z]+$/i;
	if(!reEmail.test(oEmail.value))
	{
		errorInfo.innerHTML='邮箱格式不正确';
		oEmail.style.border='1px solid red';
	}else
	{
		errorInfo.innerHTML='';
		oEmail.style.border='1px solid grey';
		return true;
	}
}
function validateForm()
{
	if(checkUserName()&&checkPwd()&&checkRePwd()&&checkTel()&&checkEmail())
	{
		alert('注册成功');
	}else
	{
		alert('注册失败');
	}
}

//登录注册切换
function clickLogin()
{
	var oLoginBtn = document.getElementById('login_btn');
	var oRegBtn = document.getElementById('reg_btn');
	var oLoginBox = document.getElementById('login_box');
	var oRegisterBox = document.getElementById('register_box');
	oLoginBox.style.display='block';
	oRegisterBox.style.display='none';
	oLoginBtn.style.color='#fff';
	oRegBtn.style.color='#ccc';
}
function clickReg()
{
	var oLoginBtn = document.getElementById('login_btn');
	var oRegBtn = document.getElementById('reg_btn');
	var oLoginBox = document.getElementById('login_box');
	var oRegisterBox = document.getElementById('register_box');
	oLoginBox.style.display='none';
	oRegisterBox.style.display='block';
	oLoginBtn.style.color='#ccc';
	oRegBtn.style.color='#fff';
}