<template>
  <div class="sidebar">
    <div class="logo">
      <img src="http://qcfile.b0.upaiyun.com/cloud/settings/1487644109713/img/logo.png" alt="">
    </div>
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
      <div v-for="item in list">
        <el-submenu :index="item.path" v-if="item.tree">
          <template slot="title"><i class="el-icon-date"></i>{{item.name}}</template>
          <el-menu-item :index="n.path" v-for="n in item.child">{{n.sub}}</el-menu-item>
        </el-submenu>
        <el-menu-item :index="item.path" v-else>
          <i class="el-icon-setting"></i>{{item.name}}
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data () {
      console.log(this.data)
      return {
        list: this.data
      }
    },
    computed: {
      onRoutes () {
        return this.$route.path.replace('/', 'brand')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .logo{
    img{
      width: 100%;
    }
  }
  .sidebar{
    display: block;
    position: absolute;
    padding-top: 54px;
    width: 230px;
    left: 0;
    top: 0;
    bottom:0;
    background: #2E363F;
    text-align: left;
  }
  .el-menu-item, .el-submenu{
    border-bottom: 1px solid #535353;
  }
  .sidebar > ul {
    height:100%;
  }
</style>

