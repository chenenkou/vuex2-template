<template>
  <div>
    <input type="text" v-model="essentialLinksName" />
  </div>
</template>
<style>

</style>
<script>
import * as types from '../store/mutation-types'

export default {
  name: 'world',
  data () {
    return {
      msg: 'wold'
    }
  },
  computed: {
    // 表单处理 - 双向绑定的计算属性
    essentialLinksName: {
      get () {
        return this.$store.state.app.essentialLinksName
      },
      set (value) {
        this.$store.commit(types.APP_UPDATE_ES_LINKS, value)
      }
    }
  }
}
</script>
