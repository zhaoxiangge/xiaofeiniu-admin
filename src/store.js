import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//多组件所共用的存储空间
export default new Vuex.Store({
  //公共数据读取方法：this.$stote.state.adminName
  //公共数据读取方法：this.$stote.state.golbalSettings
  state: {//当前数据状态，类似于组件对象的data属性
    adminName:"",        //当前登录管理员名
    globalSettings:{     //项目全局默认信息
      apiUrl:'http://127.0.0.1:8090'  //初始的默认值
    }
  },

  //公共数据的修改方法：this.$store.commit('setAdminName','boss')
  //公共数据的修改方法：this.$store.commit('setGlobalSettings',{.....})
  mutations: {//进化，控制数据的进化（修改state），类似于组件对象的methods---用mutations修改数据可以保证数据的“响应式”
    setAdminName(state,value){
      state.adminName = value
    },
    setGlobalSettings(state,value){
      state.globalSettings = value
    }
  },
  actions: {

  }
})
