// 其他组件拿数据
 export  const state = ()=> ({
    userInfo : {
        token : '',
        user :{}
    }
})

// 其他的组件储存进来（可传给上面）
export  const mutations = {
    getData(state,data){
      state.userInfo = data
    }
}

// 储存异步操作
export const actions= {
    // 登录功能
    login(store,data){
      return this.$axios({
            url : '/accounts/login',
            method : 'post',
            data
        }).then( res =>{
            store.commit('getData',res.data)
        })
    },
    
    // 获取验证码
    captcha(store,data){
      return  this.$axios({
            url : '/captchas',
            method : 'post',
            data :{
                tel : data
            }
        })
    },

    // 注册
    register(store,data){
     return  this.$axios({
        url : '/accounts/register',
        method : 'post',
        data
    }).then(res =>{
       //  console.log(res)
       store.commit('getData',res.data)
    })
    },

    //搜索机票
    getAirData(store,data){
    return   this.$axios({
            url : 'airs/city',
            params : {
                name : data
            }
        }).then(res =>{
            // console.log(res)
            const {data} = res.data;
            const newData =  data.map(v =>{
                 v.value = v.name.replace('市','');
                 return v;
             })
            //  console.log(newData)
            // this.goData = newData;
            // callback(newData)
            return newData;
        })
    }
}