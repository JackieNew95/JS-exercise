window.addEventListener('load',function () {
    let dl=document.querySelector('dl');

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

    function render(data) {
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
            group[element].forEach((value)=>{
                dl.innerHTML+=`<dd> <a href="tel:${value.tel}">${value.name}</a></dd>`;
            })
        })

}
});
