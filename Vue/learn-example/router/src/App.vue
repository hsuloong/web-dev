<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-link to="/home" tag="button" replace>首页</router-link>
    <button @click="onClick">关于</button>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    onClick() {
      this.$router.push('/about')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
