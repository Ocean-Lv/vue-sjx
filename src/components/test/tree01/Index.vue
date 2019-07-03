<template>
    <div>
        <ul>
            <Item :model="treeData" />
        </ul>
    </div>
    
</template>

<script>
import Item from '@/components/test/tree01/Item'

export default {
    name: 'Tree',
    components:{
        Item
    },
    props:{},
    data(){
        return {
              treeData: {
                title: "Web全栈架构师",
                children: [
                    {
                        title: "Java架构师"
                    },
                    {
                        title: "JS高级",
                        children: [
                        {
                            title: "ES6"
                        },
                        {
                            title: "动效"
                        }
                        ]
                    },
                    {
                        title: "Web全栈",
                        children: [
                        {
                            title: "Vue训练营",
                            expand: true,
                            children: [
                            {
                                title: "组件化"
                            },
                            {
                                title: "源码"
                            },
                            {
                                title: "docker部署"
                            }
                            ]
                        },
                        {
                            title: "React",
                            children: [
                            {
                                title: "JSX"
                            },
                            {
                                title: "虚拟DOM"
                            }
                            ]
                        },
                        {
                            title: "Node"
                        }
                        ]
                    }
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
* {
    text-align: left;
}
</style>