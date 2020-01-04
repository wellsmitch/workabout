var vTopCon = new Vue({
    el: '#gdzcInfoWraper',
    data: {
        itemName: '',
        applyUser: '',
        returnTime: "",
        zcmxAdd: {
            totalNum: 100,
            totalValue: 20000,
            detailList: [
                {
                    assetName: "笔记本",
                    assetNum: '1',
                    assetType: 111111,
                    assetValue: 10000
                },
                {
                    assetName: "笔记本1",
                    assetNum: '1',
                    assetType: 111111,
                    assetValue: 10000
                },
                {
                    assetName: "笔记本2",
                    assetNum: '1',
                    assetType: 111111,
                    assetValue: 10000
                },
                {
                    assetName: "笔记本3",
                    assetType: 111111,
                    assetNum: '1',
                    assetValue: 10000
                }
            ]
        },
        fadeNum: 2,
        zcSpreadInitText: '展开',

    },
    methods: {
        zcSpread: function () {
            debugger
            if (this.zcSpreadInitText == '展开') {
                this.fadeNum = this.zcmxAdd.detailList.length;
                this.zcSpreadInitText = "隐藏";
            } else {
                this.fadeNum = 2;
                this.zcSpreadInitText = '展开'
            }
        },
        prevent: function (e) {
            // console.log("此函数作用是阻止事件委托");
        },
        cssScale: function (domSelector, showParam) {
            if(showParam) {
                $('#texWrap').show();
            }

            var boo = 0;
            var canUse = document.getElementsByTagName("body")[0].style;
            if (typeof canUse.animation != "undefined" || typeof canUse.WebkitAnimation != "undefined") {
                boo = 1;/*支持动画*/
            } else {
                boo = 0;/*不支持动画*/
            }

            function actionIn(obj, actionName, time, speed) {
                console.log(actionName);
                // $(obj).show();
                if (boo == 1) $(obj).css({
                    "animation": actionName + " " + time + "s" + " " + speed,
                    "animation-fill-mode": "forwards"
                })
                if(!showParam) {
                    setTimeout(function () {
                        $('#texWrap').hide();
                    },300)
                }
            }

            /*obj,actionName,speed都是 string,time(秒)是int类型*/
            function actionOut(obj, actionName, time, speed) {
                if (boo == 1) {
                    $(obj).css({"animation": actionName + " " + time + "s" + " " + speed});
                    var setInt_obj = setInterval(function () {
                        $(obj).hide();
                        clearInterval(setInt_obj);
                    }, time * 1000);
                } else $(obj).hide();
            };

            actionIn(domSelector, showParam ? 'action_scale' : 'action_scaleOut', .3, "ease-in");
        },
        addMsg: function () {
            this.cssScale("#tex", true) //开启弹窗
        },
        msgMask: function (e) {
            console.log("此处为点击非提交操作隐藏蒙层");
            this.cssScale("#tex", false)//关闭弹窗
        },
        submitMsg: function () {
            console.log("提交数据");
            this.cssScale("#tex", false)//关闭弹窗
        },

        muiDatePick: function (callback) {

            var dtPicker = new mui.DtPicker({
                type: 'date',
                endDate: new Date(2100, '04', 25),//设置结束日期
            });
            dtPicker.show(function (selectItems) {
                callback(selectItems);
            })
        },
        pickTime: function () {
            var that = this;
            this.muiDatePick(function (selectItems) {
                that.returnTime = selectItems.value;
            })
        }
    },
    mounted: function () {

    }
});

