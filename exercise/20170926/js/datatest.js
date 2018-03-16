/*
	模拟数据
	动态生成表格
 */

window.addEventListener('load',function(){
	let student=[
		{name:'张三',sex:'男',age:20,tel:1234789640},
		{name:'张三',sex:'男',age:20,tel:1234789640},
		{name:'李四',sex:'男',age:20,tel:1234789640},
		{name:'王五',sex:'男',age:20,tel:1234789640},
		{name:'赵六',sex:'男',age:20,tel:1234789640}
	]

	student.forEach(element=>{
		creatTr(element);
	})
	function creatTr(obj){
		let table=document.querySelector('table');
		let trs=document.createElement('tr');
		trs.innerHTML=`
			<td>${obj.name}</td>
			<td>${obj.sex}</td>
			<td>${obj.age}</td>
			<td>${obj.tel}</td>
			<td>
				<button class="delBtn">删除</button>
			</td>
		` 
		table.appendChild(trs);
	}
	
})