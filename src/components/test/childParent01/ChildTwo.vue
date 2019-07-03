<template>
  <div class="level">
    <p>
        2.我是第二个子组件
    </p>
    <p>
        取得兄弟组件的值：
    </p>
    <p>年龄：{{age}}</p>
    <p>性别：{{sex}}</p>
    <div class="common_data">
      <p class="import">通过vuex-store取变量</p>
      <p>学籍：{{$store.state.place}}</p>
    </div>
  </div>
</template>

<style lang='scss' scoped>
    div {
        margin-top: 20px !important;
    }
</style>
<script>

  export default {
    name:'ChildTow',
    props:{

    },
    data () {
      return {
        age: null,
        sex: null,
        place: ''
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {
        this.$parent.$on("sendValues", info => {
          this.age = info.age;
          this.sex = info.sex;
        })
    },

    methods: {},

    watch: {}

    }

</script>