<template>
  <div class="da">
    <el-container>
      <el-aside width="200px">
        <app-aside></app-aside>
      </el-aside>
      <el-container>
        <el-header>
          <app-header></app-header>
        </el-header>
        <el-main>
          <app-main></app-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import AppAside from './Aside'
import AppMain from './Main'
import AppHeader from './Header'
</script>

<style scoped lang="scss">
.el-aside {
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
  width: var(--el-aside-width, 300px);
  margin-top: -28px;
}
.el-header {
  background-color: pink;
  margin-top: -7px;
}
</style>
