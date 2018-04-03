import config from 'case_index_config'

Page({
  data: {
    mode: 'set',
    type: 0,
    scrollbar: 0,
    scrollbar_list: config.scrollbar_list,
    style_list: config.style_list,
    house_type_list: config.house_type_list,
    filter: {
      lists: [config.style_list, config.house_type_list],
    },
  },
  tapTabbar(e) {
    this.setData({
      mode: e.currentTarget.dataset.mode
    })
    this.fetchData(e.currentTarget.dataset.mode)
  },
  tapScrollbar(e) {
    this.setData({ scrollbar: e.currentTarget.dataset.index })
    this.fetchData(e.currentTarget.dataset.id)
  },
  tapSwitch(e) {
    this.setData({
      type: e.currentTarget.dataset.type
    })
  },
  tapFilterbar(e) {
    if (this.data.filter.current === e.currentTarget.dataset.list) {
      this.setData({
        'filter.current': null
      })
    } else {
      this.setData({
        'filter.current': e.currentTarget.dataset.list
      })
    }
  },
  filterChange(e) {
    this.data.filter.lists[this.data.filter.current].forEach((v, i, f) => f[i].check = !1)
    e.detail.value.forEach(i => this.data.filter.lists[this.data.filter.current][i].check = !0)
    this.setData({ filter: this.data.filter })
  },
  maskTap(e) {
    this.setData({
      'filter.current': null
    })
  },

  fetchData() { },
})