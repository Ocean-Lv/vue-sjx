import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    place: '天津'
  },
  // 必须是同步函数（不要在此操作异步数据）
  mutations: {
    changeStorePlace(state, new_place="上海") {
      state.place = new_place;
    }
  },
  // 获取值，派生属性，从state派生出新状态，类似计算属性
  getters: {
    aboutPlace (state) {
      return `该生学籍变更为：${state.place}`;
    }
  },
  // 调用异步 API 和分发多重 mutation
  actions: {
    changeStoreFormAction ({ commit, dispatch }) {
      setTimeout(() => {
        commit("changeStorePlace", "actionPlace");     //调用mutations方法
      }, 1000);
    }
  }
})
