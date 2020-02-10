
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