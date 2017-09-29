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
    let tbody=document.querySelector('tbody');
    let dataObj=new storage();
	let student=dataObj.getData();

	load();
    function load(element,index) {
        student.forEach((element,index)=>{
                trs(element,index);
            }
        )
    }//封装起来便于删除时刷新下标

	function trs(obj,i) {
        let trs=document.createElement('tr');
        trs.id=i;
        for(let j in obj){
        	trs.innerHTML+=`
        		<td id="${j}">${obj[j]}</td>
        	`
		}
		trs.innerHTML+=`<td class='del'><button class="delBtn">删除</button></td>`;
        tbody.appendChild(trs);
    }

    table.addEventListener('dblclick',function(e){
            let element=e.target;
            if(element.nodeName=='TD'&&element.className!='del'){
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
                    // if(newv){
                    //     element.innerText=newv;
                    // }else{
                    //     element.innerText=oldv;
                    // }
                    element.innerText=newv;
                    let row=element.parentNode.id;
                    let key=element.id;
                    dataObj.update(row,key,newv);
                }
            }//双击编辑

            table.addEventListener('dblclick',function(e){
                let element=e.target;
                if(element.className='del'){
                    let trs=element.parentNode.parentNode;
                    tbody.removeChild(trs);
                    let row=element.parentNode.parentNode.id;
                    dataObj.del(row);
                    tbody.innerHTML='';//刷新下标相当于重新插入元素，所以要先清空
                    load();//刷新下标
                }
            })//删除功能
        })

	let addBtn=document.querySelector('.addBtn');
	addBtn.addEventListener('click',function(e){
        let tr={name:'',sex:'',age:'',tel:''};
        dataObj.add(tr);
        tbody.innerHTML='';
        load(tr,tbody.childElementCount);
	})
})