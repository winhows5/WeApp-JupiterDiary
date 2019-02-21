//index.js
var amapFile = require("../../libs/amap-wx.js");

var utils = require("../../utils/util.js")
const app = getApp()

Page({

  data: {
    location: {
      pro: "杭州",
      dis: "地下城",
    },
    date: "2075年1月1日",
    weather: {
      cli: "木星风暴",
      tem: "-85℃",
      win: "西北风 7级",
    }          
  },
  

  onLoad: function () {
    var that = this;
    var useData;
    var myAmapFun = new amapFile.AMapWX({ key: 'b93928a4714fa2b9b7c88d6055956318' });
    
    myAmapFun.getWeather({
      success: function (data) {
        useData = data.liveData;
        that.setData({
          location: {
            pro: useData.province,
            dis: useData.city,
          },
          date: useData.reporttime.substring(0,10),
          weather: {
            cli: useData.weather,
            tem: useData.temperature + '℃',
            win: useData.winddirection + '风 ' + useData.windpower + '级'
          }
        })
      },
      fail: function (info) {
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
