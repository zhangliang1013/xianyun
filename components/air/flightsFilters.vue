<template>
    <div class="filters">
        <el-row type="flex" class="filters-top" justify="space-between" align="middle">
            <el-col :span="8">
                单程： 
                 {{data.info.departCity}} - {{data.info.destCity}}
                / 
                {{data.info.departDate}}
            </el-col>
            <el-col :span="4">
                <el-select size="mini" v-model="airport" placeholder="起飞机场" @change="handleAirport">
                    <el-option
                    v-for="(item,index) in data.options.airport" :key="index"
                    :label="item"
                    :value="item"
                    >
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-select size="mini" v-model="flightTimes"  placeholder="起飞时间" @change="handleFlightTimes">
                    <el-option
                    v-for="(item,index) in data.options.flightTimes" :key="index"
                    :label="`${item.from}:00 - ${item.to}:00`"
                    :value="`${item.from},${item.to}`"
                    >
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-select size="mini" v-model="company"  placeholder="航空公司" @change="handleCompany">
                    <el-option
                    v-for="(item,index) in data.options.company" :key="index"
                    :label="item"
                    :value="item">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-select size="mini" v-model="airSize" placeholder="机型" @change="handleAirSize">
                    <el-option
                    v-for="(item,index) in airSizeList" :key="index"
                    :label="item.name"
                    :value="item.size">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <div class="filter-cancel">
            筛选：
            <el-button 
                       type="primary" 
                       round 
                       plain 
                       size="mini" 
                       @click="handleFiltersCancel">
                撤销
    		</el-button>
        </div>

        <div>{{sizerCondition}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            airport: "",        // 机场
            flightTimes: "",    // 出发时间
            company: "",        // 航空公司
            airSize: "",        // 机型大小
            // 储存机型筛选选项
            airSizeList: [
                {name: '大',size : 'L'},
                {name: '中',size : 'M'},
                {name: '小',size : 'S'}
            ]
        }

    },
    props: {
          data : Object,
          default :{}
    },
    computed : {
         sizerCondition(){
         
          let newData = this.data.flights.filter(v => {
               let valid = true;
            //筛选机场
             if(this.airport && this.airport !== v.org_airport_name){
                  valid = false;
                  return;
             }
             
            //  筛选起飞时间
            if(this.flightTimes){
                const start = +this.flightTimes.split(',')[0];
                const end = +this.flightTimes.split(',')[1];
                const hour = Number(v.dep_time.split(':')[0]);
                if(hour < start || hour >= end){
                    valid = false;
                    return;
                }
            }

            //  筛选航空公司
            if(this.company && this.company !== v.airline_name){
                valid = false
                return;
            }

            // 筛选机型大小
            if(this.airSize && this.airSize !== v.plane_size){
                valid = false;
                return;
            }

            return valid;
         })
            // console.log(newData)
            this.$emit('getData',newData);
             return '';
         }
    },
    methods: {
        // 选择机场时候触发
        handleAirport(value){
            
        },

        // 选择出发时间时候触发
        handleFlightTimes(value){
            
        },

         // 选择航空公司时候触发
        handleCompany(value){
            
        },

         // 选择机型时候触发
        handleAirSize(value){
           
        },
        
        // 撤销条件时候触发
        handleFiltersCancel(){
            
        },
    }
}
</script>

<style scoped lang="less">
    .filters{
        margin-bottom:20px;
    }

    .filters-top{
        > div{
            /deep/ .el-select{
                margin-left:10px;
            }
        }
    }

    .filter-cancel{
        margin-top:10px;
    }
</style>