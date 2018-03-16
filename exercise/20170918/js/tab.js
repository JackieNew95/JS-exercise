let aside=document.getElementsByClassName('aside')[0];
let lis=aside.getElementsByTagName('li');
let item=aside.getElementsByClassName('item');//方法三不需要


/*for(let i=0;i<lis.length;i++){
	lis[i].onmousemove=function(){
		item[i].style.display='block';
	}
	lis[i].onmouseout=function(){
		item[i].style.display='none';
	}
}//方法一*/

/*for(let i=0;i<lis.length;i++){
	lis[i].onmousemove=function(){
		item[i].className='item block';
	}
	lis[i].onmouseout=function(){
		item[i].className='item';
	}
}//方法二*/
/*
for(let i=0;i<lis.length;i++){
//所有的这里都不能用var，会报错，范围溢出，因为let可以保存每一次的值，var只能存下最后一次的值
//用var的话看方法四
	lis[i].onmousemove=function(){
		let item=this.getElementsByClassName('item')[0];
		item.className='item block';
	}
	lis[i].onmouseout=function(){
		let item=this.getElementsByClassName('item')[0];
		item.className='item';
	}
}//方法三
*/

/*
for(var i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onmousemove=function(){
		item[this.index].style.display='block';
	}
	lis[i].onmouseout=function(){
		item[this.index].style.display='none';
	}
}//方法四，使用var的情况

*/

//使用闭包函数解决上述问题
for(var i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onmousemove=function(i){
		return function(){
			item[this.index].style.display='block';
		}
	}(i);
	lis[i].onmouseout=function(i){
		return function(){
			item[this.index].style.display='none';
		}
	}(i);
}//方法五，使用闭包函数解决使用var的情况