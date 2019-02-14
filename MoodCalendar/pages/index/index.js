//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
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
  }

})
