<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
const SearchVisible = ref(false)
</script>

<template>
    <div class="navbar-wrapper">
        <div class="header-container">
            <div class="logo-container">
                <img alt="Vue logo" class="logo" src="@/assets/logo.svg"     width="28" height="28"/>
            </div>
            <div class="content">
                
                <el-button @click="SearchVisible = true" plain size="large" :icon="Search" round>搜索</el-button>
                
                
                <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                </nav>

            </div>    
        </div>
    </div>
    <el-dialog v-model="SearchVisible" title="Shipping address" width="500" :show-close="false">
        <template #header="{  titleId, titleClass }">
            <div class="my-header">
                <h4 :id="titleId" :class="titleClass">搜索功能敬请期待</h4>
            <!-- <el-button type="danger" @click="close">
            <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
            Close
            </el-button> -->
            </div>
    </template>
    This is dialog content.
    </el-dialog>

</template>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}

.navbar-wrapper {
padding:0px 25px;
background: #d1b3b3;
}

.header-container {
    display: flex;
    justify-content: space-between;
    margin: 0px auto;
}

.logo-container {
    display: flex;
    align-items: center;
    height: var(--header-height);
}
.content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
}
.algolia-search-box {
        min-width: 176.3px;
    }
</style>
