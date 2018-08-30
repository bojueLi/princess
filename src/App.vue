<template>
  <div id="app">
    <Tabbar></Tabbar>
    <router-view/>
  </div>
</template>

<script>
  import Tabbar from './components/tabbar'
export default {
  name: 'app',
  components:{
    Tabbar
  },
  mounted:function () {
    this.$router.push("/")
  }
}
</script>

<style>
  *{margin: 0;padding: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
