<template>
  <div>
    <h3>嵌套路由</h3>
    <router-view></router-view>
  </div>
</template>

<style lang='' scoped>

</style>
<script>
import RouterList from '@/components/test/router02/RouterList.vue'
import RouterDetail from '@/components/test/router02/RouterDetail.vue'

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
        
      };
    },

    components: {
        RouterList
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

    }

</script>