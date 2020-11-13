<template>
  <div id="app" class="main">
    <TopBar/>
    <Menu/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import TopBar from "@/components/TopBar";

export default {
  name: 'App',
  components: {
    Menu,
    TopBar
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
.main {
  display: flex;
  flex-direction: column;
  justify-content: start;
}
</style>
