<template>
  <div class="login">
    <h1>This is an login page</h1>
    <p>Capacity: {{ capacity }}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
// name             這個元件實體的名稱
// components       載入其他的元件到這個元件實體內
// mixins           載入混合模式元件
// props            讀取外部傳入的屬性
//                  type 這個變數的型別，你也可以不指定，就照單全收。
//                  required 規定這個屬性是不是必要存在，僅接受布林值。
//                  default 設定該屬性值的預設值，必須注意一點，如果是物件，必須要用函數的方法來返回預設值。
//                  validator 自定義的型別判斷。
// data()           設定預設值
// inheritAttrs     設定該元件是否繼承相關屬性，僅接受布林值
// directives       元件自身的自定義指令
// filters          元件自身定義的過濾器
// methods          設定元件內部方法
// computed         設定計算屬性
// watch            監聽工具
// 與生命週期有關的函數與呼叫順序：
// beforeCreate()   元件建立之前。
// created()        元件建立完成。
// beforeMount()    元件被放入 DOM 結構樹之前。
// mounted()        元件放入 DOM 結構樹之後。
// beforeUpdate()   元件實體更新之前。
// updated()        元件實體更新之後。
// beforeDestroy()  元件被銷毀（從 DOM 結構樹移除）之前。
// destroyed()      元件被銷毀（從 DOM 結構樹移除）之後。
  setup () {
    const capacity = ref(3)

    function increaseCapacity () {
      capacity.value++
    }
    return { capacity, increaseCapacity }
  }
}
</script>
