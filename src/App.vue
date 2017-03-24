<template>
  <div id="app">
    <k-header :name="kira"></k-header>
    <k-sidebar></k-sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import kHeader from '@/components/layout/header.vue'
import kSidebar from '@/components/layout/sidebar.vue'
export default {
  name: 'app',
  components: {
    kHeader,
    kSidebar
  },
  data () {
    return {
      kira: 'Kira'
    }
  }
}
</script>

<style lang="scss">
@import url('./style/resetcss.css');
@import url('./style/font/iconfont.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
