/*
* @Author: user
* @Date:   2017-09-21 08:28:27
* @Last Modified by:   user
* @Last Modified time: 2017-09-21 14:05:12
*/
let lunbo=$('.lunbo')[0];
let imgs=$('li',lunbo);
let btn=$('.btn-list')[0];
let btns=$('li',btn);
let pageUp=$('.banner-left')[0];
let pageDown=$('.banner-right')[0];
let pre=0;
let next=0;
let now=0;
let t;
/////////////////////////////////
///
///banner
///

for(let i=0;i<btns.length;i++){
	btns[i].onclick=function(){
		now=i;
		if(now==pre){
			return;
		}
		imgs[now].style.opacity='1';
		imgs[pre].style.opacity='0';
		btns[now].style.background='rgba(124, 124, 129,0.5)';		
		btns[pre].style.background='rgba(22, 22, 27,0.5)';
		pre=i;
	}
}
//点和图的关系

function move(){
	now++;
	if(now>=imgs.length){
		now=0;
	}
	imgs[now].style.opacity='1';
	imgs[pre].style.opacity='0';
	btns[now].style.background='rgba(124, 124, 129,0.5)';		
	btns[pre].style.background='rgba(22, 22, 27,0.5)';
	pre=now;
}//向下切换效果

function moveL(){
	now--;
	if(now<0){
		now=imgs.length-1;
	}
	imgs[now].style.opacity='1';
	imgs[pre].style.opacity='0';
	btns[now].style.background='rgba(124, 124, 129,0.5)';		
	btns[pre].style.background='rgba(22, 22, 27,0.5)';
	pre=now;
}//向上切换效果


t=setInterval(move,3000);
//自动轮播


pageDown.onclick=function(){
	move();
}
//向下翻页效果
pageUp.onclick=function(){
	moveL();
}
//向上翻页效果