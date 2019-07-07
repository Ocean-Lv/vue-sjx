<template>
    <div>
        <input type="text" :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    name: '',
    components:{},
    props:{
        value: {
            type: String,
            default:''
        }
    },
    data(){
        return {
            
        }
    },
    watch:{},
    computed:{},
    methods:{
        onInput(e) {
            this.$emit('input', e.target.value);
            this.$parent.$emit('validate');
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
      
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      
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