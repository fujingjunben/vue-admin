<template>
  <div class="menu left-alignment">
    <a-menu
        :default-open-keys="['sub1']"
        :default-selected-keys="['1']"
        :inline-collapsed="collapsed"
        mode="inline"
        theme="dark"
        @click="handleClick"
    >
      <template  v-for="item in menuList" >
        <a-menu-item v-if="!item.children" :key="item.id" >
          <a-icon :type="item.icon"/>
          <span>{{ item.name }}</span>
        </a-menu-item>
        <a-sub-menu v-else :key="item.id">
          <span slot="title"><a-icon :type="item.icon"/>
            <span>{{ item.name }}</span></span>
          <template v-for="child in item.children" >
            <a-menu-item :key="child.id">
              <a-icon :type="child.icon"/>
              <span>{{ child.name }}</span>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>

    </a-menu>
  </div>
</template>

<script>
export default {
  props: ['collapsed'],
  name: "Menu",
  data() {
    return {
      menuList: [
        {
          id: '1',
          name: 'option1',
          icon: 'pie-chart',
        },
        {
          id: '2',
          name: 'option2',
          icon: 'desktop',
        },
        {
          id: '3',
          name: 'option3',
          icon: 'inbox',
        },
        {
          id: '4',
          name: 'Navigation One',
          icon: 'mail',
          children: [
            {
              id: '41',
              name: 'option5',
              icon: 'mail'
            },
            {
              id: '42',
              name: 'option6',
              icon: 'mail'
            }
          ]
        },
        {
          id: '5',
          name: 'Navigation Two',
          icon: 'appstore',
          children: [
            {
              id: '51',
              name: 'option7',
              icon: 'appstore'
            },
            {
              id: '52',
              name: 'option8',
              icon: 'appstore'
            }
          ]
        },
      ]
    }
  },

  methods: {
    handleClick(e) {
      console.log('click', e);
      this.$router.push({path: e.key})
    },
  }

}
</script>

<style scoped>
.menu {
  width: 256px;
  height: 100vh;
  /*background-color: black;*/
}

.left-alignment {
  text-align: start;
}

.menu .ant-menu-dark.ant-menu-inline, .ant-menu-dark.ant-menu-vertical, .ant-menu-dark.ant-menu-vertical-left, .ant-menu-dark.ant-menu-vertical-right {
    border-right: 0;
    height: 100vh;
}
</style>