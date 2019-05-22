Page({
  data: {
    list: []
  },
  onLoad: function () {
    this.setData({
      list: ["我的蔚来值", "我的订单", "在线支持", "加入蔚来", "设置"],
    });
  }
})