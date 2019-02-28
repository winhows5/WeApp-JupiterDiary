const app = getApp()

Page({
  
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    list: [
      {
        id: 'baseOp',
        odd: {
          id: 'readLog',
          name: '查看日记',
          open: false,
          useArrow: true,
          useImage: true,
          info: '',
          pages: [],
          },
        even: {
          id: 'exportLog',
          name: '导出日记',
          open: false,
          useArrow: true,
          useImage: true,
          info: '随时导出，不怕丢失',
          pages: ['txt', 'word'],
        },
      },
      {
        id: 'privateOp',
        odd: {
          id: 'publishMethod',
          name: '日记发布方式',
          open: false, 
          useArrow: true,
          useImage: true,
          info: '匿名发布',
          pages: ['匿名发布', '微信名发布', '自定义名发布']
        },  
        even: {
          id: 'lock',
          name: '日记密码锁',
          open: false,
          useArrow: true,
          useImage: false,
          info: '',
          pages: [],
        },
      },
      {
        id: 'rewardOp',
        odd: {
          id: 'reward',
          name: '打赏产品',
          open: false,
          useArrow: true,
          useImage: true,
          info: '',
          pages: [],
        },
        even: {
          id: 'chatWithDeveloper',
          name: '和开发者聊聊天',
          open: false,
          useArrow: false,
          useImage: true,
          info: '',
          pages: [],
        },
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
      if (list[i].odd.id === id) {
        list[i].odd.open = !list[i].odd.open
      } else if (list[i].even.id === id) {
        list[i].even.open = !list[i].even.open
      } else {
        list[i].odd.open = false
        list[i].even.open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  },

  switchChange(e) {
    console.log('switch 发生 change 事件，携带值为', e.detail.value)
  },

})