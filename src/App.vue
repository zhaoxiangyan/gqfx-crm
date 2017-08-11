<template>
  <div id="app"> 
    <router-view></router-view>
  </div>
</template>

<script>
// import '../static/css/main.css'
import Custum from './assets/js/main.js'
export default { 
  name: 'app',
  components: {
    Custum
  }
}
</script>

<style>
/*@import '../static/css/style.css';*/
/*@import '../static/css/main.css';*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  height:100%;
  width:100%;
  /* overflow-x:hidden;*/
}
</style>
