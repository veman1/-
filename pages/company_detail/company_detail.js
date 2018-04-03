
var bannerImg = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522727071645&di=cf9d06035a7138691fb58bcf71c4e7c7&imgtype=0&src=http%3A%2F%2Fupload.sj998.com%2Farchives%2F2015%2F1112%2Fimage%2F14472938236915o.png'
var productImg = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2515628340,2197447662&fm=27&gp=0.jpg'

Page({
  data: {
    intro: '谷歌公司（Google Inc.）成立于1998年9月4日，由拉里·佩奇和谢尔盖·布林共同创建，被公认为全球最大的搜索引擎。谷歌是一家位于美国的跨国科技企业，业务包括互联网搜索、云计算、广告技术等，同时开发并提供大量基于互联网的产品与服务，其主要利润来自于AdWords等广告服务。',
    banner: bannerImg,
    products: new Array(8).fill({ img: productImg, name: 'Chrome' })
  },
  onLoad(o) {
    wx.setNavigationBarTitle({
      title: 'Google',
    })
  }
})