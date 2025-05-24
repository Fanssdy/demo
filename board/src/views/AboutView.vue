<script setup lang="ts">
import Footer from '../components/layout/footer.vue'

</script>

<template>
  <div class="about-container">  <!-- 新增外层容器 -->
    <div class="about" style="height: 1500px; background: #f0f0f0;">
      <h1>This is an about page</h1>
      <p>长内容测试（高度1500px）</p>
      <div v-for="i in 50" :key="i">内容行 {{ i }}</div>
    </div>
    <Footer></Footer>
  </div>
</template>



<style scoped>
/* 移除原有的媒体查询样式 */
.about {
  padding: 25px;
}

.about-footer {
  background: #B3C0D1;
  height: 60px;
  line-height: 60px;
  text-align: center;
  flex-shrink: 0;        /* 防止footer被压缩 */
}

</style>