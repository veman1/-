Page({
  change(e) {
    console.log(e)
    this.setData({ [e.currentTarget.dataset.name]: e.detail.value })
  }
})