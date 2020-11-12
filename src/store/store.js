import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state:{
    users:[
      {name:'Toya Kasai',age:22,imageUrl:'/img/coutinho.jpeg'},
      {name:'Kenjiro Kasaguchi',age:22,imageUrl:'/img/mbp.jpeg'},
      {name:'Takumi Hashimoto',age:21,imageUrl:'/img/kante.jpeg'},
    ],
    loginUser:{},
  },
  mutations:{
    login(state,user){
      state.loginUser = user
    }
  },
  actions:{
  }
})