<template>
    <div>
        <h1>hello slots</h1>
        <br />
        <SlotOne>
            默认插槽
        </SlotOne>
        <SlotTwo>
            <template v-slot:default>插槽2-默认插槽</template>
            <template v-slot:content>插槽2-content插槽--{{name}}</template>  
            <template v-slot:getSex="obj">
                来自子组件的变量-{{obj.sex}}-{{obj.age}}岁
                <!-- getSex，插槽名称；obj，子组件传回的obj -->
            </template>    
        </SlotTwo>

        <hr>
        <div class="alertShow">
            <button @click="getAlert">调用alert框</button>
        </div>
    </div>
</template>

<script>
import SlotOne from '@/components/test/slots01/SlotOne'
import SlotTwo from '@/components/test/slots01/SlotTwo'

import Notice from '@/components/test/notice01/Notice'



export default {
    name: 'showSlots',
    components:{
        SlotOne, SlotTwo, Notice
    },
    props:{},
    data(){
        return {
            name: 'peter'
        }
    },
    watch:{},
    computed:{},
    methods:{
        getAlert() {
            const notice = this.$create(Notice, {
                title: "社会你杨哥喊你来搬砖",
                message:"请求登录!" ,
                duration: 1000
                });
            notice.show();
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
.alertShow {
    margin-top: 20px;
}
</style>