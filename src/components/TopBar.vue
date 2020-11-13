<template>
    <div class="mobile-bar">
      <div class="left-box">
        <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'"/>
        </a-button>
        <b class="title">投放管理系统</b>
      </div>
        <div class="user-info-container">
            <img src="../assets/user_avatar_bg.png" class="avatar-container" >
            <div class="user-info-text-container">
                <div class="user-nickname-text">{{ nickName }}</div>
            </div>

          <button class="switch-account-btn" type="button" v-on:click="accountMethod">{{ isLogin ? "切换账号" : "去登录" }}</button>
        </div>
    </div>
</template>

<script>

export default {
  name: "AccountBar.vue",
  data(){
    return {
      nickName: '二郎神',
      isLogin: false,
      collapsed: false,
    }
  },
  methods: {
    accountMethod() {
    },

    login() {
    },


    toggleCollapsed(){
      this.collapsed = !this.collapsed
      this.$emit("toggleCollapsed", "")
    }
  }
}
</script>

<style scoped>

.row-box {
  display: flex;
  flex-direction: row;
}


.mobile-bar {
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.user-info-container {
  display: flex;
  flex-direction: row;
  padding-left: 18px;
}

.user-info-text-container {
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-between;
  padding-left: 10px;
  height: 46px;
  text-align: left;
}

.user-nickname-text {
  font-size: 15px;
  color: #3F3F3F;
}

.user-yunduobi-text {
  padding-left: 8px;
  font-size: 11px;
  line-height: 15px;
  text-align: center;
  color: #3F3F3F;
}

.avatar-container {
  margin: 15px auto 15px auto;
  background: #D3D3D3;
  width: 46px;
  height: 46px;
  border-radius: 23px;
}

.mobile-bar .switch-account-btn {
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 30px;
  background: #4AA9FF;
  border: none;
  color: white;
  width: 86px;
  height: 30px;
  border-radius: 3px;
  font-size: 12px;
}

.mobile-bar .title {
  color: white;
  padding: 10px;
  font-size: 15px;
}

.mobile-bar .left-box {

}
</style>