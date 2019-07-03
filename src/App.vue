<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li>
            <router-link to="/showTest">父子组件，数据交互</router-link>
        </li>
        <li>
            <router-link to="/router">嵌套路由</router-link>
        </li>
          <li>
            <router-link to="/router/list">L 路由list</router-link>
        </li>
        <li>
            <router-link to="/router/detail/2">L 路由详情</router-link>
        </li>
        <li>
            <router-link to="/showSlots">插槽</router-link>
        </li>
        <li>
            <router-link to="/showNodes">递归组件</router-link>
        </li>
        <li>
            <router-link to="/tree">树</router-link>
        </li>
        <li>
            <router-link to="/validate">校验插件</router-link>
        </li>
      </ul>
      <br />
      <br />
      <hr>

      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div id="show_space">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  width: 15%;
  height: 100%;
  float: left;
  border-right: 1px solid gray;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#show_space {
  float: right;
  width: 80%;
}
li {
  margin-bottom: 10px;
}
</style>
