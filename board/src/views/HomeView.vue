<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Footer from '../components/layout/footer.vue'
// import Home from '@/components/Home.vue';

</script>

<template>
  <main class="main-container">
    <TheWelcome />
    <Footer></Footer>
  </main>
</template>
<!-- <template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template> -->

<style scoped>
.main-container {
 
  background-color: #f0f0f0; /* 背景色（浅灰色） */
  /* 其他样式，比如圆角、边框等 */
  border-radius: 8px;
  border: 1px solid #ddd;
}
</style>