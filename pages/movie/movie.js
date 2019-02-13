Page({
  data: {
    players: {
      "p1":{
        name: 'CHN',
        id: '1',
        score: '0',
        checked: 'true'
      },
      "p2":{
        name: 'BRA',
        id: '2',
        score: '0'
      },
      "p3":{
        name: 'JPN',
        id: '3',
        score: '0'
      },
      "p4":{
        name: 'ENG',
        id: '4',
        score: '0'
      }
    },
    inputValue: '',
    score: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score&nbsp;:&nbsp;"
  },
  bindKeyInput(e) {
    
    // this.setData({
    //   inputValue: e.target.id
    // })
    this.data.players[e.target.id].name = e.detail.value
    console.log(this.data.players[e.target.id].name)
  },
  zimo(e) {

  },
  zhuachong(e) {

  },
  radioChange(e) {
    var name = this.data.players[e.detail.value].name
    console.log('radio发生change事件，携带value值为：', name)
  }
})