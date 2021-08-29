<template>
  <el-container class="container">
    <el-aside>
      <Aside/>
    </el-aside>
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <Footer/>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
  import { computed } from 'vue'
  import Aside from '../component/aside.vue'
  import Header from '../component/header.vue'
  import Footer from '../component/footer.vue';
  export default {
    name: 'layoutDefaults',
    components: {
      Aside,
      Header,
      Footer
    },
    setup() {
    }
  }
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  .el-aside {
    background: #fff;
    box-shadow: #eeeeee;
  }
  .el-main {
    background: #ccc;
  }
}
</style>

