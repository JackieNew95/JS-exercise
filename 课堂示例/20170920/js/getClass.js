/*
* @Author: user
* @Date:   2017-09-19 18:03:07
* @Last Modified by:   user
* @Last Modified time: 2017-09-19 18:04:11
*/
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