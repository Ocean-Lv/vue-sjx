<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      unique-opened
    >
        <template v-for="item in getRouter">
            <!-- el-submenu: 有子集 -->
            <el-submenu index="1" v-if="item.children" :key="item.path">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">{{item.meta.title}}</span>
                </template>

                <template v-for="item_sub in item.children">
                    <router-link :to="item_sub.path" :key="item_sub.path">
                        <el-menu-item index="1-4">
                            <span slot="title">{{item_sub.meta.title}}</span>
                            <!-- <el-menu-item index="1-4-1">选项1</el-menu-item> -->
                        </el-menu-item>
                    </router-link>
                </template>


            </el-submenu>
            <!-- el-menu-item：无子集 -->
            <el-menu-item v-else index="4" :key="item.path">
                <i class="el-icon-setting"></i>
                <span slot="title">{{item.meta.title}}</span>
            </el-menu-item>
        </template>





        <!-- <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item> -->
    </el-menu>

    <!-- <div class="hello" v-for="item in getRouter" :key="item.path">
        <div v-if="item.children">{{item.meta.title}}</div>
    </div> -->
    <!-- {{getRouter}} -->
  </div>
</template>

<style lang='scss' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
<script>
export default {
  name: "",
  props: {
    props1: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isCollapse: true
    };
  },

  components: {},

  computed: {
    getRouter() {
        return this.$store.state.constRoutes;
    }
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
};
</script>