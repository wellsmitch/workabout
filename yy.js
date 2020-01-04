//将要入库的地图要素的唯一标识，对应数据库中的mapping_id列
var mapping_id;

layui.use(['element', 'form', 'table', 'laydate','jquery'], function() {
    var table = layui.table,
        form = layui.form,
        layer = layui.layer,
        laydate = layui.laydate,
        $ = layui.jquery,
        $data_in_base = $("#data_in_base");


    // 事件委托

    $('#mapcon').on('mousemove','#toolbar' ,function (e) {
        $('#cursorStyle').css({
            'display':'none'
        });
        $(this).css({
            cursor: 'pointer'
        })
        e.stopPropagation()
    });
    $('#mapcon').on('mousemove','.ol-scale-line' ,function (e) {
        $('#cursorStyle').css({
            'display':'none'
        });
        $(this).css({
            cursor: 'initial'
        })
        e.stopPropagation()
    });
    $('#mapcon').on('mousemove','.ol-zoom-extent' ,function (e) {
        $('#cursorStyle').css({
            'display':'none'
        });
        $(this).css({
            cursor: 'initial'
        })
        e.stopPropagation()
    });
    $('#mapcon').on('mousemove','#mapMsgWraper' ,function (e) {
        $('#cursorStyle').css({
            'display':'none'
        });
        $(this).css({
            cursor: 'initial'
        })
        e.stopPropagation()
    });
    $('#mapcon').on('mousemove','.ol-zoom' ,function (e) {
        $('#cursorStyle').css({
            'display':'none'
        });
        $(this).css({
            cursor: 'initial'
        })
        e.stopPropagation()
    });
    $('#mapcon').on('mousemove','.ol-zoomslider' ,function (e) {
        $('#cursorStyle').css({
            'display':'none'
        });
        $(this).css({
            cursor: 'initial'
        })
        e.stopPropagation()
    });

    $('#mapcon').on('mousemove','#msg_con' ,function (e) {
        $('#cursorStyle').css({
            'display':'none'
        });
        $(this).css({
            cursor: 'initial'
        });
        e.stopPropagation()
    });

    var mouseStyle = false;

//    $('#mapcon').on('mouseenter',function (e) {
//        $('#cursorStyle').css({
//            'display':'block'
//        });
//    });
    $('#tool_con div').click(function() {
        $(this).toggleClass('blue_class').siblings().removeClass('blue_class');

        if($(this).hasClass('blue_class')) {
            mouseStyle = $(this).attr('att')
        }else {
            mouseStyle = false
        }
        if(mouseStyle == 'tuceng') {
            $('#mapMsgWraper').show();
            $('.ele_search').show().siblings().hide();
            $('#tucengList').show().siblings().hide()
        }else if(mouseStyle == 'zoomDelete') {
            $('#mapMsgWraper').show();
            $('.ele_del').show().siblings().hide();
            $('#delListWraper').show().siblings().hide()

        }
    })

//关闭要素查询  与  删除图层列表
    $('.closeAction').click(function() {
        $('#mapMsgWraper').hide()
    });

    $('#mapcon').on('mousemove',function (e) {

        if(mouseStyle=='zoomIn') {//放大
            $('#mapcon').css({
                cursor: 'none'
            })
            $('#cursorStyle').css({
                'display':'block',
                'background':"url('../../../static/image/rmenu1.gif') no-repeat",
                'left': e.offsetX+5,
                'top': e.offsetY+5
            });
            return
        }else if(mouseStyle=='zoomOut') {//缩小
            $('#mapcon').css({
                cursor: 'none'
            })
            $('#cursorStyle').css({
                'display':'block',
                'background':'url("../../../static/image/rmenu2.gif") no-repeat',
                'left': e.offsetX+5,
                'top': e.offsetY+5
            });
            return

        }else if(mouseStyle=='zoomMove') {//移动
            $('#mapcon').css({
                cursor: 'none'
            })
            $('#cursorStyle').css({
                'display':'block',
                'background':'url("../../../static/image/rmenu3.gif") no-repeat',
                'left': e.offsetX+5,
                'top': e.offsetY+5
            });return
        }

        $('#mapcon').css({
            cursor: 'default'
        })
    });


//    左右折叠事件
    $('#spread_close').click(function(){
        if(getComputedStyle(document.querySelector("#tool_con")).display == 'block') {
            $('#tool_con').hide();
            $('#spread_close').css({backgroundPositionY:0})
        }else {
            $('#tool_con').show();
            $('#spread_close').css({backgroundPositionY:-84})
        }
    });


    //窗口高度和宽度
    var winHeight = $("body").height();
    var winWidth = $("body").width();
    //地图窗口初始高度和宽度
    var mapDivHeight = winHeight - 20 - $("#analysisResultDiv").height();
    $("#mapcon").height(mapDivHeight);
    var mapDivWidth = winWidth - 10 - $("#rightDiv").width();
    $("#mapcon").width(mapDivWidth);
    $("#analysisResultDiv").width(mapDivWidth);
    $("#rightContentDiv").height(winHeight - 75);

    var initData;
    var map, mapView, bgLayer, highLightLayer;
    var viewCenter = [ 113.65308916005098, 34.748010970069835 ];
    var projectionStr = globalMapConfig.projection;

    var serverIp = globalMapConfig.serverIp, serverPort = globalMapConfig.serverPort, srsCnName = globalMapConfig.srsCnName;

    function pointArr(coordinatesStr){
        var pointArrs = new Array();
        var coordinatesPolygon = coordinatesStr.split(" ");
        for(var i = 0; i < coordinatesPolygon.length; i++){
            var c = coordinatesPolygon[i].split(",");
            var x = parseFloat(c[0]);
            var y = parseFloat(c[1]);
            var p2d = new Zondy.Object.Point2D(x, y);
            pointArrs.push(p2d);
        }
        return pointArrs;
    }
    //添加要素
    function insertFeature(documentName, layerIndex, coordinatesStr, done) {
        var pointObj = pointArr(coordinatesStr);
        //设置区要素的几何信息
        var gArc = new Zondy.Object.Arc(pointObj);
        //构成区要素折线
        var gAnyLine = new Zondy.Object.AnyLine([gArc]);
        //构成区要素
        var gRegion = new Zondy.Object.GRegion([gAnyLine]);
        //构成区要素的几何信息
        var fGeom = new Zondy.Object.FeatureGeometry({ RegGeom: [gRegion] });
        //随机输出1~1502之间的整数
        var fillColor = Math.floor(Math.random() * 1502 + 1);
        //设置区要素的图形参数信息
        var cRegionInfo = new Zondy.Object.CRegionInfo({ EndColor: 1, FillColor: fillColor, FillMode: 0, OutPenWidth: 1, OverMethod: 0, PatAngle: 1, PatColor: 1, PatHeight: 1, PatID: 27, PatWidth: 1 });
        //要素图形参数信息
        var graphicInfo = new Zondy.Object.WebGraphicsInfo({ InfoType: 3, RegInfo: cRegionInfo });
        //设置区要素的属性信息
        var attValue = [mapping_id];
        //创建一个新的区要素
        var newFeature = new Zondy.Object.Feature({ AttValue: attValue, fGeom: fGeom, GraphicInfo: graphicInfo });
        newFeature.setFType(3);
        //创建一个要素数据集
        var featureSet = new Zondy.Object.FeatureSet();
        var fldNumber = 23;
        var fldType = ["string"];
        var fldName = ["mapping_id"];
        var cAttValue = new Zondy.Object.CAttStruct({ FldNumber: fldNumber, FldType: fldType, FldName: fldName });
        featureSet.AttStruct = cAttValue;
        featureSet.addFeature(newFeature);
        //创建一个要素编辑服务对象
        var editDocFeature = new Zondy.Service.EditDocFeature(documentName, layerIndex, { ip: serverIp, port: serverPort });
        editDocFeature.add(featureSet, done);
    }
    function switchTabView(index, coordinatesStr){
        if(index == null){
            index = 0;
        }else if(index == "1" && coordinatesStr!=null){
            $("#coordinatesStr").val(coordinatesStr);
        }
        var willShowDiv = $('#import_result_'+index);
        willShowDiv.siblings("div").each(function(){
            $(this).hide();
        });
        willShowDiv.show();
    }
    var initMap = function() {
        var projection = ol.proj.get(projectionStr);
        mapView = new ol.View({
            center: viewCenter,
            zoom: 9,
            maxZoom: 18,
            minZoom: 9,
            projection: projection
        });
        map = new ol.Map({
            target : 'mapcon',
            view : mapView,
            controls: ol.control.defaults({
                attribution: false
            }).extend([
                new ol.control.ZoomToExtent({
                    extent: [112.763268988431,34.3203480200015,114.108961117027,35.1369637349141]
                })
            ])
        });
//		var layersyy = map.getLayers();
//		console.log(layersyy.item);


        /*var selectSingleClick = new ol.interaction.Select();
        map.addInteraction(selectSingleClick);
        selectSingleClick.on('click', function(e) {
            var features=e.target.getFeatures().getArray();
            console.log(features);
        });*/

        // 放大操作
        function zoomInFun() {
            //获取地图视图
            var view = map.getView();
            //获得当前缩放级数
            var zoom = view.getZoom();
            view.setZoom(zoom + 1);
            //地图放大一级

        }
        // 缩小操作
        function zoomOutFun() {
            //获取地图视图
            var view = map.getView();
            //获得当前缩放级数
            var zoom = view.getZoom();
            view.setZoom(zoom - 1);
            //地图放大一级
        }
        //删除图层
        function zoomtucengDelete() {
            $('#delList').append(
                '<li style="border-bottom:1px solid #e6e6e6;padding:10px 0;white-space: nowrap;">'
                +'这是要删除的内容<a href="javascript:" style="color: #FF5722;margin-left:50px">删除</a></li>')
        }
        //确认图层删除
        $('#yesDelTC').click(function() {
            console.log($('#delList li'))
        })

        //取消图层删除
        $('#TCcancel').click(function() {
            $('#delList li').remove()
            console.log($('#delList li'))
        })
        //取消图层单个删除要素

        $('#delList').on('click','li a',function() {
            $(this).parent().remove()
        })



        map.on("click", function(event){

            ///////选择时执行以下逻辑
            if(mouseStyle == 'zoomIn') {
//				放大
                zoomInFun();
                return

            }else if(mouseStyle == 'zoomOut') {
//				缩小
                zoomOutFun();
                return
            }else if(mouseStyle == 'zoomDelete') {
                zoomtucengDelete();
                return
//				删除
            }else if(mouseStyle == 'tuceng') {
//				图层
            }


            var queryStruct = new Zondy.Service.QueryFeatureStruct();
            queryStruct.IncludeGeometry = true;
            //创建一个用于查询的点形状
            var xy = ol.proj.transform(event.coordinate, "EPSG:4326", "EPSG:4526");
            var pointObj = new Zondy.Object.PointForQuery(xy[0], xy[1]);
            //设置点容差半径
            pointObj.nearDis = 0.1;
            //实例化查询参数对象
            var queryParam = new Zondy.Service.QueryParameter({
//                geometry: pointObj,
                resultFormat: "json",
                struct: queryStruct,
                where: "XMMC like '%新密%'"
            });
            //设置查询分页号
//            queryParam.pageIndex = 0;
            //设置查询要素数目
//            queryParam.recordNumber = 20;
            //实例化地图文档查询服务对象
            var queryService = new Zondy.Service.QueryDocFeature(queryParam, businessTypeInfo.documentName, 0, {
                ip: serverIp,
                port: serverPort
            });
            //执行查询操作，querySuccess为查询回调函数
            queryService.query(querySuccess, queryError);

            /*map.forEachFeatureAtPixel(pixel, function(feature, layer){
                console.log(feature);
            },{layerFilter: function(layer){
                return layer.getSource().getParams().LAYERS == businessTypeInfo.typeName;
            }});*/
        });
        //背景图层
        /*var bgSource = new ol.source.ImageWMS({
//	        url: 'http://10.0.0.114:6160/igs/rest/ogc/doc/QS2014410100ZD/WMSServer',
            url: 'http://10.0.0.114:6160/igs/rest/ogc/doc/郑州市索引图/WMSServer',
            params: {
                'LAYERS': 'L410100CBDJ2018KXJQH',
                "VERSION":"1.1.1"
            },
            projection:projection
        });
        var bgLayer = new ol.layer.Image({
            opacity: 1,
            source: bgSource
        });
        map.addLayer(bgLayer);*/
        //宗地图层
        /*var zdSource = new ol.source.ImageWMS({
            url: 'http://10.0.0.114:6160/igs/rest/ogc/doc/QS2014410100ZD/WMSServer',
            params: {
                'LAYERS': 'D410100QS2014KZDJBXX',
                "VERSION":"1.1.1"
            },
            projection:projection
        });
        var zdLayer = new ol.layer.Image({
            opacity: 1,
            source: zdSource
        });
        map.addLayer(zdLayer);*/

        /*var tdcbSource = new ol.source.ImageWMS({
            url: 'http://10.0.0.114:6160/igs/rest/ogc/doc/TDCB/WMSServer',
            params: {
                'LAYERS': 'LTDCB410100TDCB',
                "VERSION":"1.1.1"
            },
            projection:projection
        });
        var tdcbLayer = new ol.layer.Image({
            opacity: 1,
            source: tdcbSource
        });
        map.addLayer(tdcbLayer);*/
        var mousePositionControl = new ol.control.MousePosition({
            target: document.getElementById("mouseCoordinateSpan"),
            projection : projectionStr,
            className: "mouseCoordinateSpanCls",
            undefinedHTML: "&nbsp;"
        });
        map.addControl(mousePositionControl);
        var scaleLineControl = new ol.control.ScaleLine({
            units: "metric"
        });
        //将绘制层添加到地图容器中
        map.addControl(scaleLineControl);
        var zoomControl = new ol.control.Zoom({
            zoomInTipLabel: "放大",
            zoomOutTipLabel: "缩小"
        });
        map.addControl(zoomControl);
        var zoomSliderControl = new ol.control.ZoomSlider();
        map.addControl(zoomSliderControl);

        map.getView().on('change:resolution',checkZoom);
        function checkZoom(){
            var zoomLevel = map.getView().getZoom();
            $("#mapLevelSpan").html("当前显示级数：第&nbsp;&nbsp;&nbsp;&nbsp;"+zoomLevel+"&nbsp;&nbsp;&nbsp;&nbsp;级");
        }
        checkZoom();
        if(highLightLayer == null){
            highLightLayer = new ol.layer.Vector({
                source: new ol.source.Vector({
                    features: []
                })
            });
            map.addLayer(highLightLayer);
        }
        var layerSource = new ol.source.ImageWMS({
            url: 'http://'+serverIp+':'+serverPort+businessTypeInfo.wmsUrl,
            params: {
                'LAYERS': businessTypeInfo.typeName,
                "VERSION":"1.1.1"
            },
            projection:projection
        });
        var layer = new ol.layer.Image({
            opacity: 1,
            source: layerSource
        });
        map.addLayer(layer);
        form.render();


    }
    function querySuccess(result){
        console.log(result);
    }
    function queryError(e){
        console.log("error:"+e);
    }
    initMap();

    //监听file文件域的change事件
    $("#data_in_base").on('change','#coordinateUploadInput',function(e) {
        var files = e.target.files;
        if(!(files && files.length)) {
            return;
        }
        var files = e.target.files;
        if(!(files && files.length)) {
            return;
        }
        var formData = new FormData();
        formData.append('file',files[0]);
        $.ajax({
            url : basePath + '/eg/reserve/jsydmapping/uploadCoordinate',
            type : 'POST',
            dataType : 'JSON',
            contentType: false,
            processData: false,
            cache: false,
            data : formData,
            success : function(res) {
                if(res.success) {
                    switchTabView(1, res.data.coordinatesStr);
                    drawFeature(res.data.coordinatesStr, null, true);
                    analysisRequest(res.data.coordinatesStr);
                } else {
                    layer.msg(res.data, {icon : 5});
                }
            }
        });
        $(this).replaceWith($(this).val('').clone());
    });
    //取消入库
    function cancelStore(){
        refreshPage();
    }
    //入库
    function normalStore(){
        //正常入库之前需要验证是否有压盖或叠加，如果有，不允许正常入库
        var isYazhan = $("#analysisDetailTable").length > 0;
        if(isYazhan){
            layer.msg("导入地块与现有地块有叠加，入库失败，如需入库，请点击强制入库按钮！", {icon : 5});
            return;
        }
        landStore(0);
    }
    //强制入库
    function forceStore(){
        layer.confirm('执行后不可恢复，确定执行强制入库操作?',{title : '提示',icon : 3},function(idx) {
            landStore(1);
        });
    }
    //查询地块
    function queryLand(){
        $("#queryResultOutDiv").html("");
        var queryLandCode = $("#queryLandCode").val();
        var queryStruct = new Zondy.Service.QueryFeatureStruct();
        /*queryStruct.IncludeGeometry = true;
        //创建一个用于查询的点形状
        var xy = ol.proj.transform(event.coordinate, "EPSG:4326", "EPSG:4526");
        var pointObj = new Zondy.Object.PointForQuery(xy[0], xy[1]);
        //设置点容差半径
        pointObj.nearDis = 0.1;*/
        //实例化查询参数对象
        var queryParam = new Zondy.Service.QueryParameter({
//            geometry: pointObj,
            resultFormat: "json",
            struct: queryStruct,
            where: "land_code like '%"+queryLandCode+"%'"
        });
        //设置查询分页号
//        queryParam.pageIndex = 0;
        //设置查询要素数目
//        queryParam.recordNumber = 20;
        //实例化地图文档查询服务对象
        var queryService = new Zondy.Service.QueryDocFeature(queryParam, businessTypeInfo.documentName, 0, {
            ip: serverIp,
            port: serverPort
        });
        //执行查询操作，querySuccess为查询回调函数
        queryService.query(queryLandSuccess, queryError);
    }
    function queryLandSuccess(result){
        var data = [
            {fid:"1",land_code:"41010310000GB0001",location:"郑东荆轲路与伏牛路交叉口向西300米路南",area:"67867.89",map_num:"豫F001"},
            {fid:"2",land_code:"41010310000GB0001",location:"郑东荆轲路与伏牛路交叉口向西300米路南",area:"67867.89",map_num:"豫F001"},
            {fid:"3",land_code:"41010310000GB0001",location:"郑东荆轲路与伏牛路交叉口向西300米路南",area:"67867.89",map_num:"豫F001"},
            {fid:"4",land_code:"41010310000GB0001",location:"郑东荆轲路与伏牛路交叉口向西300米路南",area:"67867.89",map_num:"豫F001"},
            {fid:"5",land_code:"41010310000GB0001",location:"郑东荆轲路与伏牛路交叉口向西300米路南",area:"67867.89",map_num:"豫F001"},
            {fid:"6",land_code:"41010310000GB0001",location:"郑东荆轲路与伏牛路交叉口向西300米路南",area:"67867.89",map_num:"豫F001"},
            {fid:"7",land_code:"41010310000GB0001",location:"郑东荆轲路与伏牛路交叉口向西300米路南",area:"67867.89",map_num:"豫F001"},
            {fid:"8",land_code:"41010310000GB0001",location:"郑东荆轲路与伏牛路交叉口向西300米路南",area:"67867.89",map_num:"豫F001"},
            {fid:"9",land_code:"41010310000GB0001",location:"郑东荆轲路与伏牛路交叉口向西300米路南",area:"67867.89",map_num:"豫F001"},
            {fid:"10",land_code:"41010310000GB0001",location:"郑东荆轲路与伏牛路交叉口向西300米路南",area:"67867.89",map_num:"豫F001"},
            {fid:"11",land_code:"41010310000GB0001",location:"郑东荆轲路与伏牛路交叉口向西300米路南",area:"67867.89",map_num:"豫F001"}
        ];
        var queryResultOutDiv = $("#queryResultOutDiv");
        var coordinatesStr = "38423903.76468742,3838924.629693883 38440390.6565769,3838651.062387381 38432268.46305613,3829565.6615601485 38423903.76468742,3838924.629693883";
        for(var i = 0; i < data.length; i++){
            var recordDiv = $('<div class="queryResultRecordCls"></div>');
            var titleDiv = $('<div  class="queryResultRecordTitleDivCls" coordinatesStr="'+coordinatesStr+'">地块代码：'+data[i].land_code+'</div>');
            var detailUl = $("<ul></ul>");
            var locationLi = $("<li>坐落："+data[i].location+"</li>");
            var areaLi = $("<li>面积："+data[i].area+"</li>");
            var mapNumLi = $("<li>图幅号："+data[i].map_num+"</li>");
            detailUl.append(locationLi);
            detailUl.append(areaLi);
            detailUl.append(mapNumLi);
            recordDiv.append(titleDiv);
            recordDiv.append(detailUl);

            queryResultOutDiv.append(recordDiv);

            if(i == 0){
                drawFeature(coordinatesStr, null);
            }
        }
        $(".queryResultRecordTitleDivCls").on("click",locateLandInMap);
    }
    function locateLandInMap(){
        var coordinatesStr = $(this).attr("coordinatesStr");
        var pointArrs = new Array();
        var coordinatesPolygon = coordinatesStr.split(" ");
        for(var i = 0; i < coordinatesPolygon.length; i++){
            var c = coordinatesPolygon[i].split(",");
            var x = parseFloat(c[0]);
            var y = parseFloat(c[1]);
            var point4326 = ol.proj.transform([x, y], "EPSG:4526", "EPSG:4326");
            pointArrs.push(point4326);
        }
        var view = map.getView();
        view.fit((new ol.geom.Polygon([pointArrs])).getExtent(), map.getSize());
    }
    function refreshPage(){
        $("#queryLandCode").val("");
        $("#queryResultOutDiv").html("");

        $("#east_to").val("");
        $("#west_to").val("");
        $("#south_to").val("");
        $("#north_to").val("");
        $("#map_num").val("");
        $("#area").val("");
        $("#location").val("");
        $("#coordinatesStr").val("");
        initMap();
        if(highLightLayer!=null){
            highLightLayer.getSource().clear();
        }
        switchTabView(0);
        $("#analysisDetailBaseInfoContentDiv").html("");
        $("#analysisDetailTableInfoContentDiv").html("");

        $("#analysisResultDiv li[content-ref=analysisDetailBaseInfoDiv]").click();
    }
    //对导入的图形做叠加分析
    function analysisRequest(coordinatesStr){
        //生成分析结果存放的文件夹名字
        var analysisResultFolder = getAnalysisFolderName();
        var url = "http://"+serverIp+":"+serverPort+"/lnd/rest/comms/AnalysisClip";
        var params = {
            nIsProjTrans: 1,
            nIsXmlOrGml: 1,
            nPointLenGQ: 0,
            nPointLenMU: 0,
            nPointLenPM: 2,
//	  			strClassInfo: "(专题:,年度:2017,比例尺:G)",
//			strClassInfo: "(专题:JSYD)",//图层的信息，问实施人员，去查看图层的命名规范来决定
            strClassInfo: businessTypeInfo.strClassInfo,
//	  			[113.188917,34.674540], [113.330366,34.660807], [113.272688,34.611369],[113.188917,34.674540]
            strCoordCluster: coordinatesStr,
            strDesRefName: srsCnName,
            strRegion: "",  //行政区代码
            strSrcRefName: srsCnName,
            strSubPath: analysisResultFolder,
//			strTbl: "JSYDQKB"
            strTbl: businessTypeInfo.strTbl
        };
        $.ajax({
            url: "http://"+serverIp+":"+serverPort+"/lnd/rest/comms/AnalysisClip",
            type: "POST",
            contentType: "application/json",//重要，必须有
            dataType: "json",
            data: JSON.stringify(params),
            success: function(result){
                if(!(result.lstClipSubInfo != null && result.lstClipSubInfo.length > 0)){
                    console.log("中地的分析接口有问题，请联系中地研发协助解决");
                    layer.msg("分析失败，具体原因请联系系统维护人员！", {icon : 5});
                }
                var clipInfo = result.lstClipSubInfo[0];
                dealAnalysisResult(clipInfo);
            },
            error: function(error){
                layer.msg("分析失败，具体原因请联系系统维护人员！", {icon : 5});
            }
        });
    }

    function dealAnalysisResult(clipInfo){
        var baseInfo = clipInfo.basicInfo;
        $("#analysisDetailBaseInfoContentDiv").html("");
        $("#analysisDetailTableInfoContentDiv").html("");
        if(baseInfo.lstYearInfo.length < 2){
            //未压占
            var item = $("<div class='zl_info_left'><div style='padding:10px;'><div class='zl_info_sum'><span>"+baseInfo.lstYearInfo[0].name+"</span></div></div></div>");
            $("#analysisDetailBaseInfoContentDiv").append(item);
            $("#analysisDetailTableInfoContentDiv").append(item);
            return;
        }
        //有压占
        var firstRow = baseInfo.lstYearInfo[0].name;
        var secondRow = baseInfo.lstYearInfo[1].name + ":" + baseInfo.lstYearInfo[1].value + "&nbsp;&nbsp;&nbsp;&nbsp;<i>单位:平方米(亩)</i>";
        var thirdRow = baseInfo.lstYearInfo[2].name + ":" + baseInfo.lstYearInfo[2].value + "&nbsp;&nbsp;&nbsp;&nbsp;<i>单位:平方米(亩)</i>";
        var item = $("<div class='zl_info_left'><div style='padding:10px;'><div class='zl_info_sum'><span>"+firstRow+"</span></div></div></div>");
        $("#analysisDetailBaseInfoContentDiv").append(item);
        item = $("<div class='zl_info_left'><div style='padding:10px;'><div class='zl_info_sum'><span>"+secondRow+"</span></div></div></div>");
        $("#analysisDetailBaseInfoContentDiv").append(item);
        item = $("<div class='zl_info_left'><div style='padding:10px;'><div class='zl_info_sum'><span>"+thirdRow+"</span></div></div></div>");
        $("#analysisDetailBaseInfoContentDiv").append(item);

        var analysisDetailTable = $("<table id='analysisDetailTable' class='layui-table'></table>");
        $("#analysisDetailTableInfoContentDiv").append(analysisDetailTable);
        table.render({
            id: 'analysisDetailTable',
            elem: '#analysisDetailTable',
            height: $("#analysisDetailTableInfoContentDiv").parentsUntil(".customTabContentDivCls").height()-30,
            title: '压占地块',
            page: false,
            cols: [[
                {field: 'id', title: '序号', type: 'numbers', width:50},
                {field: '项目名称', title: '项目名称'},
                {field: '项目位置', title: '项目位置'},
                {field: '项目类型', title: '项目类型'},
                {field: '项目面积', title: '项目面积'},
                {field: '批复文号', title: '批复文号'}
            ]],
            data: clipInfo.clipInfo.lstTabInfo[0].lstRows
        });

        //叠加部分高亮显示
        var style = new ol.style.Style({
            //填充色
            fill: new ol.style.Fill({
                color: 'rgba(0, 255, 0, 0.5)'
            }),
            //边线颜色
            stroke: new ol.style.Stroke({
                color: '#ffffff',
                width: 2
            }),
            //形状
            image: new ol.style.Circle({
                radius: 5,
                fill: new ol.style.Fill({
                    color: '#33ccff'
                })
            })
        });
        for(var i = 0; i < clipInfo.clipInfo.lstTabInfo[0].lstRows.length; i++){
            var row = clipInfo.clipInfo.lstTabInfo[0].lstRows[i];
            var points = row.GEOMETRYS.split(",");
            var coordinatesStr = "";
            for(var m = 3; m < points.length; m++){
                coordinatesStr = coordinatesStr + points[m] + (m%2==1?",":" ");
            }
            coordinatesStr = coordinatesStr.substring(0, coordinatesStr.length - 1);
            drawFeature(coordinatesStr, style);
        }
    }

    var landStore = function (force_flage) {
        mapping_id = generateUUID();
        console.log(mapping_id);
        return;
        //先保存图形信息，成功后再保存业务属性信息，此处不受事务控制，存在风险
        //1、保存图形信息
//	  var businessTypeInfo = JSON.parse($("input[type=radio][name=businessType]:checked").attr("info"));
        var documentName = businessTypeInfo.documentName;
        var layerIndex = businessTypeInfo.layerIndex;
        var coordinatesStr = $("#coordinatesStr").val();
        insertFeature(documentName, layerIndex, coordinatesStr, function () {
            //2、保存业务属性信息
            var east_to = $("#east_to").val();
            var west_to = $("#west_to").val();
            var south_to = $("#south_to").val();
            var north_to = $("#north_to").val();
            var map_num = $("#map_num").val();
            var area = $("#area").val();
            var location = $("#location").val();
            var params = {
                location: location,
                area: area,
                map_num: map_num,
                east_to: east_to,
                west_to: west_to,
                south_to: south_to,
                north_to: north_to,
                busi_type: businessTypeId,
                force_flage: force_flage,
                mapping_id: mapping_id
            };
            $.ajax({
                url: basePath + '/eg/reserve/jsydmapping/initData',
                type: "POST",
                dataType: "json",
                data: {data: JSON.stringify(params)},
                success: function (result) {
                    if (result.success) {
                        layer.msg(result.msg, {icon: 6});
                        refreshPage();
                    } else {
                        layer.msg(result.msg, {icon: 5});
                    }
                }
            });
        });
    };

    function searchLand(){
        layer.msg("暂未实现！", {icon : 5});
        /*table.render({
            id : 'search_data_table',
            elem: '#search_data_table',
            height: 420,//表格总高度超出做隐藏处理
            url: basePath + '/eg/reserve/landmapping/queryLand',
            title: '查询结果',
            where: {}, //参数
            page: true, //开启分页
            cols: [[ //表头
                {field: 'id', title: '序号', width:80, sort: true},
                {field: 'level', title: '级别', width:80},
                {field: 'question', title: '问题分类'},
                {field: 'question_detail', title: '问题描述'}
            ]],
            done: function(result) {
                console.log(result);
            }
        });*/
    }
    /*
     *	在页面上画出要素，采用openlayer3画要素时要求坐标点为地理坐标，因此要对传入参数进行转换
     *    coordinatesStr: 坐标串
     *    style: 样式，如果为null，采用默认样式
     *    isShowCenter:要素添加完成后是否局中显示
     */
    function drawFeature(coordinatesStr, style, isShowCenter){
        if(style == null){
            style = new ol.style.Style({
                //填充色
                fill: new ol.style.Fill({
                    color: 'rgba(0, 0, 255, 0.5)'
                }),
                //边线颜色
                stroke: new ol.style.Stroke({
                    color: '#ff0000',
                    width: 2
                }),
                //形状
                image: new ol.style.Circle({
                    radius: 5,
                    fill: new ol.style.Fill({
                        color: '#ffcc33'
                    })
                })
            });
        }
        /* if(coordinatesStr == null){
   //		  coordinatesStr = "38423903.76468742,3838924.629693883 38440390.6565769,3838651.062387381 38432268.46305613,3829565.6615601485 38423903.76468742,3838924.629693883";
   //		  coordinatesStr = "113.338606,34.714365 113.480054,34.641581 113.279554,34.634714 113.338606,34.714365";
   //		  coordinatesStr = "113.39,34.83 113.39,34.84 113.40,34.84 113.40,34.83";
         }*/
        var pointArrs = new Array();
        var coordinatesPolygon = coordinatesStr.split(" ");
        for(var i = 0; i < coordinatesPolygon.length; i++){
            var c = coordinatesPolygon[i].split(",");
            var x = parseFloat(c[0]);
            var y = parseFloat(c[1]);
            var point4326 = ol.proj.transform([x, y], "EPSG:4526", "EPSG:4326");
            pointArrs.push(point4326);
        }
        var polygon = new ol.Feature({
            //name: "polygonFeature_"+index,
            geometry: new ol.geom.Polygon([pointArrs])
        });
        //设置区样式信息
        polygon.setStyle(style);
        highLightLayer.getSource().addFeature(polygon);
        if(isShowCenter){
            var view = map.getView();
            view.fit(polygon.getGeometry().getExtent(), map.getSize());
        }
    }

    function toggleMapDiv(){
        var isRightShow = !$("#form_arrow span").is(":hidden");
        var isAnalysisShow = !$("#analysis_arrow span").is(":hidden");
        if(!isRightShow && !isAnalysisShow){
            toggleRightDiv();
            toggleAnalysisDiv();
            return;
        }
        if(isRightShow){
            toggleRightDiv();
        }
        if(isAnalysisShow){
            toggleAnalysisDiv();
        }
    }

    function toggleRightDiv(){
        var isShow = !$("#form_arrow span").is(":hidden");
        if(isShow){
            $("#form_arrow span").hide();
            $("#form_arrow p").show();
            $("#rightDiv").width("0");
            $("#leftMapOutDiv").width(winWidth);
            $("#mapcon").width(winWidth-10);
            $("#analysisResultDiv").width(winWidth-10);
            $("#form_arrow").css("border-radius", "6px 0 0 6px")
                .css("left", "-7px");
            map.updateSize();
            return;
        }
        $("#form_arrow span").show();
        $("#form_arrow p").hide();
        $("#rightDiv").width("380px");
        $("#leftMapOutDiv").width(mapDivWidth);
        $("#mapcon").width(mapDivWidth);
        $("#analysisResultDiv").width(mapDivWidth);
        $("#form_arrow").css("border-top-left-radius", "0");
        $("#form_arrow").css("border-top-right-radius", "6px")
        $("#form_arrow").css("border-bottom-right-radius", "6px")
        $("#form_arrow").css("border-bottom-left-radius", "0")
        $("#form_arrow").css("left", "7px");
//	  mapView.setZoom(mapView.getZoom()-1);
        map.updateSize();
    }

    function toggleAnalysisDiv(){
        var isShow = !$("#analysis_arrow span").is(":hidden");
        if(isShow){
            $("#analysis_arrow span").hide();
            $("#analysis_arrow p").show();
            $("#analysisResultDiv").height("0");
            $("#mapcon").height(winHeight - 10);
            $("#analysis_arrow").css("border-radius", "6px 6px 0 0")
                .css("top", "-2px");
            map.updateSize();
            return;
        }
        $("#analysis_arrow span").show();
        $("#analysis_arrow p").hide();
        $("#analysisResultDiv").height("400px");
        $("#mapcon").height(mapDivHeight);
        $("#analysis_arrow").css("border-top-left-radius", "0");
        $("#analysis_arrow").css("border-top-right-radius", "0")
        $("#analysis_arrow").css("border-bottom-right-radius", "6px")
        $("#analysis_arrow").css("border-bottom-left-radius", "6px")
        $("#analysis_arrow").css("top", "14px");
//	  mapView.setZoom(mapView.getZoom()-1);
        map.updateSize();
    }

    $("#cancel_in").on("click", cancelStore);
    $("#normal_in").on("click", normalStore);
    $("#force_in").on("click", forceStore);
    $("#searchBtn").on("click", searchLand);
    $("#collapseMapDiv").on("click", toggleMapDiv);
    $("#queryLandBtn").on("click", queryLandSuccess);
    $("#form_arrow").on("click", toggleRightDiv);
    $("#analysis_arrow").on("click", toggleAnalysisDiv);

    function getAnalysisFolderName(){
        var d = new Date();
        var year = d.getFullYear()+"";
        var month = d.getMonth()+1<10?"0"+(d.getMonth()+1):(d.getMonth()+1);
        var day = d.getDate()+1<10?"0"+d.getDate():d.getDate();
        var str = year+month+day;
        return str+"_"+d.getTime();
    }

    function initCustomTab(){
        $(".customTabCls").each(function(){
            var contentHeight = ($(this).height() - 45);
            $(this).find(".customTabContentDivCls").height(contentHeight);
            $(this).find(".customTabTitleCls li").bind("click", function(){
                if($(this).hasClass("customTabSelectedCls")){
                    return;
                }
                var preSelected = $(this).siblings(".customTabSelectedCls");
                $("#"+preSelected.attr("content-ref")).hide();
                preSelected.removeClass("customTabSelectedCls");
                $(this).addClass("customTabSelectedCls");
                $("#"+ $(this).attr("content-ref")).show();
            });
            var selectedTabDom = $(this).find(".customTabTitleCls .customTabSelectedCls");
            selectedTabDom.click();
        });
    }
    initCustomTab();
})