import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // 首頁
    path: '/',
    name: 'Home',
    meta: {
      i18n: 'menu.home.name',
      breadcrumb: [
      ]
    },
    component: () => import('@/views/home/Index.vue')
    // component: () => import('@/views/Home.vue')
  },
  {
    // 公告訊息
    path: '/bulletin',
    name: 'Bulletin',
    meta: {
      i18n: 'menu.bulletin.name',
      breadcrumb: [
        {
          i18n: 'menu.home.name',
          toName: 'Home'
        }
      ]
    },
    component: () => import('@/views/bulletin/Index.vue'),
    children: [
      {
        // 公告訊息-清單
        path: 'lists',
        name: 'BulletinLists',
        meta: {
          i18n: 'menu.bulletin.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            }
          ]
        },
        component: () => import('@/views/bulletin/pages/Lists.vue')
      }
    ]
  },
  {
    // 遊戲大廳
    path: '/hall',
    name: 'Hall',
    meta: {
      i18n: 'menu.hall.name',
      breadcrumb: [
        {
          i18n: 'menu.home.name',
          toName: 'Home'
        }
      ]
    },
    component: () => import('@/views/hall/Index.vue'),
    children: [
      {
        // 彩票遊戲-清單
        path: 'list/lottery',
        name: 'HallListLottery',
        meta: {
          i18n: 'menu.hall.lottery.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.hall.name',
              toName: 'Hall'
            }
          ]
        },
        component: () => import('@/views/hall/pages/Lottery.vue')
      },
      {
        // 期貨-清單
        path: 'list/futures',
        name: 'HallListFutures',
        meta: {
          i18n: 'menu.hall.futures.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.hall.name',
              toName: 'Hall'
            }
          ]
        },
        component: () => import('@/views/hall/pages/Futures.vue')
      }
    ]
  },
  {
    // 彩票遊戲
    path: '/hall/lottery',
    name: 'HallLottery',
    meta: {
      i18n: 'menu.hall.lottery.name',
      breadcrumb: [
        {
          i18n: 'menu.home.name',
          toName: 'Home'
        }
      ]
    },
    component: () => import('@/views/hall/lottery/Index.vue'),
    children: [
      {
        // 遊戲規則
        path: 'rule/:gameId/lists',
        name: 'HallLotteryRuleList',
        meta: {
          i18n: 'menu.hall.lottery.rule.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.hall.name',
              toName: 'Hall'
            },
            {
              i18n: 'menu.hall.lottery.name',
              toName: 'HallListLottery'
            }
          ]
        },
        component: () => import('@/views/hall/lottery/pages/Rule.vue')
      },
      {
        // 開獎紀錄
        path: 'draw/:gameId/lists',
        name: 'HallLotteryDrawList',
        meta: {
          i18n: 'menu.hall.lottery.draw.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.hall.name',
              toName: 'Hall'
            },
            {
              i18n: 'menu.hall.lottery.name',
              toName: 'HallListLottery'
            }
          ]
        },
        component: () => import('@/views/hall/lottery/pages/Drae.vue')
      },
      {
        // 遊戲投注
        path: 'bet/:gameId',
        name: 'HallLotteryBet',
        meta: {
          i18n: 'menu.hall.lottery.bet.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.hall.name',
              toName: 'Hall'
            },
            {
              i18n: 'menu.hall.lottery.name',
              toName: 'HallListLottery'
            }
          ]
        },
        component: () => import('@/views/hall/lottery/pages/Bet.vue')
      },
      {
        // 投注紀錄
        path: 'record/:gameId/lists',
        name: 'HallLotteryRecordList',
        meta: {
          i18n: 'menu.hall.lottery.record.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.hall.name',
              toName: 'Hall'
            },
            {
              i18n: 'menu.hall.lottery.name',
              toName: 'HallListLottery'
            }
          ]
        },
        component: () => import('@/views/hall/lottery/pages/Record.vue')
      }
    ]
  },
  {
    // 期貨
    path: '/hall/futures',
    name: 'HallFutures',
    meta: {
      i18n: 'menu.hall.futures.name',
      breadcrumb: [
        {
          i18n: 'menu.home.name',
          toName: 'Home'
        }
      ]
    },
    component: () => import('@/views/hall/futures/Index.vue'),
    children: []
  },
  {
    // 彩票中心
    path: '/lottery',
    name: 'Lottery',
    meta: {
      i18n: 'menu.home.name',
      breadcrumb: [
        {
          i18n: 'menu.home.name',
          toName: 'Home'
        }
      ]
    },
    component: () => import('@/views/lottery/Index.vue'),
    children: [
      {
        path: 'lists',
        name: 'LotteryLists',
        meta: {
          i18n: 'menu.lottery.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            }
          ]
        },
        component: () => import('@/views/lottery/pages/Lists.vue')
      },
      {
        path: 'car',
        name: 'LotteryCar',
        meta: {
          i18n: 'menu.lottery.car.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.lottery.name',
              toName: 'LotteryLists'
            }
          ]
        },
        component: () => import('@/views/lottery/pages/Car.vue')
      },
      {
        path: 'ferry',
        name: 'LotteryFerry',
        meta: {
          i18n: 'menu.lottery.ferry.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.lottery.name',
              toName: 'LotteryLists'
            }
          ]
        },
        component: () => import('@/views/lottery/pages/Ferry.vue')
      },
      {
        path: 'horse',
        name: 'LotteryHorse',
        meta: {
          i18n: 'menu.lottery.horse.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.lottery.name',
              toName: 'LotteryLists'
            }
          ]
        },
        component: () => import('@/views/lottery/pages/Horse.vue')
      }
    ]
  },
  {
    // 開獎紀錄
    path: '/draw',
    name: 'Draw',
    meta: {
      i18n: 'menu.draw.name',
      breadcrumb: [
        {
          i18n: 'menu.home.name',
          toName: 'Home'
        }
      ]
    },
    component: () => import('@/views/draw/Index.vue'),
    children: [
      {
        path: 'lists',
        name: 'DrawLists',
        meta: {
          i18n: 'menu.draw.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.draw.name',
              toName: 'Draw'
            }
          ]
        },
        component: () => import('@/views/draw/pages/Lists.vue')
      },
      {
        path: 'car',
        name: 'DrawCar',
        meta: {
          i18n: 'menu.draw.car.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.draw.name',
              toName: 'Draw'
            }
          ]
        },
        component: () => import('@/views/draw/pages/Lists.vue')
      },
      {
        path: 'ferry',
        name: 'DrawFerry',
        meta: {
          i18n: 'menu.draw.ferry.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.draw.name',
              toName: 'Draw'
            }
          ]
        },
        component: () => import('@/views/draw/pages/Lists.vue')
      },
      {
        path: 'horse',
        name: 'DrawHorse',
        meta: {
          i18n: 'menu.draw.horse.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.draw.name',
              toName: 'Draw'
            }
          ]
        },
        component: () => import('@/views/draw/pages/Lists.vue')
      }
    ]
  },
  {
    // 資金紀錄
    path: '/funds',
    name: 'Funds',
    meta: {
      i18n: 'menu.funds.name',
      breadcrumb: [
        {
          i18n: 'menu.home.name',
          toName: 'Home'
        }
      ]
    },
    component: () => import('@/views/funds/Index.vue'),
    children: [
      {
        path: 'lists',
        name: 'FundsLists',
        meta: {
          i18n: 'menu.funds.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            }
          ]
        },
        component: () => import('@/views/funds/pages/Lists.vue')
      },
      {
        path: 'car',
        name: 'FundsCar',
        meta: {
          i18n: 'menu.funds.car.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.funds.name',
              toName: 'Funds'
            }
          ]
        },
        component: () => import('@/views/funds/pages/Lists.vue')
      },
      {
        path: 'ferry',
        name: 'FundsFerry',
        meta: {
          i18n: 'menu.funds.ferry.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.funds.name',
              toName: 'Funds'
            }
          ]
        },
        component: () => import('@/views/funds/pages/Lists.vue')
      },
      {
        path: 'horse',
        name: 'FundsHorse',
        meta: {
          i18n: 'menu.funds.horse.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.funds.name',
              toName: 'Funds'
            }
          ]
        },
        component: () => import('@/views/funds/pages/Lists.vue')
      }
    ]
  },
  {
    // 手機投注
    path: '/betting',
    name: 'Betting',
    meta: {
      i18n: 'menu.betting.name',
      breadcrumb: [
        {
          i18n: 'menu.home.name',
          toName: 'Home'
        }
      ]
    },
    component: () => import('@/views/betting/Index.vue'),
    children: [
      {
        path: 'lists',
        name: 'BettingLists',
        meta: {
          i18n: 'menu.betting.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.betting.name',
              toName: 'Betting'
            }
          ]
        },
        component: () => import('@/views/betting/pages/Lists.vue')
      },
      {
        path: 'car',
        name: 'BettingCar',
        meta: {
          i18n: 'menu.betting.car.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.betting.name',
              toName: 'Betting'
            }
          ]
        },
        component: () => import('@/views/betting/pages/Lists.vue')
      },
      {
        path: 'ferry',
        name: 'BettingFerry',
        meta: {
          i18n: 'menu.betting.ferry.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.betting.name',
              toName: 'Betting'
            }
          ]
        },
        component: () => import('@/views/betting/pages/Lists.vue')
      },
      {
        path: 'horse',
        name: 'BettingHorse',
        meta: {
          i18n: 'menu.betting.horse.name',
          breadcrumb: [
            {
              i18n: 'menu.home.name',
              toName: 'Home'
            },
            {
              i18n: 'menu.betting.name',
              toName: 'Betting'
            }
          ]
        },
        component: () => import('@/views/betting/pages/Lists.vue')
      }
    ]
  },
  {
    // 測試
    path: '/test',
    name: 'Test',
    meta: {
      i18n: 'test.title',
      breadcrumb: [
        {
          i18n: 'menu.home.name',
          toName: 'Home'
        }
      ]
    },
    component: () => import('@/views/Test.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
