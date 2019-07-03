<template>
  <div class="level">
    <p>1.我是一个子组件 first Test child</p>
    <p> 得到父组件年龄：{{age}} 岁;</p>
    <p> 性别： {{sex}}</p>
    <p>出生地：{{fatherAttr}}</p>
    <div class="common_data">
      <p class="import">通过vuex-store取变量</p>
      <p>学籍：{{$store.state.place}}</p>
    </div>
    <div>
      <button @click="checkAge">check age</button>
    </div>
  </div>
</template>

<style lang='scss' scoped>
 div {
   padding-top: 20px;
 }
</style>
<script>
  export default {
    name:'ChildOne',
    inject: ['fatherAttr'],
    props: {
      age: {
        type: Number,
        default: 0
      }

    },
    data () {
      return {
        sex: "女",
        place: ''
      };
    },

    components: {},

    computed: {

    },

    beforeMount() {},

    mounted() {},

    methods: {
      checkAge () {
        //check 是否符符合标准
        this.$emit("getResult", this.age);            //给父组件传值
        let info = {
          sex: this.sex,
          age: this.age
        }
        this.$parent.$emit("sendValues", info);   //给兄弟组件传值
      },
    },

    watch: {}

  }

</script>