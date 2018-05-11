<template>
  <el-col :span="24" class="main">
    <aside>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <template v-for="(item, index) in currentRoutes">
          <el-submenu :index="index + ''" :key="index" v-if="!item.hidden">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item  v-for="child in item.children" :key="child.path" :index="child.path" @click="$router.push(item.path + '/' + child.path)" v-if="!child.hidden">{{child.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </aside>
    <section class="content-wrap">
      <el-col :span="24" class="breadcrumb-wrap">
        <strong>{{$route.name}}</strong>
        <el-breadcrumb separator="/" >
          <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <router-view>
        <router-view></router-view>
      </router-view>
    </section>
  </el-col>
</template>
<script>
export default {
  computed: {
    currentRoutes () {
      let currentItem
      this.$router.options.routes.forEach(item => {
        if (item.path === this.$route.matched[0].path) {
          currentItem = item
        }
      })
      return currentItem.children
    }
  },
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
    console.log(this.currentRoutes)
    console.log(this.$router.options.routes)
    // console.log(this.$route.matched)
  }
}
</script>
<style lang="scss" scoped>
  .main {
    display: flex;
    position: absolute;
    top: 60px;
    right: 0;
    left: 0;
    bottom: 0;
    .content-wrap {
      flex: 1;
      padding: 20px;
      .breadcrumb-wrap {
        display: flex;
        justify-content: space-between;
      }
    }
    aside {
      width: 210px;
      flex: 0 0 210px;
      .el-menu {
        height: 100%;
      }
    }
  }
</style>
