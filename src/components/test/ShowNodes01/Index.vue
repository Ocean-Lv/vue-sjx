<template>
    <div>
        <Node :model="data" />
    </div>
</template>

<script>
import Node from '@/components/test/ShowNodes01/Node'

export default {
    name: 'showNodes',
    components:{
        Node
    },
    props:{},
    data(){
        return {
            data: {
                id: "1",
                title: "递归组件",
                children: [
                    { 
                        id: "1-1", 
                        title: "使用方法",
                        children: [
                            { 
                                id: "1-1-1", 
                                title: "使用场景"
                            },
                            { id: "1-1-2", title: "注意说明" }
                        ]
                    },
                    { id: "1-2", title: "注意事项" }
                ]
            }
        }
    },
    watch:{},
    computed:{},
    methods:{},
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