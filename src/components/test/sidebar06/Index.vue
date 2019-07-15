<template>
  <div>
    <div id="sidebar">
      <Sidebar></Sidebar>
    </div>
    <div id="main-container">
      <router-view />
    </div>
  </div>
</template>

<style lang='scss' scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  #sidebar {
    float: left;
    width: 250px;
  }
  #main-container {
    border: 1px solid red;
    float: left;
    width: 600px;
    height: 400px;
  }
</style>
<script>
  import Sidebar from '@/components/test/sidebar06/Sidebar.vue'

  export default {
    name: '',
    props:{
      props1: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        isCollapse: true
      };
    },

    components: {
      Sidebar
    },

    computed: {
    },

    beforeMount() {},

    mounted() {},

    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },

    watch: {}

    }

</script>