import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//login 后，axios获取
const constRoutes = [
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
    hidden: true, // 导航菜单忽略该项
    meta: {title: 'login', icon:'login'},
  },
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
    redirect: "/",
    meta: {title: '首页', icon:'qq'},
    children: [
      {
        path: "about",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/About.vue"),
        name: "about",
        meta: { 
            title: "About", // 导航菜单项标题
            icon: "qq" // 导航菜单项图标
        }
      },
      {
        path: "mua",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
        name: "mua",
        meta: { 
            title: "波一个", // 导航菜单项标题
            icon: "wx" // 导航菜单项图标
        }
      }
    ]
  }
];

export default new Vuex.Store({
  state: {
    place: '天津',
    constRoutes: constRoutes
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
