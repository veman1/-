import index_config from 'index_config'

Page({
  data: {
    cityName: '佛山',
    ccurrent: 0,
    config: index_config
  },
  tapCompanyCategory(e) {
    this.setData({
      ccurrent: e.currentTarget.dataset.current
    })
  },
})

