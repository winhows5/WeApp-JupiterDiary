//index.js
var amapFile = require("../../libs/amap-wx.js");

const app = getApp()

Page({

  onLoad: function () {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: 'b93928a4714fa2b9b7c88d6055956318' });
    myAmapFun.getRegeo({
      success: function (data) {
        //成功回调
      },
      fail: function (info) {
        //失败回调
        console.log(info)
      }
    })
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  

  onShareAppMessage: function(e) {
    return {
      title: '定制我的心情日历',
      path: '/pages/index/index'
    }
  },

  onShow() {
    wx.reportAnalytics('enter_home_programmatically', {})
  },
  onShareAppMessage() {
    return {
      title: '小程序官方组件展示',
      path: 'page/component/index'
    }
  },

  data: {
    location: "北京",
    weather: "多云",
    
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for(let i = 0, len = list.length; i<len; ++i) {
  if (list[i].id === id) {
    list[i].open = !list[i].open
  } else {
    list[i].open = false
  }
}
this.setData({
  list
})
wx.reportAnalytics('click_view_programmatically', {})
  }



})
