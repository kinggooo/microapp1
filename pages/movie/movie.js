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
    amt: '',
    tableAmt: 0,
    score: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score&nbsp;:&nbsp;",
    winnerIdx: 0,
    loserIdx: 0,
    rate: 'single',
    text: {},
    textCfg: [{
        btn1: '按钮1',
        btn2: '按钮2',
        single: 'single',
        double: 'double',
        amt: 'amt',
        tableAmt: 'tableAmt',
        loserSel: 'loserSel',
        dftName: ['玩家1', '玩家2', '玩家3', '玩家4']
      },
      {
        btn1: '自摸',
        btn2: '抓冲',
        single: '自摸',
        double: '杠开',
        amt: '金额',
        tableAmt: '台费',
        loserSel: '抓冲目标',
        dftName: ['东', '南', '西', '北']
      }
    ],
    cfgIdx: 0,
    gameLog: [],
    round: 0
  },

  onLoad: function() {
    var cfgIdx = this.data.cfgIdx
    this.setData({
      text: this.data.textCfg[cfgIdx]
    })
    var players = this.data.players
    var text = this.data.text
    for (var idx in players) {
      var pname = "players[" + idx + "].name"
      this.setData({
        [pname]: text.dftName[idx]
      })
    }
  },
  bindKeyInput(e) {
    this.setData({
      [e.target.id]: e.detail.value
    })
  },
  bindPnameInput(e) {
    var idx = this.data.idToIdx[e.target.id]
    // var player = this.data.players[idx]
    // player.name = e.detail.value
    // this.setData({
    //   players: this.data.players
    // })
    var player = "players[" + idx + "].name"
    this.setData({
      [player]: e.detail.value
    })
  },
  zimo(e) {
    var winnerIdx = this.data.winnerIdx
    var amt = this.data.amt
    var zimoIncome = Number(amt) * 3
    var winnerIncome = Number(amt) * 3
    var tableAmt = this.data.tableAmt
    var dftTabAmt = 10;
    var players = this.data.players
    var btnId = e.target.id
    var rate = this.data.rate

    // 校验数据
    if (amt == null || amt == 0) {
      wx.showToast({
        title: '请先输入金额！',
        icon: 'none',
        duration: 2000
      })
      return
    }

    // 计算逻辑
    for (var idx in players) {
      if (idx == winnerIdx) {
        if (rate == 'double') {
          dftTabAmt = dftTabAmt * 2
        }
        winnerIncome -= dftTabAmt
        players[idx].score = Number(players[idx].score) + winnerIncome
        tableAmt += dftTabAmt
      } else {
        players[idx].score = Number(players[idx].score) - Number(amt)
      }
    }

    // 刷新视图数据
    this.setData({
      players: this.data.players,
      amt: '',
      rate: 'single',
      tableAmt: tableAmt
    })

    // 添加日志
    var winnerName = players[winnerIdx].name
    var round = ++this.data.round
    var text = this.data.text
    var double = ''
    if (rate == 'double'){
      double = text['double']
    }
    var gameLog = '第' + round + '局 赢家[' + winnerName + ']' + text[btnId] + double + '[' + amt + ']' + '收入[' + winnerIncome + "] 交台费[" + dftTabAmt + "]"
    console.log(gameLog)
  },
  zhuachong(e) {
    var winnerIdx = this.data.winnerIdx
    var loserIdx = this.data.loserIdx
    var amt = this.data.amt
    var players = this.data.players

    // 校验数据
    if (amt == null || amt == 0) {
      wx.showToast({
        title: '请先输入金额！',
        icon: 'none',
        duration: 2000
      })
      return
    }

    if (winnerIdx == loserIdx) {
      wx.showToast({
        title: '赢家和输家不能是同一个人！',
        icon: 'none',
        duration: 2000
      })
      return
    }

    for (var idx in players) {
      if (idx == winnerIdx) {
        players[idx].score = Number(players[idx].score) + Number(amt)
      }
      if (idx == loserIdx) {
        players[idx].score = Number(players[idx].score) - Number(amt)
      }
    }

    // 刷新视图数据
    this.setData({
      players: this.data.players
    })
  },
  winnerChange(e) {
    // var name = this.data.players[e.detail.value].name
    // console.log('radio发生change事件，携带value值为：', name)
    e.target.checked = true
    this.setData({
      winnerIdx: e.detail.value
    })
  },
  rateChange(e) {
    e.target.checked = true
    this.setData({
      rate: e.detail.value
    })
  },
  bindPickerChange(e) {
    this.setData({
      loserIdx: e.detail.value
    })
  }
})