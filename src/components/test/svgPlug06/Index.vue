<template>
  <div>
    svg show
    <svg class="icon-small"><use xlink:href="#icon-QQ"></use></svg>
    <svg><use xlink:href="#icon-weixin"></use></svg>

    <svg-icon icon-class="QQ"></svg-icon>
  </div>
</template>

<style lang='scss' scoped>
.icon-small {
  width: 5rem;
  height: 5rem;
}
</style>
<script>
  // import "@/icons/svg/QQ.svg"
  // import "@/icons/svg/weixin.svg"


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

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

    }

</script>