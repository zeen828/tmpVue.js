<template>
  <div class="bet">
    <h2>{{ $t('page.index', {name: "Bet Game Bet"}) }}</h2>
    <form id="myForm" class="myForm" onsubmit="return false;">
      <md-tabs class="md-transparent" md-alignment="fixed">
        <md-tab v-for="(valGroup, indexGroup) in list" :key="indexGroup" :id="'tab-' + valGroup.type" :md-label="valGroup.title">
          <div class="input-group" v-for="(valType, indexType) in valGroup.group" :key="indexType">
            <label>
              {{ valType.title }}
            </label>
            <label v-for="(valQuests, indexQuests) in valType.quests" :key="indexQuests">
              {{ valQuests.title }}
              <input type="text" v-model="data[valType.id + '_' + valQuests.value]" size="1">
            </label>
          </div>
        </md-tab>
      </md-tabs>
      <button v-on:click="submit()">送出</button>
    </form>
  </div>
</template>

<script>
// import ajaxBetUser from '@/api/bet/user'
import ajaxBetGameBet from '@/api/bet/bet'

export default {
  name: 'BetGameRule',
  computed: {
    gmeId: {
      get () {
        return this.$route.params.gmeId
      }
    },
    gameRule: {
      get () {
        return this.$store.getters['storeBetGameBet/getRule']
      },
      set (val) {
        this.$store.commit('storeBetGameBet/setRule', val)
      }
    }
  },
  watch: {
    gameRule (newVal, oldVal) {
      var that = this
      // console.log('規則資料異動了')
      // console.log('newVal:', newVal)
      // console.log('oldVal:', oldVal)
      // const itemTmp = {
      //   title: '標題',
      //   type: '0',
      //   quests: [
      //     // { title: '顯示標題', value: '數值' }
      //   ]
      // }
      // console.log(itemTmp)
      newVal.forEach(function (item, key) {
        const itemTmp = {
          id: '0',
          title: '標題',
          type: '0',
          quests: [
            // { title: '顯示標題', value: '數值' }
          ]
        }
        // console.log(key, item)
        itemTmp.id = item.id
        itemTmp.title = item.name
        itemTmp.type = item.type_id
        const bet = JSON.parse(item.bet_json)
        for (var prop in bet) {
          // console.log('obj.', prop, ' = ', bet[prop])
          itemTmp.quests.push({ title: bet[prop], value: prop })
        }
        switch (item.type_id) {
          case 3:
          case 4:
            that.list[1].group.push(itemTmp)
            break
          case 5:
            that.list[2].group.push(itemTmp)
            break
          case 6:
          case 7:
          case 8:
          case 9:
            that.list[3].group.push(itemTmp)
            break
          default:
            that.list[0].group.push(itemTmp)
            break
        }
      })
      // console.log('整理資料:', that.list)
    }
  },
  methods: {
    ready () {
      var that = this
      that.$store.dispatch('storeBetGameBet/getGmeRule', that.gmeId)
    },
    submit () {
      var that = this
      console.log('表單資料?')
      console.log('查看資料1:', that.data)
      // const ruleIdArr = []
      // const valueArr = []
      // const amountArr = []
      const formData = new FormData()
      for (var prop in that.data) {
        // console.log('obj.', prop, ' = ', that.data[prop])
        const [ruleId, value] = prop.split('_')
        const amount = that.data[prop]
        // console.log('規則:', ruleId)
        // console.log('值:', value)
        // console.log('下注金:', amount)
        // 組合POST陣列表單資料
        formData.append('rule_id[]', ruleId)
        formData.append('value[]', value)
        formData.append('amount[]', amount)
      }
      ajaxBetGameBet.getBetting(that.gmeId, formData)

      console.log('表單資料!!!')
      // console.log('整理資料')
      // tt['0'].t1 = '100';
      // console.log('查看資料2:', this.list)
      // 下注API
      // ajaxBetGameBet.getBetting(that.gmeId, '1', '01', '10')
    }
  },
  data () {
    return {
      data: [],
      list: [
        {
          title: '猜車號名次',
          type: '1',
          group: [
            // {
            //   id: '1',
            //   title: '猜冠軍車號',
            //   type: '1',
            //   quests: [
            //     { title: '01', value: '01' },
            //     { title: '02', value: '02' }
            //   ]
            // },
            // {
            //   id: '2',
            //   title: '猜01號車名次',
            //   type: '2',
            //   quests: [
            //     { title: '第一名', value: 'N1' },
            //     { title: '第二名', value: 'N2' }
            //   ]
            // }
          ]
        },
        {
          title: '猜大小單雙',
          type: '2',
          group: [
            // {
            //   id: '3',
            //   title: '猜冠軍大小',
            //   type: '3',
            //   quests: [
            //     { title: '大', value: 'big' },
            //     { title: '小', value: 'min' }
            //   ]
            // },
            // {
            //   id: '4',
            //   title: '猜冠亞龍虎',
            //   type: '4',
            //   quests: [
            //     { title: '龍', value: 'dd' },
            //     { title: '虎', value: 'tt' }
            //   ]
            // }
          ]
        },
        {
          title: '猜龍虎',
          type: '3',
          group: [
            // {
            //   id: '3',
            //   title: '猜冠軍大小',
            //   type: '3',
            //   quests: [
            //     { title: '大', value: 'big' },
            //     { title: '小', value: 'min' }
            //   ]
            // },
            // {
            //   id: '4',
            //   title: '猜冠亞龍虎',
            //   type: '4',
            //   quests: [
            //     { title: '龍', value: 'dd' },
            //     { title: '虎', value: 'tt' }
            //   ]
            // }
          ]
        },
        {
          title: '猜冠亞',
          type: '4',
          group: [
            // {
            //   id: '3',
            //   title: '猜冠軍大小',
            //   type: '3',
            //   quests: [
            //     { title: '大', value: 'big' },
            //     { title: '小', value: 'min' }
            //   ]
            // },
            // {
            //   id: '4',
            //   title: '猜冠亞龍虎',
            //   type: '4',
            //   quests: [
            //     { title: '龍', value: 'dd' },
            //     { title: '虎', value: 'tt' }
            //   ]
            // }
          ]
        }
      ]
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    console.log('bet/game/pages/Bet.vue > mounted ()')
    // ajaxBetUser.getRead().then(function (result) {
    //   // console.log(result)
    //   if (result.status === 200 && result.request.readyState === 4) {
    //     const apiData = result.data
    //     console.log(apiData)
    //   }
    // })
    this.ready()
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>
