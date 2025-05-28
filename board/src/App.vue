<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/layout/header.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <!-- <RouterView /> -->
  <div class="app-root">
    <el-container class="full-height">
      <el-header class="header">
      <Header></Header>
      </el-header>
      
       <el-main class="main-content">
          <RouterView />
       </el-main>
        <!-- <el-aside width="200px" class="aside">Aside</el-aside> -->
      
       <!-- <div class="footer">Footer</div> -->
    </el-container>
  </div>
</template>


<style >
/* 全局强制重置 */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

#app {
  width: 100%;
  min-width: 100vw;
  margin: 0;
  padding: 0;
}

.el-sub-demo{
  .el-menu{
    background-color: rgb(255, 255, 255);
    
  }
}
</style>

<style scoped>
.app-root {
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
}

.full-height {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  background: #B3C0D1;
  height: 60px;
  line-height: 60px;
  text-align: center;
  flex-shrink: 0;
}



.main-content {
  flex: 1;
  padding: 0px;
}

.footer {
  background: #B3C0D1;
  height: 60px;
  line-height: 60px;
  text-align: center;
  flex-shrink: 0;
}
</style>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->