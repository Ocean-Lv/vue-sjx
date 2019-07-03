<template>
  <div class="level">
    <p>我是一个父组件  get the child:</p>
    <p>是否成年：{{result}}</p>
    <p>得到子组件01 性别：{{per01_sex}}</p>
    <div class="common_data">
      <p class="import">通过vuex-store取变量</p>
      <p>学籍：{{$store.state.place}}</p>
      <p>computed属性获得：学籍={{getStore}}</p>
      <button class="parent" @click="changePlace">修改学籍</button>
      <button class="parent" @click="changePlaceAjax">异步-修改学籍</button>
    </div>
    <p>{{$store.getters.aboutPlace}}</p>

    <ChildOne :age="age" @getResult="getResult" ref="par01" />
    <ChildTwo />

  </div>
</template>

<style lang='scss' >
.common_data {
  border: 1px solid red;
  background: rgb(223, 223, 223);
}
p.import {
  font-weight: bold;
}
button.parent {
  padding: 5px;
  margin: 5px auto;
}
</style>
<script>
    import ChildOne from '@/components/test/childParent01/ChildOne'
    import ChildTwo from '@/components/test/childParent01/ChildTwo'

    export default {
        name:'ParentOne',
        props:[''],
        data () {
            return {
              age: 10,
              result: '',
              per01_sex: null,
              place: '',
            };
        },

        components: {
            ChildOne,
            ChildTwo
        },

        computed: {
          getStore () {
            return this.$store.state.place;
          }
        },

        beforeMount() {},

        mounted() {
            this.per01_sex = this.$refs.par01.sex;  //从被定义的子组件，取值
        },

        methods: {
          getResult (age) {
            this.result = age >= 18?"yes":"no";
          },

          //修改$store 用 commit
          changePlace() {
            // this.$store.commit("changeStorePlace", "北京");
            this.$store.commit("changeStorePlace");
          },

          changePlaceAjax () {
            this.$store.dispatch("changeStoreFormAction");
          }
        },

        watch: {}

    }

</script>