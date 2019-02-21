Page({
  data: {
    players: [{
        name: 'CHN',
        id: 'p1',
        score: '0',
        checked: 'true'
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
    inputValue: '',
    amt: '0',
    selectedPlayer: '0',
    score: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score&nbsp;:&nbsp;"
  },
  bindKeyInput(e) {
    var obj = {}
    obj[e.target.id] = e.detail.value
    this.setData(obj)
  },
  bindInputPname(e) {
    // this.data.players[e.target.id].name = e.detail.value
    var player = this.data.players[this.data.selectedPlayer]
    player.name = e.detail.value
    this.setData({
      players: this.data.players
    })
  },
  zimo(e) {
    var amt = this.data.amt
    var players = this.data.players
    for (var key in players) {
      if (key == this.data.selectedPlayer) {
        players[key].score = Number(players[key].score) + Number(this.data.amt) * 3
      } else {
        players[key].score = Number(players[key].score) - Number(this.data.amt)
      }
    }
    this.setData({
      players: this.data.players
    })
  },
  zhuachong(e) {
    var amt = this.data.amt
    var players = this.data.players
    for (var key in players) {
      if (key == this.data.selectedPlayer) {
        players[key].score = Number(players[key].score) + Number(this.data.amt)
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
      selectedPlayer: e.detail.value
    })
  }
})