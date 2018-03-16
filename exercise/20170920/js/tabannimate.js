let aside=document.getElementsByClassName('aside')[0];
let lis=aside.getElementsByTagName('li');
let item=aside.getElementsByClassName('item');


///////////////////////////////////////////////////////////////////////////
///
///侧导航的实现
///

for(let i=0;i<lis.length;i++){
	lis[i].onmousemove=function(){
		item[i].style.display='block';
	}
	lis[i].onmouseout=function(){
		item[i].style.display='none';
	}
}

////////////////////////////////////////////////////////////////////////////////////////////
///
///banner
///使用animate实现动画效果
///
let point=$('.point')[0];
let points=$('li',point);
let imgBox=$('.imgBox')[0];
let imgs=$('li',imgBox);
let t;
let num=0;
let page=$('.page')[0];
let pages=$('li',page);

for(let i=0;i<imgs.length;i++){
	points[i].onmouseover=function(){
		for(let j=0;j<imgs.length;j++){
			animate(imgs[j],{opacity:0});
			// imgs[j].style.opacity='0';
			points[j].className='points';
		}
		// imgs[i].style.opacity='1';
		animate(imgs[i],{opacity:1});
		points[i].className='points pointsnow';
		num=i;//从鼠标移除处自动播放
	}
}//点与图的联系

t=setInterval(move,3000);

function move(){
	num++;
	if(num>=imgs.length){
		num=0;
	}
	for(let i=0;i<imgs.length;i++){
		// imgs[i].style.opacity='0';
		animate(imgs[i],{opacity:0});
		points[i].className='points';
	}	
		// imgs[num].style.opacity='1';
		animate(imgs[num],{opacity:1});
		points[num].className='points pointsnow';
}
//自动轮播


imgBox.onmouseover=function(){
	clearInterval(t);
}
imgBox.onmouseout=function(){
	t=setInterval(move,3000);
}
pages[0].onmouseover=function(){
	clearInterval(t);
}
pages[0].onmouseout=function(){
	t=setInterval(move,3000);
}
pages[1].onmouseover=function(){
	clearInterval(t);
}
pages[1].onmouseout=function(){
	t=setInterval(move,3000);
}

//鼠标放在图片、翻页按钮上停止轮播，移出继续


pages[0].onclick=function(){
	moveL();
}
pages[1].onclick=function(){
	move();
}
function moveL(){
	num--;
	if(num<0){
		num=imgs.length-1;
	}
	for(let i=0;i<imgs.length;i++){
		// imgs[i].style.opacity='0';
		animate(imgs[i],{opacity:0});
		points[i].className='points';
	}	
		// imgs[num].style.opacity='1';
		animate(imgs[num],{opacity:1});
		points[num].className='points pointsnow';
}
//翻页按钮与点和图的联系
