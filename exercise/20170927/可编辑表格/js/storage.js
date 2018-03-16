/*		存储、增、删、改、查
		属性
			存储
		方法
			增、删、改、查
*/
	class storage{
		constructor(){
			this.data=[
                {name:'王二',sex:'男',age:20,tel:1234789640},
                {name:'张三',sex:'男',age:20,tel:1234789640},
                {name:'李四',sex:'男',age:20,tel:1234789640},
                {name:'王五',sex:'男',age:20,tel:1234789640},
                {name:'赵六',sex:'男',age:20,tel:1234789640}
			];
		}
		_init(){
            localStorage.setItem('student',JSON.stringify(this.data));
        }//初始化，加下划线是一般写法，表示只供内部调用，不希望外部调用

		getData(){
			let data=localStorage.getItem('student');
            if(!data){
				data=this._init();
			}
			return this.data=JSON.parse(localStorage.getItem('student'));
            //此处不能直接写data，因为上面获取而有的data可能有值，可能没值
		}

		add(obj){
			this.data.push(obj);
			this.save();
		}

        del(index){
			//删哪行index
            this.data.splice(index,1);
            this.save();
		}

		update(index,key,value){
			/*
			* 要知道哪一行index哪一个key改成什么value*/
			this.data[index][key]=value;
			this.save();
		}

		save(){
			localStorage.setItem('student',JSON.stringify(this.data));
		}
	}

