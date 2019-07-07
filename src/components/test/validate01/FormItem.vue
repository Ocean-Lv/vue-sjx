<template>
  <div>
    <label v-if="label" for="">{{label}}</label>
    <slot></slot>
    <p v-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'

export default {
    inject: ['form'],
    name: '',
    components:{},
    props:{
      label: {
        type:　String,
        default: ''
      },
      prop: {
        type: String
      }
    },
    data(){
        return {
          errorMessage:''
        }
    },
    watch:{},
    computed:{},
    methods:{
      validate() {
        //做校验
        const value = this.form.model[this.prop];
        const rules = this.form.rules[this.prop];

        //npm i async-validator -S
        const desc = {[this.prop]: rules};
        const schema = new Schema(desc);
        //return 的是校验结果的promise对象
        return schema.validate({[this.prop]: value}, errors => {
          if(errors) {
            this.errorMessage = errors[0].message;
          } else {
            this.errorMessage = ''
          }
        })
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
      
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.$on('validate', ()=> {
        this.validate;
      })
    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang="scss" scoped>

</style>