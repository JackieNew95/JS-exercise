/*
* @Author: user
* @Date:   2017-09-15 17:18:06
* @Last Modified by:   user
* @Last Modified time: 2017-09-15 17:44:13
*/
let info=document.getElementById('info');
let t=setInterval(function(){
	if(info.innerText<2){//为啥这样写才能在0停下
		clearInterval(t);
		location.replace('login.html');
	}
	info.innerText-=1;
},1000)