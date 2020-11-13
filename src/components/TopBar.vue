<template>
    <div class="mobile-bar">
      <div class="title">
        投放管理系统
      </div>
        <div class="user-info-container">
            <img src="../assets/user_avatar_bg.png" class="avatar-container" >
            <div class="user-info-text-container">
                <div class="user-nickname-text">{{ nikeName }}</div>
                <div class="row-box">
                    <img src="../assets/yunduobi_icon.png" width="15" height="15">
                    <div class="user-yunduobi-text">云朵币：666</div>
                </div>
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
      isLogin: false
    }
  },
  methods: {
    accountMethod() {
    },

    login() {
    },
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
  border-radius: 6px;
  box-shadow: 3px 5px 3px #F2F2F2;
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
}

</style>