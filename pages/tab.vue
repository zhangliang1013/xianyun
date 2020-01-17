<template>
  <div class="tab">
    <div class="click">
      <span
        v-for="(value,index) in ['新闻','娱乐','体育']"
        :key="index"
        @click="handleclick(index)"
        :class="{active : current === index}"
      >{{value}}</span>
    </div>
    <ul v-if="current===0">
      <li>伊朗打飞机</li>
      <li>伊朗打飞机</li>
      <li>伊朗打飞机</li>
    </ul>
    <ul v-if="current===1">
      <li>爱情公寓开播了</li>
      <li>爱情公寓开播了</li>
      <li>爱情公寓开播了</li>
    </ul>
    <ul v-if="current===2">
      <li>国足得冠军</li>
      <li>国足得冠军</li>
      <li>国足得冠军</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0
    };
  },
  methods: {
    handleclick(index) {
      this.current = index;
    }
  }
};
</script>

<style lang='less' scoped>
.tab {
  text-align: center;
  // margin: 0 auto;
  span {
  display: inline-block;
  height: 30px;
  width: 50px;
  margin: 20px 30px;
}
ul {
  margin-left: 50px;
  li {
    padding: 10px;
  }
}

.active {
  border-bottom: 2px solid greenyellow;
  background: pink;
}
}
</style>