
 export  const state = ()=> ({
    userInfo : {
        token : '',
        user :{}
    }
})

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