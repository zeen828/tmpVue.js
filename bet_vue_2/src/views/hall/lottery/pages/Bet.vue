<template>
  <div class="hall-lottery-pages-bet">
    <!-- 分類 -->
    <nav class="nav justify-content-center">
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a v-for="(item, index) in tabList" :key="index" :id="'nav-' + item.tab + '-tab'" :class="item.selected ? 'nav-item nav-link active' : 'nav-item nav-link'" data-toggle="tab" :href="'#nav-' + item.tab" role="tab" :aria-controls="'nav-' + item.tab" :aria-selected="item.selected ? 'true' : 'false'">{{ item.title }}</a>
      </div>
    </nav>
    <!-- 下注內容 -->
    <div class="tab-content" id="nav-tabContent">
      <div v-for="(item, index) in list" :key="index" :id="'nav-' + item.tab" :class="item.selected ? 'tab-pane fade show active' : 'tab-pane fade'" role="tabpanel" :aria-labelledby="'nav-' + item.tab + '-tab'">
        <!-- 投注項目 -->
        <div v-for="(group, index2) in item.groups" :key="index2" class="card">
          <div class="card-header">
            {{ group.title }}
          </div>
          <div class="card-body">
            <div class="row">
              <!-- 投注選項 -->
              <div v-for="(quest, index3) in group.quests" :key="index3" class="col-6 col-md-4 col-lg-2">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon3">{{ quest.title }}</span>
                  </div>
                  <input type="text" class="form-control" v-model="data[group.id + '_' + quest.value]">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn w-100 btn-info" @click="submit()">投注</button>
  </div>
</template>

<script>
export default {
  name: 'Hall-Lottery-Pages-Bet',
  components: {},
  mixins: {},
  props: {},
  inheritAttrs: {},
  directives: {},
  filters: {},
  methods: {
    ready () {
      // console.log('ready')
      // 取得開獎清單
      this.$store.dispatch('lottery/betRule', this.gameId)
    },
    submit () {
      console.log('submit')
      var that = this
      var formData = new FormData()
      for (var prop in that.data) {
        console.log('obj.', prop, ' = ', that.data[prop])
        const [ruleId, value] = prop.split('_')
        const amount = that.data[prop]
        console.log('規則:', ruleId)
        console.log('值:', value)
        console.log('下注金:', amount)
        // 組合POST陣列表單資料
        formData.append('rule_id[]', ruleId)
        formData.append('value[]', value)
        formData.append('amount[]', amount)
      }
      console.log('data', that.data)
      console.log('formData', formData)
      // 顯示formData的方式
      for (var pair of formData.entries()) {
        console.log('查資料', pair[0] + ', ' + pair[1])
      }
      this.$store.dispatch('lottery/betting', { gameId: this.gameId, formData: formData })
    }
  },
  computed: {
    gameId: {
      get () {
        return this.$route.params.gameId
      }
    },
    betRuleList: {
      get () {
        return this.$store.getters['lottery/getBetRuleList']
      }
    }
  },
  watch: {
    betRuleList (newVal, oldVal) {
      // console.log('newVal', newVal)
      // console.log('oldVal', oldVal)
      var that = this
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
            that.list[1].groups.push(itemTmp)
            break
          case 5:
            that.list[2].groups.push(itemTmp)
            break
          case 6:
          case 7:
          case 8:
          case 9:
            that.list[3].groups.push(itemTmp)
            break
          default:
            that.list[0].groups.push(itemTmp)
            break
        }
      })
      // console.log('data', that.list)
    }
  },
  data () {
    return {
      data: [],
      tabList: [
        {
          title: '車號',
          type: '1',
          tab: 'one',
          selected: true
        },
        {
          title: '兩面',
          type: '2',
          tab: 'two',
          selected: false
        },
        {
          title: '龍虎',
          type: '3',
          tab: 'three',
          selected: false
        },
        {
          title: '冠亞',
          type: '4',
          tab: 'four',
          selected: false
        }
      ],
      list: [
        {
          title: '猜車號名次',
          type: '1',
          tab: 'one',
          selected: true,
          groups: [
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
          title: '兩面',
          type: '2',
          tab: 'two',
          selected: false,
          groups: []
        },
        {
          title: '猜龍虎',
          type: '3',
          tab: 'three',
          selected: false,
          groups: []
        },
        {
          title: '猜冠亞',
          type: '4',
          tab: 'four',
          selected: false,
          groups: []
        }
      ]
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.ready()
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>
