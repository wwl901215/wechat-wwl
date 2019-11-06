import * as ReportLog from "../../utils/log";

Page({
    data: {
        list: []
    },
    onShow: function() {
        ReportLog.setFilterMsg("me-page");
    },
    onLoad: function() {
        this.setData({
            list: [
                {
                    text: "我的蔚来值",
                    type: 0,
                    img: "../../images/me/b.png"
                },
                {
                    text: "我的订单",
                    type: 1,
                    img: "../../images/me/e.png"
                },
                {
                    text: "在线支持",
                    type: 2,
                    img: "../../images/me/f.png"
                },
                {
                    text: "设置",
                    type: 3,
                    img: "../../images/me/i.png"
                }
            ]
        });
    },
    onItemClick: function(e) {
        switch (e.currentTarget.dataset.type) {
            case 0:
                console.log(0);
                ReportLog.warn("测试warn");
                break;
            case 1:
                console.log(1);
                ReportLog.error("测试error");
                break;
            case 2:
                console.log(2);
                ReportLog.debug("测试debug");
                break;
            case 3:
                console.log(3);
                ReportLog.info("测试info");
                break;
        }
    }
});
