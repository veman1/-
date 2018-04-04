Page({
  data: {
    placeholder: '请写下您对我们的意见或建议，我们会努力为您提供更好的服务。',
    bindinput: 'input',
    maxlength: 200,
    phStyle: 'color:#bbb'
  },
  input(e) {
    this.setData({
      value: e.detail.value
    })
  },
  submit(e) {}
})