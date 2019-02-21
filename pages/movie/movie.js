Page({
  data: {
    players: {
      "p1": {
        name: 'CHN',
        id: '1',
        score: '0',
        checked: 'true'
      },
      "p2": {
        name: 'BRA',
        id: '2',
        score: '0'
      },
      "p3": {
        name: 'JPN',
        id: '3',
        score: '0'
      },
      "p4": {
        name: 'ENG',
        id: '4',
        score: '0'
      }
    },
    inputValue: '',
    amt: '0',
    selectedPlayer: 'p1',
    score: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score&nbsp;:&nbsp;"
  },
  bindKeyInput(e) {
    var obj = {}
    obj[e.target.id] = e.detail.value
    this.setData(obj)
  },
  bindInputPname(e) {
    // this.data.players[e.target.id].name = e.detail.value
    var player = this.data.players[e.target.id]
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
    this.setData({
      selectedPlayer: e.detail.value
    })
  }
})