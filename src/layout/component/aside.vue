<template>
  <el-container class="container">
    <el-menu :default-active="activeIndex" @select="changeRoute">
      <el-menu-item index="home">HOME</el-menu-item>
      <el-menu-item index="article">文章分类</el-menu-item>
      <el-menu-item index="picture">画图产出</el-menu-item>
    </el-menu>
  </el-container>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useRouter } from "vue-router";

export default {
  name: 'Aside',
  setup() {
    const router = useRouter()
    const activeIndex = ref('home')
    const changeRoute = (el: string) => {
      router.push('/' + el)
    }
    return {
      activeIndex,
      changeRoute
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  ul {
    width: 100%;
    .el-menu-item.is-active {
      background: #b1a6df;
    }
  }
}
</style>

