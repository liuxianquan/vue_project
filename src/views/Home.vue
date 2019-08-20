<template>
  <div class="page-home">
    <router-view />

    <Tabbar @changeIcon="getid($event)" :tabs="tabs" />
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'

export default {
  name: 'Home',

  components: {
    Tabbar
  },

  data () {
    return {
      tabs: [
        { id: 1, name: '首页', icon: 'icon-yingsaitong', href: '/myhome' },
        { id: 2, name: '我的学习', icon: 'icon-shuben-kongxin', href: '/mystudy' },
        { id: 3, name: '账号', icon: 'icon-zhanghao1', href: '/myacount' },
      ]
    }
  },
  methods: {
    getid (id) {

      if (id === 1) {
        this.tabs[0].icon = 'icon-yingsaitong';
        this.tabs[1].icon = 'icon-shuben-kongxin';
        this.tabs[2].icon = 'icon-zhanghao1'
      }
      if (id === 2) {
        this.tabs[0].icon = 'icon-shouye';
        this.tabs[1].icon = 'icon-shuben-shixin';
        this.tabs[2].icon = 'icon-zhanghao1'
      }
      if (id === 3) {
        this.tabs[0].icon = 'icon-shouye';
        this.tabs[1].icon = 'icon-shuben-kongxin';
        this.tabs[2].icon = 'icon-zhanghao'
      }

    }
  }
}

</script>

<style lang="scss">
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  > div:first-child {
    flex: 1;
    overflow-y: auto;
  }
}
</style>

