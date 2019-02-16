const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    list: [
      {
        id: 'readLog',
        name: '查看日记',
        open: false,
        pages: [],
      },
      {
        id: 'exportLog',
        name: '导出日记',
        open: false,
        pages: [],
      },
      {
        id: 'publishMethon',
        name: '日记发布方式',
        open: false,
        pages: ['text', 'icon', 'progress', 'rich-text']
      },  
      {
        id: 'lock',
        name: '日记密码锁',
        open: false,
        pages: [],
      },
      {
        id: 'reward',
        name: '打赏产品',
        open: false,
        pages: [],
      },
      {
        id: 'chatWithDeveloper',
        name: '和开发者聊聊天',
        open: false,
        pages: [],
      },
      {
        id: 'map',
        name: '地图',
        open: false,
        pages: ['map']
      }, 
      {
        id: 'canvas',
        name: '画布',
        open: false,
        pages: ['canvas']
      }
    ],
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
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
  },

})