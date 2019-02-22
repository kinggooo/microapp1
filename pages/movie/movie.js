Page({
  data: {
    players: [{
        name: 'CHN',
        id: 'p1',
        score: '0'
      },
      {
        name: 'BRA',
        id: 'p2',
        score: '0'
      },
      {
        name: 'JPN',
        id: 'p3',
        score: '0'
      },
      {
        name: 'ENG',
        id: 'p4',
        score: '0'
      }
    ],
    idToIdx: {
      'p1': 0,
      'p2': 1,
      'p3': 2,
      'p4': 3
    },
    inputValue: '',
    amt: '0',
    score: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score&nbsp;:&nbsp;",
    winnerIdx: 0,
    loserIdx: 0
  },
  bindKeyInput(e) {
    var obj = {}
    obj[e.target.id] = e.detail.value
    this.setData(obj)
  },
  bindPnameInput(e) {
    // this.data.players[e.target.id].name = e.detail.value
    var idx = this.data.idToIdx[e.target.id]
    var player = this.data.players[idx]
    player.name = e.detail.value
    this.setData({
      players: this.data.players
    })
  },
  zimo(e) {
    var selPlayer = this.data.winnerIdx
    var amt = this.data.amt
    // 校验数据
    if (amt == null || amt == 0) {
      wx.showToast({
        title: '请先输入金额！',
        icon: 'none',
        duration: 2000
      })
    }

    var players = this.data.players
    for (var key in players) {
      if (key == this.data.winnerIdx) {
        players[key].score = Number(players[key].score) + Number(amt) * 3
      } else {
        players[key].score = Number(players[key].score) - Number(amt)
      }
    }

    // 刷新视图数据
    this.setData({
      players: this.data.players
    })
  },
  zhuachong(e) {
    var amt = this.data.amt
    var players = this.data.players
    for (var idx in players) {
      if (idx == this.data.winnerIdx) {
        players[idx].score = Number(players[idx].score) + Number(amt)
      }
      if (idx == this.data.loserIdx) {
        players[idx].score = Number(players[idx].score) - Number(amt)
      }
    }
    this.setData({
      players: this.data.players
    })
  },
  radioChange(e) {
    // var name = this.data.players[e.detail.value].name
    // console.log('radio发生change事件，携带value值为：', name)
    e.target.checked = true
    this.setData({
      winnerIdx: e.detail.value
    })
  },
  bindPickerChange(e) {
    this.setData({
      loserIdx: e.detail.value
    })
  }
})