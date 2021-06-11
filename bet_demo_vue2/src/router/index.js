import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首頁'
    },
    component: Home
  },
  {
    path: '/fintech',
    name: 'Fintech',
    meta: {
      title: '平台'
    },
    component: () => import(/* webpackChunkName: "fintech_index" */ '../views/fintech/Index.vue'),
    children: [
      {
        path: 'user',
        name: 'FintechUser',
        meta: {
          title: '使用者'
        },
        component: () => import(/* webpackChunkName: "fintech_user_index" */ '../views/fintech/user/Index.vue'),
        children: [
          {
            path: 'login',
            name: 'FintechUserLogin',
            meta: {
              title: '登入'
            },
            component: () => import(/* webpackChunkName: "fintech_user_login" */ '../views/fintech/user/pages/Login.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/bet',
    name: 'Bet',
    meta: {
      title: '彩票'
    },
    component: () => import(/* webpackChunkName: "bet_index" */ '../views/bet/Index.vue'),
    children: [
      {
        path: 'user',
        name: 'BetUser',
        meta: {
          title: '使用者'
        },
        component: () => import(/* webpackChunkName: "bet_user_index" */ '../views/bet/user/Index.vue'),
        children: [
          {
            path: 'login',
            name: 'BetUserLogin',
            meta: {
              title: '登入'
            },
            component: () => import(/* webpackChunkName: "bet_user_login" */ '../views/bet/user/pages/Login.vue')
          }
        ]
      },
      {
        path: 'game',
        name: 'BetGame',
        meta: {
          title: '遊戲'
        },
        component: () => import(/* webpackChunkName: "bet_game_index" */ '../views/bet/game/Index.vue'),
        children: [
          {
            path: 'list',
            name: 'BetGameList',
            meta: {
              title: '清單'
            },
            component: () => import(/* webpackChunkName: "bet_game_list" */ '../views/bet/game/pages/List.vue')
          },
          {
            path: ':gmeId',
            name: 'BetGameInfo',
            meta: {
              title: '資訊'
            },
            component: () => import(/* webpackChunkName: "bet_game_info" */ '../views/bet/game/Info.vue'),
            children: [
              {
                path: 'rule',
                name: 'BetGameRule',
                meta: {
                  title: '規則'
                },
                component: () => import(/* webpackChunkName: "bet_game_rule" */ '../views/bet/game/pages/Rule.vue')
              },
              {
                path: 'draw',
                name: 'BetGameDraw',
                meta: {
                  title: '開獎'
                },
                component: () => import(/* webpackChunkName: "bet_game_draw" */ '../views/bet/game/pages/Draw.vue')
              },
              {
                path: 'bet',
                name: 'BetGameBet',
                meta: {
                  title: '下注'
                },
                component: () => import(/* webpackChunkName: "bet_game_bet" */ '../views/bet/game/pages/Bet.vue')
              },
              {
                path: 'record',
                name: 'BetGameRecord',
                meta: {
                  title: '下注紀錄'
                },
                component: () => import(/* webpackChunkName: "bet_game_record" */ '../views/bet/game/pages/Record.vue')
              }
            ]
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
