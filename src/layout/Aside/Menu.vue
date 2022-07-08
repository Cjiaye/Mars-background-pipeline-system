<template>
   
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#001529"
      class="el-menu-vertical-demo"
      default-active="1"
      text-color="#fff"
      router
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/system-user">用户管理</el-menu-item>
        <el-menu-item index="/system-menu">菜单管理</el-menu-item>
        <el-menu-item index="/system-role">角色管理</el-menu-item>
        <el-menu-item index="/system-dept">部门管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>审批管理</span>
        </template>
        <el-menu-item index="/audit-leave">休假申请</el-menu-item>
        <el-menu-item index="/audit-approve">待审核</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup></script>
<style scoped lang="scss">
.el-menu {
  height: 200vh;
}
</style>
