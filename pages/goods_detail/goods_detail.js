
var img = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522757017332&di=ed5a2ee03f1e59d9beae5636534cca12&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2325521367%2C2926829869%26fm%3D214%26gp%3D0.jpg'

Page({
  data: {
    img: img,
    gname: '电视柜',
    sname: '帕克斯',
    intro: '双抽屉储物，底板大件收纳，将杂物一网打尽',
    size: '1260*600*450mm',
    meterial: '美国进口白橡木',
    color: '原木色',
    unit: '件'
  },
  onLoad(o) {
    wx.setNavigationBarTitle({ title: '客厅（一）' })
  },
})