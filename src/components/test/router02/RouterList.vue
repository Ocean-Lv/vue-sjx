<template>
  <div>
    <h3>router list page</h3>
    <button @click="goDetail">routerDetail</button>
  </div>
</template>

<style lang='scss' scoped>
h3 {
  height: 300px;
  margin: 20px 20px auto 20px;
  padding: 10px;
  border: 1px solid green;
}
</style>
<script>

  export default {
    name: 'RouterList',
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

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      goDetail() {
        this.$router.push('/router/detail/2')
      }
    },

    watch: {}

    }

</script>