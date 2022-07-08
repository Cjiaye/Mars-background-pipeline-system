<template>
  <div class="header">
    <div class="zuo">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="you">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-icon><Bell /></el-icon>
          admin
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="emial">邮编</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup></script>
<style scoped lang="scss">
.you {
  float: right;
}
.el-breadcrumb {
  margin-top: 20px;
}
</style>
