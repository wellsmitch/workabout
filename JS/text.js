function toNum(obj) {
    if (Array.isArray(obj)) {
        obj.map(function (ele) {
            ele.layers.map(function (ele2, index) {
                for (key in ele2) {
                    console.log(typeof ele2[key]);
                    if(typeof ele2[key] != 'boolean' &&!isNaN(Number(ele2[key]))) {
                        ele2[key] = Number(ele2[key]);
                    }

                }
            })
        })
    } else {
        for (key in obj) {
            if (Array.isArray(obj[key])) {
                obj[key].map(function (ele, index) {
                    obj[key][index] = isNaN(Number(ele)) ? ele : Number(ele);
                })
            }
            if (!isNaN(obj[key])) {
                obj[key] = Number(obj[key])
            }
        }
    }
    return obj;
}

var businessConfig = [
    { // 专题配置
        name: 'ysydchrk',// 专题英文名称
        title: '用地预审测绘入库',//专题名称
        layers: [
            {//专题配置->图层属性
                layer: 'layerMap.XZQH',// 图层名称-
                show: true,// 是否显示
                select: false,//是否可选
                opacity: '1'//透明度
            }
        ]
    }
];


var sf = {
    a: "234234",
    g: "fvasdr",
    d: ["41234", "fasr"]
};

console.log(toNum(businessConfig));
