/*
	思路：
		保存：td oldv
		td 清空
		input(oldv)->td

	更新：
		保存 input newv
		input 删除
		newv ->td
*/

window.addEventListener('load',function(){
	let table=document.querySelector('table');
	let tds=document.querySelectorAll('td');
	let value=tds.value;

	table.addEventListener('dblclick',function(e){
		let element=e.target;
		if(element.nodeName=='TD'){

			let oldv=element.innerText;
			element.innerHTML='';
			let inputs=document.createElement('input');
			inputs.value=oldv;
			element.appendChild(inputs);
			inputs.focus();

			inputs.onblur=function(){
				let newv=this.value.trim();
				element.removeChild(inputs);
				inpus=null;
				if(newv){
					element.innerText=newv;				
				}else{
					element.innerText=oldv;
				}
			}
		}//双击编辑
	

	let tbody=document.querySelector('tbody');
	table.addEventListener('dblclick',function(e){
		let element=e.target;
		if(element.nodeName=='BUTTON'){
			let trs=element.parentNode.parentNode;
			table.removeChild(trs);
		}
	})//删除功能

	})



	let addBtn=document.querySelector('.addBtn');
	addBtn.addEventListener('click',function(e){
		let trs=document.createElement('tr');
		trs.innerHTML=`
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>
				<button class="delBtn">删除</button>
			</td>
		` 
		table.appendChild(trs);

	})
})