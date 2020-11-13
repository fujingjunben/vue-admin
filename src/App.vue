<template>
  <div id="app" class="main">
    <TopBar @toggleCollapsed="toggleCollapsed"/>
    <div class="content">
    <Menu :collapsed="collapsed"/>
      <router-view></router-view>
    </div>
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
  },
  data(){
    return {
      collapsed: false
    }
  },

  methods: {
    toggleCollapsed(){
      this.collapsed = !this.collapsed
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
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.main .content {
  display: flex;
  flex-direction: row;
  justify-content: start;
}
</style>
