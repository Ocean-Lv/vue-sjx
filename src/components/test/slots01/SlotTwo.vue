<template>
    <div>
        <p><button>添加</button></p>
        <p><button>删除</button></p>
        <p><button>修改</button></p>
        <p><button>查询</button></p>

        <p><button><slot></slot></button></p>
        <p><button><slot name="content"></slot></button></p>
        <p><button><slot name="getSex" :sex="sex" :age="age"></slot></button></p>
        <!-- :sex，输出obj的key值； "sex",子组件data值 -->
    </div>
</template>

<script>
export default {
    name: '',
    components:{},
    props:{},
    data(){
        return {
            sex: 'userSex',
            age: 10
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
    p {
        margin-top: 10px;
    }
</style>