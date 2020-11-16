<template>
  <div id="app" class="main">
    <TopBar @toggleCollapsed="toggleCollapsed"/>
    <div class="content">
    <Menu :collapsed="collapsed" :menuList="menuList"/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import TopBar from "@/components/TopBar";
import Api from "@/api/Api";

export default {
  name: 'App',
  components: {
    Menu,
    TopBar
  },
  data(){
    return {
      collapsed: false,
      menuList: []
    }
  },

  created(){
    this.getMenuList()
  },

  methods: {
    toggleCollapsed(){
      this.collapsed = !this.collapsed
    },

    getMenuList(){
      this.menuList = Api.getMenuList()
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
