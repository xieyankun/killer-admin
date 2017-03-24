<template>
  <div class="k-header">
    <a href="" class="logo">
      <span><b>Admin</b>Killer</span>
    </a>
    <nav class="navbar">
      <a class="sidebar-toggle">切换</a>
      <div class="custom-menu">
        
      </div>
    </nav>
<!--     <div class="user-info">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img class="user-logo" src="../../assets/hair.jpg">
          <p>{{name}}</p>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div> -->
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      data: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data () {
      return {
        list: this.data
      }
    }
  }
</script>

<style lang="scss" scoped>
  .k-header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 54px;
    // font-size: 22px;
    line-height: 54px;
    color: #fff;
    background-color: #3c8dbc;
    z-index: 999;
  }
  .logo{
    -webkit-transition: width .3s ease-in-out;
    -o-transition: width .3s ease-in-out;
    transition: width .3s ease-in-out;
    display: block;
    float: left;
    height: 54px;
    font-size: 20px;
    line-height: 54px;
    text-align: center;
    width: 230px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 300;
    overflow: hidden;
    color: #fff;
  }
  .sidebar-toggle{
    float: left;
    background-color: transparent;
    background-image: none;
    padding: 0 15px;
    color: #fff;
  }
  .sidebar-toggle:hover {
      background-color: #008d4c;
  }
  
</style>
