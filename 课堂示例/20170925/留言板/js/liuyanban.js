/*
* @Author: user
* @Date:   2017-09-25 22:17:03
* @Last Modified by:   user
* @Last Modified time: 2017-09-26 22:31:00
*/
window.addEventListener('load', function(){
	let textarea=document.querySelector('#textarea');
	let button=document.querySelector('button');
	let zishu=document.querySelector('.zishu');
	let neirrong=document.querySelector('.neirrong');


	textarea.addEventListener('keyup',function(e){
		let value=textarea.value;
		let tip=140-value.length;
		zishu.innerHTML=`您还可以输入${tip}个字`;


	})

	textarea.addEventListener('keydown',function(e){
		if(e.ctrlKey&&e.keyCode==13){
			let value=textarea.value;
			let plmain=document.querySelector('.plmain');
			let pls=document.createElement('div');
			pls.innerHTML=`
					<div class="pls-l">
						<div class="plsl-img">
							<img class="plsl-imgs" src="img/1.jpg" alt="我是头像">
						</div>
						<strong>JKN</strong>
						<span>I am JKN,from China.</span>
					</div>
					<div class="pls-r">
						<p class="neirrong"></p>
					</div>
			`
			pls.className='pls';
			plmain.prependChild(pls);
			textarea.value='';
			let plslimgs=document.querySelector('.plsl-imgs');
			let strong=document.querySelector('strong');
			let span=document.querySelector('span');
			let p=document.querySelector('.neirrong');

			p.innerHTML=value;
			plslimgs.src='img/1.jpg';
			strong.innerHTML='JKN';
			span.innerHTML='I am JKN,from China.';

		}


	})


	button.addEventListener('click',function(e){
		let value=textarea.value;
		let plmain=document.querySelector('.plmain');
/*
		let pls=document.createElement('div');
		pls.className='pls';
		let plsl=document.createElement('div');
		plsl.className='pls-l';
		let plsr=document.createElement('div');
		plsr.className='pls-r';
		let plslimg=document.createElement('div');
		plslimg.className='plsl-img';
		let plslimgs=document.createElement('img');
		plslimgs.className='plsl-imgs';
		let strong=document.createElement('strong');
		let span=document.createElement('span');
		let p=document.createElement('p');
		p.className='neirrong';

		// plmain.appendChild(pls);
		plmain.prependChild(pls);//最新留言靠前
		pls.appendChild(plsl);
		pls.appendChild(plsr);
		plsl.appendChild(plslimg);
		plsl.appendChild(strong);
		plsl.appendChild(span);
		plslimg.appendChild(plslimgs);
		plsr.appendChild(p);
		textarea.value='';
		//方法二：创建元素并插入
*/

		let pls=document.createElement('div');
		pls.innerHTML=`
				<div class="pls-l">
					<div class="plsl-img">
						<img class="plsl-imgs" src="img/1.jpg" alt="我是头像">
					</div>
					<strong>JKN</strong>
					<span>I am JKN,from China.</span>
				</div>
				<div class="pls-r">
					<p class="neirrong"></p>
				</div>
		`
		pls.className='pls';
		plmain.prependChild(pls);
		textarea.value='';
		let plslimgs=document.querySelector('.plsl-imgs');
		let strong=document.querySelector('strong');
		let span=document.querySelector('span');
		let p=document.querySelector('.neirrong');
		
		// 方法三：创建模版字符串、大批量插入元素时使用模版字符串比较简单
		
		//插入
		p.innerHTML=value;
		plslimgs.src='img/1.jpg';
		strong.innerHTML='JKN';
		span.innerHTML='I am JKN,from China.';
	})
})
