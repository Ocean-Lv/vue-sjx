<template>
  <div>
        <template v-for="item in routers">
            <!-- el-submenu: 有子集 -->
            <el-submenu :index="item.path" v-if="item.children" :key="item.path">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">{{item.meta.title}}</span>
                </template>

                <SideItem :routers="item.children">
                    <!-- <router-link :to="item.path" :key="item.path">
                        <el-menu-item index="1-4">
                            <span slot="title">{{item.meta.title}}</span>
                        </el-menu-item>
                    </router-link> -->
                </SideItem>
            </el-submenu>
            <!-- el-menu-item：无子集 -->
            <el-menu-item v-else :index="item.path" :key="item.path">
                <i class="el-icon-setting"></i>
                <span slot="title">{{item.meta.title}}</span>
            </el-menu-item>
        </template>
  </div>
</template>

<style lang='scss'>
.el-menu--collapse div .el-submenu>.el-submenu__title span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
}
.el-menu--collapse .el-submenu>.el-submenu__title .el-submenu__icon-arrow {
    display: none;
    &::before {
      display: none;
    }
}
</style>
<script>

  export default {
    name: 'SideItem',
    props:{
      routers: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

    }

</script>