//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },

  onShareAppMessage: function (e) {
    return {
      title: '定制我的心情日历',
      path: '/pages/index/index'
    }
  }
})
