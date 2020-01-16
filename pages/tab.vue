<template>
  <div class="tab" style="padding : 100px">
    <div class="button">
      <span v-for="(value,index) in  ['新闻','娱乐','体育']" :key="index" @click='handleclick(index)'
       :class="{active: res === index }">
          {{value}}
      </span>
    </div>
    <ul v-if='res===0'>
      <li id>伊朗</li>
      <li id>伊朗</li>
      <li id>伊朗</li>
    </ul>
    <ul  v-if='res===1'>
      <li id>爱情公寓</li>
      <li id>爱情公寓</li>
      <li id>爱情公寓</li>
    </ul>
    <ul  v-if='res===2'>
      <li id>国足得冠军</li>
      <li id>国足得冠军</li>
      <li id>国足得冠军</li>
    </ul>
  </div>
</template>

<script>
export default {
    data () {
        return {
            res : 0
        }
    },
    methods : {
        handleclick(index){
            this.res = index
        }
    }
};
</script>

<style lang='less' scoped>
span {
    cursor: pointer;
    margin: 20px;
}
.active {
   color: #fff;
   background-color: pink;
   border-bottom: 1px solid red;
}
</style>