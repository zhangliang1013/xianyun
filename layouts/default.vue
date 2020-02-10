<template>
<!-- 这是根组件 -->
  <div class="def">
    <!-- 头部公共组件 -->
    <Header></Header>
    <!-- 相当于<router-view></router-view> 组件映射 -->
    <nuxt />
   <!-- 页脚公共组件 -->
   <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
components: {
  Header,Footer
}
}
</script>

<style lang='less'>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box
 }
 a {
   text-decoration: none;
   color: #000;
   }
 em,i {
   font-style: normal
 }
 ul,li,ol{
   list-style: none
 }
</style>