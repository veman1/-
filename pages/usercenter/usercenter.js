Page({
  data: {
    menu_list: [
      {
        text: '关于我们',
        url: '/pages/aboutus/aboutus',
        icon: '/images/uc_about.png'
      },
      {
        text: '联系我们',
        url: '/pages/contactus/contactus',
        icon: '/images/uc_contact.png'
      },
      {
        text: '意见反馈',
        url: '/pages/feedback/feedback',
        icon: '/images/uc_feedback.png'
      },
    ],
  },
  onShow() {
    wx.getUserInfo({
      success: res => {
        this.setData({
          uname: res.userInfo.nickName,
          avatar: res.userInfo.avatarUrl,
        })
      },
    })
  },
})