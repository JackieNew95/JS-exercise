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
///
let point=$('.point')[0];
let points=$('li',point);
let imgBox=$('.imgBox')[0];
let imgs=$('li',imgBox);
let t;
let num=0;
let page=$('.page')[0];
let pages=$('li',page);
let now=0;
let nowp=1;
let next=0;
let imgW=parseInt(getComputedStyle(imgBox,null).width);
let flag=true;

/*
	next 位置 (imgW,0)
	动画
		now (0,0)->(-imgW,0)
		next(imgW,0)->(0,0)
	更新
		now=next
 */




t=setInterval(move,3000);

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

function move(){
	next++;
	if(next==imgs.length){
		next=0;
	}
	if(nowp==imgs.length){
		nowp=0;
	}
	imgs[next].style.left=`${imgW}px`;

	for(let j=0;j<points.length;j++){
		points[j].style.background='#000';
	}	
	points[nowp++].style.background='#999';
	animate(imgs[now],{left:-imgW});
	animate(imgs[next],{left:0},function(){
		flag=true;
	});
	now=next;
}
//自动轮播

function moveL(){
	next--;
	if(next<0){
		next=imgs.length-1;
	}
	if(nowp<0){
		nowp=imgs.length-1;
	}
	imgs[next].style.left=`${-imgW}px`;
	for(let j=0;j<points.length;j++){
		points[j].style.background='#000';
	}	
	points[nowp--].style.background='#999';
	animate(imgs[now],{left:imgW});
	animate(imgs[next],{left:0},function(){
		flag=true;
	});
	now=next;
}


pages[0].onclick=function(){
	if(!flag){
		return;
	}
	moveL();
	flag=false;
}
pages[1].onclick=function(){
	if(!flag){
		return;
	}
	move();
	flag=false;
}

//翻页按钮与点和图的联系


for(let i=0;i<points.length;i++){
	points[i].onclick=function(){
		if(now==i){return;}
		for(let j=0;j<points.length;j++){
			points[j].style.background='#000';
		}	
		points[i].style.background='#999';
		imgs[i].style.left=`${imgW}px`;
		animate(imgs[next],{left:-imgW});
		animate(imgs[i],{left:0});
		now=next=i;
	}
}//点与图的联系







/*
for(let i=0;i<imgs.length;i++){
	points[i].onmouseover=function(){
		for(let j=0;j<imgs.length;j++){
			imgs[j].style.opacity='0';
			points[j].className='points';
		}
		imgs[i].style.opacity='1';
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
		imgs[i].style.opacity='0';
		points[i].className='points';
	}	
		imgs[num].style.opacity='1';
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
		imgs[i].style.opacity='0';
		points[i].className='points';
	}	
		imgs[num].style.opacity='1';
		points[num].className='points pointsnow';
}
//翻页按钮与点和图的联系
*/