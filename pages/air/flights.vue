<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <FlightsFilters :data='backupFlightsData'></FlightsFilters>

        <!-- 航班头部布局 -->
        <FlightsListHead></FlightsListHead>

        <!-- 航班信息 -->
        <FlightsItem v-for="(item,index) in pagingList" :key="index" :data="item"></FlightsItem>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
      </div>
    </el-row>

    <!-- 分页组件 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="[3, 5, 8, 10]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="flightsData.total"
    ></el-pagination>
  </section>
</template>

<script>
import FlightsListHead from "@/components/air/flightsListHead";
import FlightsItem from "@/components/air/flightsItem";
import FlightsFilters from '@/components/air/flightsFilters'

export default {
  components: {
    FlightsListHead,
    FlightsItem,
    FlightsFilters
  },
  data() {
    return {
      // 储存参数
      getParameter: {
        departCity: "",
        departCode: "",
        destCity: "",
        destCode: "",
        departDate: ""
      },
      // 储存机票列表信息
      flightsData: {},
      // 备份机票列表信息
      backupFlightsData: {
          info : {},
          flights : [],
          options : []
      },
      //   分页的数据
      pageIndex: 1,
      pageSize: 3
    };
  },
//   绑定分页数据
  computed : {
    pagingList(){
        if(!this.flightsData.flights){
            return;
        }
        var arr = this.flightsData.flights.slice(
            (this.pageIndex - 1) * this.pageSize , this.pageIndex * this.pageSize
        )
        return arr;
    }
  },
  methods: {
    handleSizeChange(val) {
        //  console.log(val);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
       this.pageIndex = val;
      console.log(val)
    }
  },
  mounted() {
    // 获取机票列表信息
    const data = this.$route.query;
    const { goCity, goCityNum, getCity, getCityNum, goDate } = data;
    this.getParameter.departCity = goCity;
    this.getParameter.departCode = goCityNum;
    this.getParameter.destCity = getCity;
    this.getParameter.destCode = getCityNum;
    this.getParameter.departDate = goDate;
    this.$axios({
      url: "/airs",
      params: this.getParameter
    }).then(res => {
      // console.log(res)
      this.flightsData = res.data;
    //   console.log(this.flightsData);
      this.backupFlightsData = { ...res.data };
      console.log( this.backupFlightsData)
    });
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
.el-pagination {
  text-align: center;
}
</style>