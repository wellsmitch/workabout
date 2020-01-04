/*for(var key in this.billList){
    //是否是billList自己身上的key
    if(this.billList.hasOwnProperty(key)){
        this.newList = Object.defineProperty(this.billList,this.time(key),Object.getOwnPropertyDescriptor(this.billList,key))
        delete this.newList[key]
    }
}*/

var data = {id:11,name:'张三'};
var keyMap = {id: '序列', name: '姓名'};
var objs= Object.keys(data).reduce((newData, key) => {
    let newKey = keyMap[key] || key;
    newData[newKey] = data[key];
    return newData
}, {});
console.log(objs);

findKey: function (obj, value) {
    return Object.keys(obj).find((k) => {
        return obj[k] == value
    })
},



// $('#inputListen input').on('input', function () {
//     // 生成有序的properties 对象
//     var propertiesKeyArr = [];
//     for (key1 in that.layerInfoObj.properties) {
//         propertiesKeyArr.push(key1);
//     }
//
//     // 不能重复添加图层的处理
//     for (var l = 0; l < $('input[keyListener]').length; l++) {
//
//     }
//
//     // 编辑
//     for (var l = 0; l < $('input[keyListener]').length; l++) {
//         if ($('input[keyListener]').eq(l).attr('keyListener') !== $('input[keyListener]').eq(l).val()) {
//             $('input[keyListener]').eq(l).attr('keyListener', $('input[keyListener]').eq(l).val());
//         }
//     }
//
//     var propertiesKeyObj = {};
//     for (var o = 0; o < $('input[keyListener]').length; o++) {
//         propertiesKeyObj[propertiesKeyArr[o]] = $('input[keyListener]').eq(o).attr('keyListener')
//     }
//
//     that.layerInfoObj.properties = Object.keys(that.layerInfoObj.properties).reduce((newData, key) => {
//         let newKey = propertiesKeyObj[key] || key;
//         newData[newKey] = that.layerInfoObj.properties[key];
//         return newData
//     }, {});
// })



// 修改businessConfig 对象中layer 对象
editBusinessLayer: function (obj, index) {
    return
    /****************后期编辑去掉**************/
    console.log(obj, index);
    var that = this;
    this.businessLayerIsEditObj = obj;
    // this.businessLayerIsEditObjIndex = index;
    var editBusinessLayer_layer = layer.open({
        type: 1
        , title: '业务信息'
        , offset: '100px'
        , area: ['60%', '50%']
        , shade: .6
        , maxmin: true
        , zIndex: layer.zIndex// layer.zIndex
        , content: $('#addBusinessLayerDiv')
        , btn: ['提交', '关闭']
        , yes: function () {
            $('#layerBusinessSubmit').click();
            layer.close(editBusinessLayer_layer)
        }
        , success: function () {
            $('#addBusinessLayerDiv form')[0].reset();
            $.each($('#addBusinessLayerDiv input'), function (i, ele) {
                if (that.layerMap[$(ele).attr('name')].name === obj.layer.name) {
                    console.log(ele);
                    $(ele).prop("checked", true);
                }
            });
            form.render();
        }
    })
},



<div class="" style="" v-for="(value, key) in layerInfoObj.properties">
    <div class="layui-inline">
    <!--<div>-->
    <label class="layui-form-label">数据库字段</label>
    <div class="layui-input-inline">
    <input type="text" :keyListener="key" v-model='key' markName="database" name="layerName" lay-verify="required"
autocomplete="off"
class="layui-input">
    </div>
    <!--</div>-->


    <div v-for="(value1, key1) in value" style="display: inline-block">
    <label class="layui-form-label">{{key1}}</label>
<div class="layui-input-inline">
    <input type="text" v-model='value[key1]' name="layerName" lay-verify="required"
autocomplete="off"
class="layui-input">
    </div>
    </div>
    </div>
    <hr>

    </div>
