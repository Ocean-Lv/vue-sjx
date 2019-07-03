<template>
  <div class="level">
    index：show test file

    <ParentOne />
  </div>
</template>

<style lang='scss'>
div.level {
  margin: 0 auto;
  padding: 30px;
  margin: 30px 10px;
  border: 1px solid green;
}
</style>
<script>
  import ParentOne from '@/components/test/childParent01/ParentOne'



  export default {
    name:'',
    provide: {    //父组件注入，子组件可拿到该属性(provide/inject)
      fatherAttr: 'China-TianJin'
    },
    props:[''],
      data () {
        return {
          
        };
      },
    components: {
      ParentOne
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

    }

</script>