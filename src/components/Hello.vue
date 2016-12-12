<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="showEsLinksName">{{ essentialLinksName }}</h2>
    <ul>
      <li v-for="item in esLinks"><a :href="item.href" target="_blank">{{ item.text }}</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import * as types from '../store/mutation-types'

export default {
  name: 'hello',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      essentialLinksName: state => state.app.essentialLinksName,
      msg: state => state.app.msg
    }),
    ...mapGetters({
      esLinks: types.APP_ES_LINKS
    })
  },
  methods: {
    ...mapActions({
      showEsLinksName: types.APP_SHOW_ES_LINKS
    })
  },
  mounted () {
    // console.log(this.$store)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
