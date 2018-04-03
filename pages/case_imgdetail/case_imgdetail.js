
var img = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522754350072&di=781fae4b2c252c2439a5d055e4ae0171&imgtype=0&src=http%3A%2F%2Fimg.soufun.com%2Fhouse%2F2011_07%2F24%2Fqingdao%2F1311474781387_000.jpg'

Page({
  data: {
    img: img,
    tags: [
      { top: 30, left: 45 },
      { top: 10, left: 45 },
      { top: 55, left: 50 },
    ]
  },
  onLoad(o) {
    wx.setNavigationBarTitle({ title: '客厅（一）' })
  }
})