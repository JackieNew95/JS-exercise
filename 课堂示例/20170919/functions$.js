		/*在W3C中，IE6~8不支持document.getElementsByClassName(className)
		需要用tag 和id 模拟

		步骤：
		判断是否兼容
			是-用JS自带的
			否-使用代替函数
		*/
	function getClass(classname,ranger){//寻找的类名，范围
		ranger=ranger?ranger:document;
		if(document.getElementsByClassName){
			return ranger.getElementsByClassName(classname);
		}else{
			var newarr=[];
			var all=ranger.getElementsByTagName('*');
			for(var i=0;i<all.length;i++){
				// if(all[i].className==classname){//获取单个是适用
				if(checkClass(all[i].className,classname)){//普适方法
					newarr.push(all[i]);
				}
			}
			return newarr;
		}
	}

	/*
		checkclassname(className,classname)
		className中是否包含classname
		className 	'box box1 box2'
		classname 	'box'
	 */
	function checkClass(className,classname){
		var arr=className.split(' ');
		for(var i=0;i<arr.length;i++){
			if(arr[i]==classname){
				return true;
			}
		}
		return false;
	}


		/*
			获取指定元素
			$('select')
			$('.one')
			$('#box')
			$('div')
			参数说明
				select  字符串  选择器
				1、 .  className
				2、 #  id
				3、    tagName  规则：
					1、以字符开头[a~z]
					2、
			$函数的作用，快速获取元素
		 */
		function $(select,ranger){
			ranger=ranger||document;
			var first=select.charAt(0);
			if(first=='#'){
				//id
				return document.getElementById(select.substring(1));
			}else if(first=='.'){
				//class
				return getClass(select.substring(1),ranger);
			}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){//正则表达式
				//tagName
				return ranger.getElementsByTagName(select);
			}

		}
