window.addEventListener('load',function () {
    let dl=document.querySelector('dl');
    let search=document.querySelector('input');
    let tips=document.querySelector('.tip');
    let aside=document.querySelector('.aside');

    let info=[
        {name:'牛佳琦',tel:'17835395667',pinyin:'niujiaqi'},
        {name:'贾亚楠',tel:'17835395951',pinyin:'jiayanan'},
        {name:'张秀荣',tel:'17835395638',pinyin:'zhangxiurong'},
        {name:'赵孟茹',tel:'17835395864',pinyin:'zhaomengru'},
        {name:'郭妍',tel:'17835395680',pinyin:'guoyan'},
        {name:'陈妍',tel:'17835395928',pinyin:'chenyan'},
        {name:'郭霞霞',tel:'17835395727',pinyin:'guoxiaxia'},
        {name:'孙丹丹',tel:'17835395664',pinyin:'sundandan'},
    ];

    render(info);

    search.onkeyup=function () {
        let value=this.value.trim();
        let data=info.filter(function (element) {
            return element.pinyin.includes(value)||element.name.includes(value)||element.tel.includes(value);
        })
        render(data);
    };//输入时搜索

    function render(data) {
        aside.innerHTML='';
        dl.innerHTML='';
        let group=[];
        data.forEach((element)=>{
            let first=element.pinyin.charAt(0).toUpperCase();
            if(!group[first]){
                group[first]=[];
            }
            group[first].push(element);
        });
        let char=Object.keys(group).sort();

        char.forEach((element)=>{
            dl.innerHTML+=`<dt>${element}</dt>`;
            aside.innerHTML+=`<li>${element}</li>`;
            group[element].forEach((value)=>{
                dl.innerHTML+=`<dd> <a href="tel:${value.tel}">${value.name}</a></dd>`;
            })
        })
    }//向页面中插入数据

    window.onscroll=function () {
        let dts = document.querySelectorAll('dt');
        let heights = document.body.scrollTop + search.offsetTop+dts[0].offsetHeight;
        tips.innerText = '';
        let arr = [];
        dts.forEach((element, index) => {
            arr.push(element.offsetTop);
            if (heights >= arr[index]) {
                tips.style.display='block';
                let t=setTimeout(()=>{
                    tips.style.display='none';
                    clearTimeout(t)
                },1500)
                tips.innerText = dts[index].innerText;
            }
        })
    }
});
