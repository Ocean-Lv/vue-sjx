<template>
 <div>
    <slot></slot>
 </div>
</template>

<script>
export default {
    provide () {
        return {
            form: this
        }
    },
    name: '',
    components:{},
    props:{
        model: { 
            type: Object,
            required: true
        },
        rules: { 
            type: Object
        }
    },
    data(){
        return {
            
        }
    },
    watch:{},
    computed:{
    },
    methods:{
        validate (cb) { 
            const tasks =  this.$children
                .filter(item => item.prop)
                .map(item => item.validate());

            //所有任务都通过才算校验成功
            Promise.all(tasks)
                .then(() => cb(true))
                .catch(() => cb(false))
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
      
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      
    },
    //生命周期 - 创建之前
    beforeCreate() {
      
    },
    //生命周期 - 挂载之前
    beforeMount() {
      
    },
    //生命周期 - 更新之前
    beforeUpdate() {
      
    },
    //生命周期 - 更新之后
    updated() {
      
    },
    //生命周期 - 销毁之前
    beforeDestroy() {
      
    },
    //生命周期 - 销毁完成
    destroyed() {
      
    },
    //如果页面有keep-alive缓存功能，这个函数会触发
    activated() {
      
    },
}
</script>

<style lang="scss" scoped>

</style>