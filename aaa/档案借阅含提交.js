var vTopCon = new Vue({
    el: '#infoWraper',
    data: {
        TopConObj: {},
        zcSpreadInitText: '展开',
        caseName: "",
        borrowOffice: "",
        applyTime: "",
        borrowAgent: "",
        archivesAgent: "",
        landCertificateNo: "",
        changeCase: "",
        mortgagedCase: "",
        geologicalSurveyCase: "",
        otherCase: "",
        borrowDay: "",
      //  completeCopy: "",
        carryOut: "",
        returnPeople: "",
        returnTime: "",
        archivesReceptionPeople: "",
        checkScanningCopy: "",
        remark: "",
        fadeNum: 2,
        initialTitleText: '',
        fileList: [
            {
                url: './timg.jpg',
                title: '郑国土资纪要.pdf'
            },
            {
                url: './timg.jpg',
                title: '郑国土资纪要2.pdf'
            },
            {
                url: './timg.jpg',
                title: '郑国土资纪要3.pdf'
            },
        ],
        isSpread: "展开",
        spreadSum: 2
    },
    methods: {
        zcSpread: function () {
            if (this.zcSpreadInitText == '展开') {
                this.fadeNum = this.TopConObj.detailList.length;
                this.zcSpreadInitText = "隐藏";
            } else {
                this.fadeNum = 2;
                this.zcSpreadInitText = '展开'
            }
        },
        sq: function(e) {
            if(this.spreadSum === 2) {
                this.spreadSum = this.fileList.length;
                e.target.innerHTML = "收起"
            }else {
                this.spreadSum = 2;
                e.target.innerHTML = "展开"
            }
        },
        readInfoSpread: function (e) {
            mui('#infoScroll').scroll().scrollTo(0, 0);
            if (this.baseOtherMsg) {
                e.target.innerHTML = "展开"
            } else {
                e.target.innerHTML = "隐藏"
            }
            this.baseOtherMsg = !this.baseOtherMsg
        },
        muiDatePick: function(callback) {

            var dtPicker = new mui.DtPicker({
                type: 'date',
                endDate: new Date(2100, '04', 25),//设置结束日期
            });
            dtPicker.show(function (selectItems) {
                callback(selectItems);
                // console.log(selectItems);//{text: "2016",value: 2016}
                // console.log(selectItems.m);//{text: "05",value: "05"}
            })
        },
        pickTime: function () {
            var that = this;
            this.muiDatePick(function (selectItems) {
                that.returnTime = selectItems.value;
            })
        },
        pickTime1: function () {
            var that = this;
            this.muiDatePick(function (selectItems) {
                that.applyTime = selectItems.value;
            })
        }
    },
    mounted: function () {

    }
});

/*
$('#infoDv').find('.mui-loading').show();
var prefix = data.businessKey.substr(0, 4);
var infoUrl = prefix == 'DAJY' ? '/oa/fileBorrow/pc/info' : '/oa/fixedAssets/pc/info';
var fileUrl = prefix == 'DAJY' ? '/oa/fileBorrow/app/upload/files' : '/oa/fixedAssets/app/upload/files';
vTopCon.initialTitleText = $("#titleTxt").text();
if (prefix == 'DAJY') {
    $("#titleTxt").text("档案借阅");
    $('#fixedCash').hide();
    $('#readInfo').show();
} else {
    $("#titleTxt").text("固定资产");
    $('#readInfo').hide();
    $('#fixedCash').show()
}
//加载案卷信息
restHttp.get(basePath + infoUrl, {
    applyId: data.businessKey
}, function (res) {
    if (prefix == 'DAJY') {
        vTopCon.readInfoObj = res.data;
    } else {
        vTopCon.TopConObj = res.data;
    }
    $("input[name='projectType']").prop("checked", false);
    $("input[name='projectType'][value='" + res.data.projectType + "']").prop("checked", true);
    $('#infoDv').find('.mui-loading').hide();
});

var imgObj = {
    'jpg': 'jpg',
    'jpeg': 'jpeg',
    'png': 'png',
    'bmp': 'bmp',
    'gif': 'gif',
    'svg': 'svg',
    'ico': 'ico'
};

//加载附件信息
restHttp.get(basePath + fileUrl, {
    applyId: data.businessKey
}, function (res) {
    var attachmentList = [];
    $.each(res.data, function (i, e) {
        var suffix = e.fileName.substring(e.fileName.lastIndexOf('.') + 1);
        var attachment = {
            id: e.fileId,
            name: e.fileName,
            downloadPath: '/file/download/' + e.fileId,

        };
        if (imgObj[suffix]) {
            attachment.thumbnailPath = '/file/preview/' + e.fileId + '_t';
            attachment.previewPath = '/file/preview/' + e.fileId;
        }
        attachmentList.push(attachment);
    });
    attachment.show({
        id: data.businessKey,
        attachment: JSON.stringify(attachmentList)
    });
});

//加载审批意见信息
spyj.show(data);


mui.open(config);
closeCallbackEvent = closeCallback;
// $('#infoTitleTxt').text(data.summary);
$('#infoTitleTxt').text($('#titleTxt').text());
// 待办操作栏
if (data.dbType == 'db') {
    $('#optionBar').show();
    if (data.examineStatus == '3') {
        if (data.lastOperation == '窗口补正') {
            $('#bzwcTask').show();
        } else {
            $('#dealTask').show();
        }
    } else {
        // $('#turnApply').show();
        $('#turnBack').show();
        $('#turnTask').show();
        $('#dealTask').show();
        $('#ckbzTask').show();
    }

    //html = "<div><div class='title'>备注<span></span></div><span style='float:left;'>：</span><div><textarea id='comment' style=\"height: 120px;\"></textarea></div></div>";
    //html = $(html);
    //$('#dbInfoDv').append(html);

    mui("#infoDv").off("tap", "#dealTask");
    mui("#infoDv").on('tap', '#dealTask', function () {
        workflow.dealTask(data, function () {
            $('#infoBack').click();
            if (callback) {
                callback();
            }
        });
    });

    mui("#infoDv").off("tap", "#turnBack");
    mui("#infoDv").on('tap', '#turnBack', function () {
        workflow.turnBack(data, function () {
            $('#infoBack').click();
            if (callback) {
                callback();
            }
        });
    });

    var applyMark = false;
    mui("#infoDv").off("tap", "#turnApply");
    mui("#infoDv").on('tap', '#turnApply', function () {
        if (!applyMark) {
            mui.prompt('请输入备注意见', '', '', ['取消', '确认'], function (e) {
                if (e.index == 1) {
                    applyMark = true;
                    $('#infoMainDv').hide();
                    $('#infoDv').find('.mui-loading').show();
                    data.comment = e.value;
                    workflow.turnApply(data, function () {
                        $('#infoDv').find('.mui-loading').hide();
                        $('#infoBack').click();
                        applyMark = false;
                        if (callback) {
                            callback();
                        }
                    });
                }
            });
        } else {
            mui.toast('正在驳回中，请稍等');
        }
    });

    // 转交
    mui("#infoDv").off("tap", "#turnTask");
    mui("#infoDv").on('tap', '#turnTask', function () {
        workflow.tranTask(data, function () {
            $('#infoBack').click();
            if (callback) {
                callback();
            }
        });
    });

    // 窗口补正
    mui("#infoDv").off("tap", "#ckbzTask");
    mui("#infoDv").on('tap', '#ckbzTask', function () {
        if (!applyMark) {
            mui.prompt('请输入备注意见', '', '', ['取消', '确认'], function (e) {
                if (e.index == 1) {
                    applyMark = true;
                    $('#infoMainDv').hide();
                    $('#infoDv').find('.mui-loading').show();
                    data.comment = e.value;
                    workflow.ckbzTask(data, function () {
                        $('#infoDv').find('.mui-loading').hide();
                        $('#infoBack').click();
                        applyMark = false;
                        if (callback) {
                            callback();
                        }
                    });
                }
            });
        } else {
            mui.toast('正在窗口补正中，请稍等');
        }
    });

    // 补正完成
    mui("#infoDv").off("tap", "#bzwcTask");
    mui("#infoDv").on('tap', '#bzwcTask', function () {
        data.comment = '';
        workflow.bzwcTask(data, function () {
            $('#infoBack').click();
            if (callback) {
                callback();
            }
        });
    });
} else {
    $('#optionBar').hide();
}

// 已办操作栏
if (data.dbType == 'yb' && data.revokeFlag != null) {
    // 撤回
    $('#ybOptionBar').show();
    var applyMark = false;
    mui("#infoDv").off("tap", "#revokeTask");
    mui("#infoDv").on('tap', '#revokeTask', function () {
        if (!applyMark) {
            mui.confirm('确定撤回？', '操作提示', ['取消', '确认'], function (e) {
                if (e.index == 1) {
                    applyMark = true;
                    $('#infoMainDv').hide();
                    $('#infoDv').find('.mui-loading').show();

                    workflow.revokeTask(data, function () {
                        $('#infoDv').find('.mui-loading').hide();
                        $('#infoBack').click();
                        applyMark = false;
                        if (callback) {
                            callback();
                        }
                    });
                }
            });
        } else {
            mui.toast('正在撤回中，请稍等');
        }
    });
} else {
    $('#ybOptionBar').hide();
}


$('#processComments').unbind();
$('#processComments').click(function () {
    comments.show(data);
});

*/
