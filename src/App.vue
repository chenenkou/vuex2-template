<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <world></world>
  </div>
</template>

<script>
import Hello from './components/Hello'
import World from './components/World'

export default {
  name: 'app',
  components: {
    Hello,
    World
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
