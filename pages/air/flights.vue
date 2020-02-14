<template>
    <section class="contianer">
        <el-row  type="flex" justify="space-between">

            <!-- 顶部过滤列表 -->
            <div class="flights-content">
                <!-- 过滤条件 -->
                <div>
                    
                </div>
                
                <!-- 航班头部布局 -->
                 <FlightsListHead></FlightsListHead>
                
                
                <!-- 航班信息 -->
                 <FlightsItem v-for="(item,index) in flightsData.flights" :key="index" :data='item'></FlightsItem>
            </div>

            <!-- 侧边栏 -->
            <div class="aside">
                <!-- 侧边栏组件 -->
            </div>
        </el-row>
    </section>
</template>

<script>
import FlightsListHead from '@/components/air/flightsListHead';
import FlightsItem from '@/components/air/flightsItem'

export default {
    components : {
    FlightsListHead,FlightsItem
    },
    data(){
        return {
            // 储存参数
            getParameter : {
                departCity : '',
                departCode : '',
                destCity : '',
                destCode : '',
                departDate : ''
            },
            // 储存机票列表信息
            flightsData : {},
            // 备份机票列表信息
            backupFlightsData : {}
        }
    },
    mounted(){
        // 获取机票列表信息
        const data = this.$route.query;
        const {goCity , goCityNum, getCity ,getCityNum,goDate} = data;
        this.getParameter.departCity = goCity
        this.getParameter.departCode = goCityNum
        this.getParameter.destCity =getCity
        this.getParameter.destCode = getCityNum
        this.getParameter.departDate = goDate
        this.$axios({
            url : '/airs',
            params : this.getParameter
        }).then(res => {
            // console.log(res)
            this.flightsData = res.data;
            console.log(this.flightsData)
            this.backupFlightsData = {...res.data};
        })
    }
}
</script>

<style scoped lang="less">
    .contianer{
        width:1000px;
        margin:20px auto;
    }

    .flights-content{
        width:745px;
        font-size:14px;
    }

    .aside{
        width:240px;
    } 
</style>