<template>
<div class="login">
  <h1 style="text-align:center">火星</h1>
  <el-form
    :model="loginForm" ref="LoginForm" :rules="loginRules">
    <el-form-item label="用户名">
      <el-input v-model="loginForm.userName" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="loginForm.userPwd" />
    </el-form-item>
    <el-form-item>
      <el-button type='primary' style="width:100%" @click="handleSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
const store = useStore()
const router=useRouter()
const LoginForm = ref()
const loginForm = reactive({
  userName: 'admin',
  userPwd: '123456',
  token:''
})
const loginRules = {
  username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
}

const handleSubmit = () => {
  LoginForm.value.validate(async (valid) => {
    if (!valid) return 
    await store.dispatch('user/login',loginForm)
    router.push('/')
  
    
  })
}
</script>
<style scoped lang='scss'>
.login{
  width: 400px;
  height: 300px;
}
</style>
