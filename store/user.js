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
    login(store,data){
      return this.$axios({
            url : '/accounts/login',
            method : 'post',
            data
        }).then( res =>{
            store.commit('getData',res.data)
        })
    }
}