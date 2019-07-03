<template>
    <li>
        <div @click="toggle">
            {{model.title}} 
            <span class="icon" v-if="getToggle">
                {{isShow?"-":"+"}}
            </span>
        </div>
        <ul v-show="isShow" v-if="getToggle">
            <Item v-for="model in model.children" :key="model.title" :model="model"></Item>
        </ul>
    </li>
</template> 

<script>
export default {
    name: 'Item',
    components:{},
    props:{
        model: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            isShow: false
        }
    },
    watch:{},
    computed:{
        getToggle() {
            return this.model.children && this.model.children.length;
        }
    },
    methods:{
        toggle() {
            this.isShow = !this.isShow;
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
ul {
    padding-left: 50px;
    // border: 1px solid gray;
}
</style>