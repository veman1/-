var caseImg = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522728620608&di=250f24741bc371b680d9769ae75b5601&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1697778087%2C3536965065%26fm%3D214%26gp%3D0.jpg'

Page({
  data: {
    gallery: new Array(5).fill({ img: caseImg, name: '美式乡村客厅卧室走廊' })
  },
  onLoad(o) {},
  change(e) {
    this.setData({
      current: e.detail.current
    })
  }
})