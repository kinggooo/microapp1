Page({
  data: {
    inputValue: ''
  },
  bindKeyInput(e) {
    console.log(e.id)
    this.setData({
      inputValue: e.target.id
    })
  }
}) 