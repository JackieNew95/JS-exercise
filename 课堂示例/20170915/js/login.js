/*
* @Author: user
* @Date:   2017-09-15 16:40:37
* @Last Modified by:   user
* @Last Modified time: 2017-09-15 17:53:29
*/
let user=document.getElementById('user');
let pwd=document.getElementById('pwd');
let btn=document.getElementById('btn');

btn.onclick=function(){
	let u=user.value.trim();
	let p=pwd.value.trim();
	if(u=='zhangsan'&&p=='12345'){
		alert('登录成功!');
	}else{
		// location.href
		location.assign('error.html');
		// location.replace()
	}
}