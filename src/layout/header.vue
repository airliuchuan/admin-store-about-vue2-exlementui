<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="10" class="logo">商城管理系统2.0</el-col>
      <el-col :span="18" class="header-nav">
        <el-menu
          :default-active="$route.matched[0].path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#333"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item :index="item.path" v-for="(item, index) in $router.options.routes" v-if="!item.hidden" :key="index" @click="$router.push(item.path)">{{item.name}}</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4" class="userinfo">
        <el-dropdown>
          <div class="el-dropdown-link">
            <div class="user-ava">
              <img src="@/assets/image/logo.png" alt="avatar">
            </div>
            <span class="user-name">Admin</span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item></el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="user-set">
          <span>设置</span>
        </div>
      </el-col>
    </el-col>
    <router-view></router-view>
  </el-row>
</template>
<script>
export default {
  methods: {
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted () {
    // console.log(this.$router.options.routes)
    // console.log(this.$route.matched)
  }
}
</script>
<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .header {
    background: #333;
    height: 60px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    .header-nav {
      min-width: 800px;
      display: flex;
      justify-content: center;
    }
    .userinfo {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 40px;
      min-width: 140px;
      .user-set {
        color: #fff;
        font-size: 16px;
        margin-left: 10px;
      }
      .el-dropdown-link {
        display: flex;
        align-items: center;
      }
      .user-ava {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        overflow: hidden;
        background: #fff;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .user-name {
        color: #fff;
        font-size: 16px;
        margin-left: 5px;
      }
    }
    .logo {
      width: 230px;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 230px;
      justify-content: center;
      color: #fff;
    }
  }
}
</style>
