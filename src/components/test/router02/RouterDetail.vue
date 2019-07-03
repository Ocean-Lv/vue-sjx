<template>
  <div>
    <div class="detail_block">
        <h3>router detail</h3>
        <br>
        <div>get page ID: <span class="import">{{$route.params.id}}</span></div>
        <div>通过属性，取id：<span class="import">{{id}}</span></div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.detail_block {
  height: 300px;
  margin: 20px 20px auto 20px;
  padding: 10px;
  border: 1px solid green;
}
.import {
    color: red;
    font-weight: bold;
}
</style>
<script>

  export default {
    name: '',
    props:{
      id: {
        type: String,
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

    mounted() {

    },

    methods: {},

    watch: {}

    }

</script>