var globalMapConfig = {
    "projection": "EPSG:4326",
    "localProjection": "EPSG:4526",
    "serverIp": "10.0.0.123",
    "serverPort": "6163",
    "srsCnName": "高斯大地坐标系_中国2000_38带3_北2",
    "viewCenter": [38441428.42785, 3828000.39275],
    "projectionExtent": [38446904.8127, 3820993.9438, 38489800.043, 3871604.8417],
    "minX": 38379906.892075,
    "minY": 3791299.29652517,
    "maxX": 38520881.804775,
    "maxY": 3874969.75312517,
    "maxResolution": 13758.333333333334,
    "zoomToExtent": [38358233.33, 3742266.67, 38523333.33, 3907366.67],
    "initZoom": 6,
    "maxZoom": 18,
    "minZoom": 5,
    "highLightLandStyle": {
        "geometry_": null,
        "fill_": {"color_": "#aa3300"},
        "image_": {
            "checksums_": null,
            "canvas_": {},
            "hitDetectionCanvas_": {},
            "fill_": {"color_": "#ffcc33"},
            "origin_": [0, 0],
            "points_": null,
            "radius_": 5,
            "radius2_": 5,
            "angle_": 0,
            "stroke_": null,
            "anchor_": [5.5, 5.5],
            "size_": [11, 11],
            "imageSize_": [11, 11],
            "hitDetectionImageSize_": [11, 11],
            "opacity_": 1,
            "rotateWithView_": false,
            "rotation_": 0,
            "scale_": 1,
            "snapToPixel_": true
        },
        "stroke_": {"color_": "#ffcc33", "lineDash_": null, "width_": 2},
        "text_": null
    },
    "analysisRequest": {"url": "http://10.0.0.123:6163/lnd/rest/comms/AnalysisClipCondition"},
    "areaRequest": {"url": "http://10.0.0.123:6163/lnd/rest/comms/Buffer"}
};
var layerMap = {
    "YSYD": {
        "type": "wms",
        "name": "预审用地",
        "docName": "YSYD",
        "layer": "LYSYD410100YSYD",
        "layerIndex": 0,
        "strClassInfo": "(专题:YSYD)",
        "updateStrClassInfo": "专题:YSYD",
        "strTbl": "YSYDQKB",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/doc/YSYD/WMSServer",
        "properties": {
            "landCode": {"name": "LAND_CODE", "title": "地块代码", "show": true},
            "mappingId": {"name": "GUID", "title": "项目GUID", "show": false},
            "xmmc": {"name": "XMMC", "title": "项目名称", "show": true},
            "pfwh": {"name": "PFWH", "title": "批复文号", "show": true},
            "xmmj": {"name": "XMMJ", "title": "项目面积", "show": true},
            "location": {"name": "LOCATION", "title": "位置", "show": true},
            "layerStatus": {"name": "LAYER_STATUS,状态", "title": "状态", "show": true},
            "area": {"name": "mpArea,mpArea", "title": "面积", "show": true},
            "mpPerimeter": {"name": "mpPerimeter", "title": "周长", "show": true},
            "analysisArea": {"name": "analysisArea", "title": "分析面积", "show": false}
        },
        "simpleName": "YSYD"
    },
    "YSSH": {
        "type": "wms",
        "name": "预审审核",
        "layer": "LYSSH410100YDYSSH",
        "docName": "YSSH",
        "layerIndex": 0,
        "strClassInfo": "(专题:YSSH)",
        "updateStrClassInfo": "专题:YSSH",
        "strTbl": "YSSHQKB",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/doc/YSSH/WMSServer",
        "properties": {
            "landCode": {"name": "LAND_CODE", "title": "地块代码", "show": true},
            "mappingId": {"name": "GUID", "title": "项目GUID", "show": false},
            "xmmc": {"name": "XMMC", "title": "项目名称", "show": true},
            "pfwh": {"name": "PFWH", "title": "批复文号", "show": true},
            "xmmj": {"name": "XMMJ", "title": "项目面积", "show": true},
            "location": {"name": "LOCATION", "title": "位置", "show": true},
            "layerStatus": {"name": "LAYER_STATUS,状态", "title": "状态", "show": true},
            "area": {"name": "mpArea,mpArea", "title": "面积", "show": true},
            "mpPerimeter": {"name": "mpPerimeter", "title": "周长", "show": true},
            "analysisArea": {"name": "analysisArea", "title": "分析面积", "show": false}
        }
    },
    "YDYS": {
        "type": "wms",
        "name": "用地预审",
        "layer": "LYDYS410100YDYS",
        "docName": "YDYS",
        "layerIndex": 0,
        "strClassInfo": "(专题:YDYS)",
        "updateStrClassInfo": "专题:YDYS",
        "strTbl": "YDYSQKB",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/doc/YDYS/WMSServer",
        "properties": {
            "landCode": {"name": "LAND_CODE,地块编码", "title": "地块代码", "show": true},
            "mappingId": {"name": "GUID", "title": "图形id", "show": false},
            "XM_GUID": {"name": "GUID,XM_GUID", "title": "项目GUID", "show": false},
            "xmmc": {"name": "XMMC,项目名称", "title": "项目名称", "show": true},
            "pfwh": {"name": "PFWH,批复文号", "title": "批复文号", "show": true},
            "xmmj": {"name": "XMMJ,项目面积", "title": "项目面积", "show": true},
            "location": {"name": "LOCATION,坐落", "title": "位置", "show": true},
            "layerStatus": {"name": "LAYER_STATUS,状态", "title": "状态", "show": true},
            "area": {"name": "mpArea,面积", "title": "面积", "show": true},
            "mpPerimeter": {"name": "mpPerimeter,周长", "title": "周长", "show": true},
            "analysisArea": {"name": "analysisArea", "title": "分析面积", "show": false}
        }
    },
    "BPYD": {
        "type": "wms",
        "name": "报批用地",
        "layer": "LBPYD410100BPYD",
        "docName": "BPYD",
        "layerIndex": 0,
        "strClassInfo": "(专题:BPYD)",
        "updateStrClassInfo": "专题:BPYD",
        "strTbl": "BPYDQKB",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/doc/BPYD/WMSServer",
        "properties": {
            "landCode": {"name": "LAND_CODE,地块编码", "title": "地块代码", "show": true},
            "mappingId": {"name": "GUID", "title": "图形id", "show": false},
            "XM_GUID": {"name": "GUID,XM_GUID", "title": "项目GUID", "show": false},
            "xmmc": {"name": "XMMC,项目名称", "title": "项目名称", "show": true},
            "pfwh": {"name": "PFWH,批复文号", "title": "批复文号", "show": true},
            "xmmj": {"name": "XMMJ,项目面积", "title": "项目面积", "show": true},
            "location": {"name": "LOCATION,坐落", "title": "位置", "show": true},
            "layerStatus": {"name": "LAYER_STATUS,状态", "title": "状态", "show": true},
            "area": {"name": "mpArea,面积", "title": "面积", "show": true},
            "mpPerimeter": {"name": "mpPerimeter,周长", "title": "周长", "show": true},
            "analysisArea": {"name": "analysisArea", "title": "分析面积", "show": false}
        }
    },
    "BPSH": {
        "type": "wms",
        "name": "报批审核",
        "layer": "LBPSH410100JSYDBPSH",
        "docName": "BPSH",
        "layerIndex": 0,
        "strClassInfo": "(专题:BPSH)",
        "updateStrClassInfo": "专题:BPSH",
        "strTbl": "BPSHQKB",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/doc/BPSH/WMSServer",
        "properties": {
            "landCode": {"name": "LAND_CODE,地块编码", "title": "地块代码", "show": true},
            "mappingId": {"name": "GUID", "title": "图形id", "show": false},
            "XM_GUID": {"name": "GUID,XM_GUID", "title": "项目GUID", "show": false},
            "xmmc": {"name": "XMMC,项目名称", "title": "项目名称", "show": true},
            "pfwh": {"name": "PFWH,批复文号", "title": "批复文号", "show": true},
            "xmmj": {"name": "XMMJ,项目面积", "title": "项目面积", "show": true},
            "location": {"name": "LOCATION,坐落", "title": "位置", "show": true},
            "layerStatus": {"name": "LAYER_STATUS,状态", "title": "状态", "show": true},
            "area": {"name": "mpArea,面积", "title": "面积", "show": true},
            "mpPerimeter": {"name": "mpPerimeter,周长", "title": "周长", "show": true},
            "analysisArea": {"name": "analysisArea", "title": "分析面积", "show": false}
        }
    },
    "JSYD": {
        "type": "wms",
        "name": "用地报批",
        "layer": "LJSYD410100JSYD",
        "busiType": "03",
        "layerStatus": "3",
        "docName": "JSYD",
        "layerIndex": 0,
        "strClassInfo": "(专题:JSYD)",
        "updateStrClassInfo": "专题:JSYD",
        "strTbl": "JSYDQKB",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/doc/JSYD/WMSServer",
        "properties": {
            "landCode": {"name": "LAND_CODE,地块编码", "title": "地块代码", "show": true},
            "mappingId": {"name": "GUID", "title": "图形id", "show": false},
            "XM_GUID": {"name": "GUID,XM_GUID", "title": "项目GUID", "show": false},
            "xmmc": {"name": "XMMC,项目名称", "title": "项目名称", "show": true},
            "pfwh": {"name": "PFWH,批复文号", "title": "批复文号", "show": true},
            "xmmj": {"name": "XMMJ,项目面积", "title": "项目面积", "show": true},
            "location": {"name": "LOCATION,坐落", "title": "位置", "show": true},
            "layerStatus": {"name": "LAYER_STATUS,状态", "title": "状态", "show": true},
            "area": {"name": "mpArea,面积", "title": "面积", "show": true},
            "mpPerimeter": {"name": "mpPerimeter,周长", "title": "周长", "show": true},
            "analysisArea": {"name": "analysisArea", "title": "分析面积", "show": false}
        }
    },
    "CBYD": {
        "type": "wms",
        "name": "储备用地",
        "docName": "CBYD",
        "busiType": "05",
        "layerStatus": "1",
        "layer": "LCBYD410100CBYD",
        "layerIndex": 0,
        "strClassInfo": "(专题:CBYD)",
        "strTbl": "CBYDTJ",
        "updateStrClassInfo": "专题:CBYD",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/doc/CBYD/WMSServer",
        "properties": {
            "landCode": {"name": "LAND_CODE,地块编码", "title": "地块代码", "show": true},
            "mappingId": {"name": "GUID,项目_GUID", "title": "项目GUID", "show": false},
            "dzjgh": {"name": "DZJGH,电子监管号", "title": "电子监管号", "show": true},
            "location": {"name": "ZDZL,宗地坐落", "title": "宗地坐落", "show": true},
            "zdmj": {"name": "ZDMJ,宗地面积", "title": "宗地面积", "show": true},
            "rksj": {"name": "RKSJ,入库时间", "title": "入库时间", "show": true},
            "mpArea": {"name": "mpArea,面积", "title": "面积", "show": true},
            "area": {"name": "mpArea,面积", "title": "面积", "show": false},
            "mpPerimeter": {"name": "mpPerimeter", "title": "周长", "show": true},
            "layerStatus": {"name": "LAYER_STATUS,状态", "title": "状态", "show": true},
            "analysisArea": {"name": "analysisArea", "title": "分析面积", "show": false}
        }
    },
    "CBSH": {
        "type": "wms",
        "name": "储备审核",
        "docName": "CBSH",
        "busiType": "05",
        "layerStatus": "2",
        "layer": "LCBSH410100TDCBSH",
        "layerIndex": 0,
        "strClassInfo": "(专题:CBSH)",
        "updateStrClassInfo": "专题:CBSH",
        "strTbl": "CBSHTJ",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/doc/CBSH/WMSServer",
        "properties": {
            "landCode": {"name": "LAND_CODE,地块编码", "title": "地块代码", "show": true},
            "mappingId": {"name": "GUID,项目_GUID", "title": "项目GUID", "show": false},
            "dzjgh": {"name": "DZJGH,电子监管号", "title": "电子监管号", "show": true},
            "location": {"name": "ZDZL,宗地坐落,LOCATION", "title": "宗地坐落", "show": true},
            "zdmj": {"name": "ZDMJ,宗地面积", "title": "宗地面积", "show": false},
            "rksj": {"name": "RKSJ,入库时间", "title": "入库时间", "show": true},
            "area": {"name": "mpArea,面积,ZDMJ,AREA", "title": "面积", "show": true},
            "mpPerimeter": {"name": "mpPerimeter", "title": "周长", "show": true},
            "layerStatus": {"name": "LAYER_STATUS,状态", "title": "状态", "show": true},
            "analysisArea": {"name": "analysisArea", "title": "分析面积", "show": false}
        }
    },
    "TDCB": {
        "type": "wms",
        "name": "土地储备",
        "docName": "TDCB",
        "busiType": "05",
        "layerStatus": "3",
        "layer": "LTDCB410100TDCB",
        "layerIndex": 0,
        "strClassInfo": "(专题:TDCB)",
        "strTbl": "TDCBTJ",
        "updateStrClassInfo": "专题:TDCB",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/doc/TDCB/WMSServer",
        "properties": {
            "landCode": {"name": "LAND_CODE,地块编码", "title": "地块代码", "show": true},
            "mappingId": {"name": "GUID,项目_GUID", "title": "项目GUID", "show": false},
            "dzjgh": {"name": "DZJGH,电子监管号", "title": "电子监管号", "show": true},
            "location": {"name": "ZDZL,宗地坐落,LOCATION", "title": "宗地坐落", "show": true},
            "zdmj": {"name": "ZDMJ,宗地面积", "title": "宗地面积", "show": true},
            "rksj": {"name": "RKSJ,入库时间", "title": "入库时间", "show": true},
            "area": {"name": "mpArea,面积,AREA", "title": "面积", "show": true},
            "mpPerimeter": {"name": "mpPerimeter", "title": "周长", "show": true},
            "layerStatus": {"name": "LAYER_STATUS,状态", "title": "状态", "show": false},
            "analysisArea": {"name": "analysisArea", "title": "分析面积", "show": false}
        }
    },
    "GDYD": {
        "type": "wms",
        "name": "供地用地",
        "docName": "GDYD",
        "busiType": "06",
        "layerStatus": "1",
        "layer": "LGDYD410100GDYD",
        "layerIndex": 0,
        "strClassInfo": "(专题:GDYD)",
        "updateStrClassInfo": "专题:GDYD",
        "strTbl": "GDYDQKB",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/doc/GDYD/WMSServer",
        "properties": {
            "landCode": {"name": "LAND_CODE,地块编码", "title": "地块代码", "show": true},
            "mappingId": {"name": "GUID", "title": "项目GUID", "show": false},
            "xmmc": {"name": "XMMC,项目名称", "title": "项目名称", "show": true},
            "pfwh": {"name": "PFWH,批复文号", "title": "批复文号", "show": true},
            "xmmj": {"name": "XMMJ,项目面积", "title": "项目面积", "show": true},
            "location": {"name": "LOCATION,坐落", "title": "位置", "show": true},
            "tdyt": {"name": "TDYT,土地用途", "title": "土地用途", "show": true},
            "layerStatus": {"name": "LAYER_STATUS,状态", "title": "状态", "show": false},
            "area": {"name": "AREA,面积", "title": "面积", "show": true},
            "analysisArea": {"name": "analysisArea", "title": "分析面积", "show": false}
        }
    },
    "GDSH": {
        "type": "wms",
        "name": "供地审核",
        "docName": "GDSH",
        "busiType": "06",
        "layerStatus": "2",
        "layer": "LGDSH410100GDXMSH",
        "layerIndex": 0,
        "strClassInfo": "(专题:GDSH)",
        "updateStrClassInfo": "专题:GDSH",
        "strTbl": "GDSHQKB",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/doc/GDSH/WMSServer",
        "properties": {
            "landCode": {"name": "LAND_CODE,地块编码", "title": "地块代码", "show": true},
            "mappingId": {"name": "GUID", "title": "项目GUID", "show": false},
            "xmmc": {"name": "XMMC,项目名称", "title": "项目名称", "show": true},
            "pfwh": {"name": "PFWH,批复文号", "title": "批复文号", "show": true},
            "xmmj": {"name": "XMMJ,项目面积", "title": "项目面积", "show": true},
            "location": {"name": "LOCATION,坐落", "title": "位置", "show": true},
            "tdyt": {"name": "TDYT,土地用途", "title": "土地用途", "show": true},
            "layerStatus": {"name": "LAYER_STATUS,状态", "title": "状态", "show": false},
            "area": {"name": "AREA,面积", "title": "面积", "show": true}
        }
    },
    "GDXM": {
        "type": "wms",
        "name": "土地供应",
        "docName": "GDXM",
        "busiType": "06",
        "layerStatus": "3",
        "layer": "LGDXM410100GDXM",
        "layerIndex": 0,
        "strClassInfo": "(专题:GDXM)",
        "updateStrClassInfo": "专题:GDXM",
        "strTbl": "GDXMQKB",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/doc/GDXM/WMSServer",
        "properties": {
            "landCode": {"name": "LAND_CODE,地块编码", "title": "地块代码", "show": true},
            "mappingId": {"name": "GUID", "title": "项目GUID", "show": false},
            "xmmc": {"name": "XMMC,项目名称", "title": "项目名称", "show": true},
            "pfwh": {"name": "PFWH,批复文号", "title": "批复文号", "show": true},
            "xmmj": {"name": "XMMJ,项目面积", "title": "项目面积", "show": true},
            "location": {"name": "LOCATION,坐落", "title": "位置", "show": true},
            "tdyt": {"name": "TDYT,土地用途", "title": "土地用途", "show": true},
            "layerStatus": {"name": "LAYER_STATUS,状态", "title": "状态", "show": false},
            "area": {"name": "AREA,面积", "title": "面积", "show": true}
        }
    },
    "ZDJBXX": {
        "type": "wms",
        "name": "宗地",
        "docName": "QS4101002019ZDJBXX",
        "layer": "D410100QS2019KZDJBXX",
        "layerIndex": 0,
        "strClassInfo": "(专题:QS,年度:2019,比例尺:K)",
        "strTbl": "ZDXX",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/doc/QS4101002019ZDJBXX/WMSServer",
        "properties": {
            "bdcdyh": {"name2": "不动产单元号", "title": "不动产单元号", "show": true},
            "zongdicode": {"name2": "宗地特征码", "title": "宗地特征码", "show": true},
            "syqlx": {"name2": "所有权类型", "title": "所有权类型", "show": true},
            "mpArea": {"name2": "宗地面积", "title": "宗地面积", "show": true},
            "mianjidw": {"name2": "面积单位", "title": "面积单位", "show": true},
            "yongtu": {"name2": "用途", "title": "用途", "show": true},
            "dengji": {"name2": "等级", "title": "等级", "show": true},
            "jiage": {"name2": "价格", "title": "价格", "show": true},
            "qllx": {"name2": "权利类型", "title": "权利类型", "show": true},
            "qlxz": {"name2": "权利性质", "title": "权利性质", "show": true},
            "qlsdfs": {"name2": "权利设定方式", "title": "权利设定方式", "show": true},
            "rognjilv": {"name2": "容积率", "title": "容积率", "show": true},
            "jianzhumd": {"name2": "建筑密度", "title": "建筑密度", "show": true},
            "jianzhuxg": {"name2": "建筑限高", "title": "建筑限高", "show": true},
            "EAST_TO": {"name2": "东至", "title": "东至", "show": true},
            "SOUTH_TO": {"name2": "南至", "title": "南至", "show": true},
            "WEST_TO": {"name2": "西至", "title": "西至", "show": true},
            "NORTH_TO": {"name2": "北至", "title": "北至", "show": true},
            "MAP_NUM": {"name2": "图幅号", "title": "图幅号", "show": true},
            "dijihao": {"name2": "地籍号", "title": "地籍号", "show": true},
            "danganhao": {"name2": "档案号", "title": "档案号", "show": true},
            "beihzu": {"name2": "备注", "title": "备注", "show": true},
            "STATUS": {"name2": "状态", "title": "状态", "show": true},
            "quanliren": {"name2": "权利人", "title": "权利人", "show": true},
            "qsdwmc": {"name2": "权属单位名称", "title": "权属单位名称", "show": true},
            "yzdh": {"name2": "原宗地号", "title": "原宗地号", "show": true},
            "ydjh": {"name2": "原地籍号", "title": "原地籍号", "show": true},
            "jlsj": {"name2": "建立时间", "title": "建立时间", "show": true},
            "txdz": {"name2": "通讯地址", "title": "通讯地址", "show": true},
            "tuhao": {"name2": "图号", "title": "图号", "show": true},
            "tudizh": {"name2": "土地证号", "title": "土地证号", "show": true},
            "jsydghxkz": {"name2": "建设用地规划许可证", "title": "建设用地规划许可证", "show": true},
            "jsgcghxkz": {"name2": "建设工程规划许可证", "title": "建设工程规划许可证", "show": true},
            "jsgcsgxkz": {"name2": "建筑工程施工许可证", "title": "建筑工程施工许可证", "show": true},
            "landCode": {"name": "LAND_CODE", "title": "地块代码", "show": true},
            "mappingId": {"name": "不动产单元号", "title": "项目GUID", "show": false},
            "xmmc": {"name": "XMMC", "title": "项目名称", "show": true},
            "pfwh": {"name": "PFWH", "title": "批复文号", "show": true},
            "xmmj": {"name": "XMMJ", "title": "项目面积", "show": true},
            "location": {"name": "LOCATION,坐落", "title": "位置", "show": true},
            "analysisArea": {"name": "analysisArea", "title": "分析面积", "show": false}
        }
    },
    "XZQH": {
        "type": "wmts",
        "name": "市级区划,县级区划",
        "layer": "INDEX2019G",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/INDEX2019G/WMTSServer"
    },
    "LW": {
        "type": "wmts",
        "name": "路网",
        "layer": "LW4101002017G",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/LW4101002017G/WMTSServer"
    },
    "TDXZ": {
        "type": "wmts",
        "name": "土地利用现状",
        "layer": "TDXZ4101012017G",
        "strClassInfo": "(专题:TDXZ,年度:2017,比例尺:G)",
        "strTbl": "NCTDLY_YJFL,NCTDLY_EJFL,FRDTDLY_YJFL,FRDTDLY_EJFL,NCTDLY_QSYJ,NCTDLY_QSEJ,GDPDMJHZ,KTZ,KTZHZ,JBNTBHKQKTJ,TDLYXZTB",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/TDXZ4101012017G/WMTSServer",
        "properties": {
            "landCode": {"name": "LAND_CODE,标识码", "title": "标识码", "show": true},
            "mappingId": {"name": "GUID,项目_GUID", "title": "项目GUID", "show": false},
            "ysdm": {"name2": "要素代码", "title": "要素代码", "show": true},
            "tbybh": {"name2": "图斑预编号", "title": "图斑预编号", "show": true},
            "tbbh": {"name2": "图斑编号", "title": "图斑编号", "show": true},
            "dldm": {"name2": "地类编码", "title": "地类编码", "show": true},
            "dlmc": {"name2": "地类名称", "title": "地类名称", "show": true},
            "qsxz": {"name2": "权属性质", "title": "权属性质", "show": true},
            "qsdwdm": {"name2": "权属单位代码", "title": "权属单位代码", "show": true},
            "qsdwmc": {"name2": "权属单位名称", "title": "权属单位名称", "show": true},
            "zldwdm": {"name2": "座落单位代码", "title": "座落单位代码", "show": true},
            "zldwmc": {"name2": "座落单位名称", "title": "座落单位名称", "show": true},
            "gdlx": {"name2": "耕地类型", "title": "耕地类型", "show": true},
            "kclx": {"name2": "扣除类型", "title": "扣除类型", "show": true},
            "dlbz": {"name2": "地类备注", "title": "地类备注", "show": true},
            "gdpdj": {"name2": "耕地坡度级", "title": "耕地坡度级", "show": true},
            "kcdldm": {"name2": "扣除地类编码", "title": "扣除地类编码", "show": true},
            "kcdlxs": {"name2": "扣除地类系数", "title": "扣除地类系数", "show": true},
            "xzdwmj": {"name2": "线状地物面积", "title": "线状地物面积", "show": true},
            "lxdwmj": {"name2": "零星地物面积", "title": "零星地物面积", "show": true},
            "kcdlmj": {"name2": "扣除地类面积", "title": "扣除地类面积", "show": true},
            "tbdlmj": {"name2": "图斑地类面积", "title": "图斑地类面积", "show": true},
            "pzwh": {"name2": "批准文号", "title": "批准文号", "show": true},
            "bgjlh": {"name2": "变更记录号", "title": "变更记录号", "show": true},
            "bgrq": {"name2": "变更日期", "title": "变更日期", "show": true},
            "analysisArea": {"name": "analysisArea", "title": "分析面积", "show": false}
        }
    },
    "GFYX": {
        "type": "wmts",
        "name": "高分影像",
        "layer": "GFYX4101012019G",
        "url": "http://10.0.0.123:6163/igs/rest/ogc/GFYX4101012019G/WMTSServer"
    }
};
var businessConfig = [{
    'name': 'ysydchrk',
    'title': '用地预审测绘入库',
    'layers': {'layer': layerMap.XZQH, 'show': true, 'select': false, 'opacity': 1},{
    'layer': layerMap.TDXZ,
    'show': false,
    'select': false,
    'opacity': 1,
    'analysis': true
}, {'layer': layerMap.LW, 'show': false, 'select': false, 'opacity': 1}, {
    'layer': layerMap.GFYX,
    'show': false,
    'select': false,
    'opacity': 1
}, {'layer': layerMap.ZDJBXX, 'show': false, 'select': false, 'opacity': 1, 'analysis': true}, {
    'layer': layerMap.YSYD,
    'show': true,
    'select': true,
    'opacity': 0.6,
    'analysis': true

},
    {
        'name':
            'ydbpchrk', 'title':
            '用地报批测绘入库', 'layers':
            {
                'layer':
                layerMap.XZQH, 'show':
                    true, 'select':
                    false, 'opacity':
                    1
            }
    {
        'layer':
        layerMap.TDXZ, 'show':
            false, 'select':
            false, 'opacity':
            1, 'analysis':
            true
    }
    ,
    {
        'layer':
        layerMap.LW, 'show':
            false, 'select':
            false, 'opacity':
            1
    }
    ,
    {
        'layer':
        layerMap.GFYX, 'show':
            false, 'select':
            false, 'opacity':
            1
    }
    ,
    {
        'layer':
        layerMap.ZDJBXX, 'show':
            false, 'select':
            true, 'opacity':
            1, 'analysis':
            true
    }
    ,
    {
        'layer':
        layerMap.YDYS, 'show':
            true, 'select':
            true, 'opacity':
            0.6
    }
    ,
    {
        'layer':
        layerMap.BPYD, 'show':
            true, 'select':
            true, 'opacity':
            1, 'analysis':
            true
    }
}
,
{
    'name'
:
    'tdcbchrk', 'title'
:
    '土地储备测绘入库', 'layers'
:
    {
        'layer'
    :
        layerMap.XZQH, 'show'
    :
        true, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.TDXZ, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1, 'analysis'
    :
        true
    }
,
    {
        'layer'
    :
        layerMap.LW, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.GFYX, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.ZDJBXX, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1, 'analysis'
    :
        true
    }
,
    {
        'layer'
    :
        layerMap.JSYD, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        0.6
    }
,
    {
        'layer'
    :
        layerMap.CBYD, 'show'
    :
        true, 'select'
    :
        true, 'opacity'
    :
        1, 'analysis'
    :
        true
    }
}
,
{
    'name'
:
    'tdgychrk', 'title'
:
    '土地供应测绘入库', 'search'
:
    true, 'layers'
:
    {
        'layer'
    :
        layerMap.XZQH, 'show'
    :
        true, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.TDXZ, 'show'
    :
        true, 'select'
    :
        false, 'opacity'
    :
        1, 'analysis'
    :
        true
    }
,
    {
        'layer'
    :
        layerMap.LW, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.GFYX, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.ZDJBXX, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1, 'analysis'
    :
        false
    }
,
    {
        'layer'
    :
        layerMap.TDCB, 'show'
    :
        true, 'select'
    :
        true, 'opacity'
    :
        0.6
    }
,
    {
        'layer'
    :
        layerMap.GDYD, 'show'
    :
        true, 'select'
    :
        true, 'opacity'
    :
        1, 'analysis'
    :
        true
    }
}
,
{
    'name'
:
    'tdcbbgrk', 'title'
:
    '土地储备变更入库', 'layers'
:
    {
        'layer'
    :
        layerMap.XZQH, 'show'
    :
        true, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.TDXZ, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1, 'analysis'
    :
        true
    }
,
    {
        'layer'
    :
        layerMap.LW, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.GFYX, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.ZDJBXX, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1, 'analysis'
    :
        true
    }
,
    {
        'layer'
    :
        layerMap.CBSH, 'show'
    :
        true, 'select'
    :
        true, 'opacity'
    :
        1
    }
}
,
{
    'name'
:
    'tdcbywrk', 'title'
:
    '土地储备业务入库', 'layers'
:
    {
        'layer'
    :
        layerMap.XZQH, 'show'
    :
        true, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.CBSH, 'show'
    :
        true, 'select'
    :
        true, 'opacity'
    :
        1
    }
}
,
{
    'name'
:
    'tdgyywrk', 'title'
:
    '土地供应业务入库', 'layers'
:
    {
        'layer'
    :
        layerMap.XZQH, 'show'
    :
        true, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.GDSH, 'show'
    :
        true, 'select'
    :
        true, 'opacity'
    :
        1
    }
}
,
{
    'name'
:
    'tdgybgrk', 'title'
:
    '土地供应变更入库', 'layers'
:
    {
        'layer'
    :
        layerMap.XZQH, 'show'
    :
        true, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.LW, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.GDSH, 'show'
    :
        true, 'select'
    :
        true, 'opacity'
    :
        1
    }
}
,
{
    'name'
:
    'ydbpywrk', 'title'
:
    '用地报批业务入库', 'layers'
:
    {
        'layer'
    :
        layerMap.XZQH, 'show'
    :
        true, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.BPSH, 'show'
    :
        true, 'select'
    :
        true, 'opacity'
    :
        1
    }
}
,
{
    'name'
:
    'ydbpbgrk', 'title'
:
    '用地报批变更入库', 'layers'
:
    {
        'layer'
    :
        layerMap.XZQH, 'show'
    :
        true, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.TDXZ, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1, 'analysis'
    :
        true
    }
,
    {
        'layer'
    :
        layerMap.LW, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.GFYX, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.ZDJBXX, 'show'
    :
        false, 'select'
    :
        true, 'opacity'
    :
        1, 'analysis'
    :
        true
    }
,
    {
        'layer'
    :
        layerMap.JSYD, 'show'
    :
        true, 'select'
    :
        true, 'opacity'
    :
        1, 'analysis'
    :
        true
    }
}
,
{
    'name'
:
    'ydysywrk', 'title'
:
    '用地预审业务入库', 'layers'
:
    {
        'layer'
    :
        layerMap.XZQH, 'show'
    :
        true, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.YSSH, 'show'
    :
        true, 'select'
    :
        true, 'opacity'
    :
        1
    }
}
,
{
    'name'
:
    'ydysbgrk', 'title'
:
    '用地预审变更入库', 'layers'
:
    {
        'layer'
    :
        layerMap.XZQH, 'show'
    :
        true, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.TDXZ, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1, 'analysis'
    :
        true
    }
,
    {
        'layer'
    :
        layerMap.LW, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.GFYX, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.ZDJBXX, 'show'
    :
        false, 'select'
    :
        true, 'opacity'
    :
        1, 'analysis'
    :
        true
    }
,
    {
        'layer'
    :
        layerMap.YDYS, 'show'
    :
        true, 'select'
    :
        true, 'opacity'
    :
        1, 'analysis'
    :
        true
    }
}
,
{
    'name'
:
    'tdpzgtj', 'title'
:
    '土地批征供统计', 'layers'
:
    {
        'layer'
    :
        layerMap.XZQH, 'show'
    :
        true, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.TDXZ, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1, 'analysis'
    :
        true
    }
,
    {
        'layer'
    :
        layerMap.LW, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.GFYX, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.ZDJBXX, 'show'
    :
        false, 'select'
    :
        false, 'opacity'
    :
        1, 'analysis'
    :
        true
    }
,
    {
        'layer'
    :
        layerMap.JSYD, 'show'
    :
        true, 'select'
    :
        true, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.TDCB, 'show'
    :
        true, 'select'
    :
        true, 'opacity'
    :
        1
    }
,
    {
        'layer'
    :
        layerMap.GDXM, 'show'
    :
        true, 'select'
    :
        true, 'opacity'
    :
        1
    }
}
]
