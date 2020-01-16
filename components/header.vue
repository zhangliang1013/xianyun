<template>
  <div class="header">
    <div class="logo">
        <img src="/logo.jpg" alt="">
    </div>
     <div>
         <nuxt-link to='/'>首页</nuxt-link>
         <nuxt-link to='/post'>旅游攻略</nuxt-link>
         <nuxt-link to='/hodel'>酒店</nuxt-link>
         <nuxt-link to='/air'>国内机票</nuxt-link>
     </div>
   <div>
       <span>消息</span>
       <nuxt-link to='/user/login'></nuxt-link>
   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>