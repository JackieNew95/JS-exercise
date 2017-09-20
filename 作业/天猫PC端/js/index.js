/*
* @Author: user
* @Date:   2017-09-18 19:36:15
* @Last Modified by:   user
* @Last Modified time: 2017-09-19 20:00:13
*/
// 侧边栏
let items=document.getElementsByClassName('item');
let aside=document.getElementsByTagName('aside')[0];
let lis=document.getElementsByClassName('asideli');
for(let i=0;i<items.length;i++){
	lis[i].onmouseover=function(){
		items[i].style.display='block';
	}
	lis[i].onmouseout=function(){
		items[i].style.display='none';
	}
}

// banner
let bannerimg=document.getElementsByClassName('bannerimg')[0];
let imgs=bannerimg.getElementsByTagName('li');
let points=document.getElementsByClassName('point');
let num=0;

for(let i=0;i<points.length;i++){
	points[i].onmouseover=function(){
		for(let j=0;j<imgs.length;j++){
			imgs[j].style.opacity='0';
			points[j].className='point';
		}
		imgs[i].style.opacity='1';		
		points[i].className='point point-now';
		num=i;
	}
}//方法一：先隐藏所有图片，只显示当前图片

/*let now=0;
for(let i=0;i<points.length;i++){
	points[i].onmouseover=function(){
		imgs[now].style.opacity='0';
		imgs[i].style.opacity='1';
		points[now].className='point';
		points[i].className='point point-now';
		now=i;		
	}
}//方法二：先隐藏所有图片，只显示当前图片*/

//自动轮播效果
let t=setInterval(move,3000);

bannerimg.onmouseover=function(){
	clearInterval(t);
}
bannerimg.onmouseout=function(){
	t=setInterval(move,3000);
}

function move(){
	num++;
	if(num==imgs.length){
		num=0;
	}
	for(let i=0;i<imgs.length;i++){
		imgs[i].style.opacity='0';
		points[i].className='point';
	}
	imgs[num].style.opacity='1';
	points[num].className='point point-now';
}

