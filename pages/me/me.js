Page({
    data: {
        list: []
    },
    onLoad: function () {
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
                }, {
                    text: "在线支持",
                    type: 2, img: "../../images/me/f.png"
                }, {
                    text: "设置",
                    type: 3,
                    img: "../../images/me/i.png"
                }
            ],
        });
    }
})