<template>
  <div class="menu left-alignment">
    <a-menu
        :default-open-keys="['sub1']"
        :default-selected-keys="['1']"
        :inline-collapsed="collapsed"
        mode="inline"
        theme="dark"
    >
      <div v-for="item in menuList" :key="item.id">
        <a-menu-item v-if="item.children" :key="item.id">
          <a-icon :type="item.icon"/>
          <span>{{ item.name }}</span>
        </a-menu-item>
        <a-sub-menu v-else :key="item.id">
          <span slot="title"><a-icon :type="item.icon"/>
            <span>{{ item.name }}</span></span>
          <div v-for="child in item.children" :key="child.id">
            <a-menu-item :key="child.id">
              <a-icon :type="child.icon"/>
              <span>{{ child.name }}</span>
            </a-menu-item>
          </div>
        </a-sub-menu>
      </div>

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

  methods: {}

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
</style>