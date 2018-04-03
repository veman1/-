var bannerImg = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522731135715&di=c96a06463c35aaf6da94fc59048a724a&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f21c58cdd96aa801219c771c388e.jpg%401280w_1l_2o_100sh.jpg'


Page({
  data: {
    banner: bannerImg,
    roomRange: ['1室', '2室', '3室', '4室', '5室以上'],
    room: 0,
    drawingroomRange: ['1厅', '2厅', '3厅', '4厅以上'],
    drawingroom: 0,
    kitchenRange: ['1厨', '2厨', '2厨以上'],
    kitchen: 0,
    toiletRange: ['1卫', '2卫', '3卫以上'],
    toilet: 0,
    balconyRange: ['1阳台', '2阳台', '3阳台以上'],
    balcony: 0,
  },
  change(e) {
    var o = {}
    o[e.currentTarget.dataset.name] = e.detail.value
    this.setData(o)
  },
})