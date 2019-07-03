// import Vue from 'vue';

// export default function create(Component, props) {
//     // 先创建实例
//     const vm = new Vue({
//         render(h) {
//             // h就是createElement，它返回VNode
//             return h(Component, {props})
//         }
//     }).$mount();

//     // 手动挂载
//     document.body.appendChild(vm.$el);

//     // 销毁方法
//     const comp = vm.$children[0];
//     comp.remove = function() {
//         document.body.removeChild(vm.$el);
//         vm.$destroy();
//     }
//     return comp;
// };


//将文件后缀名改为.ts,执行命令  $ tsc green.ts
//替换 'exports.__esModule = true;' & 'exports.__esModule = true';
"use strict";
var vue_1 = require("vue");
export default function create(Component:any, props: any) {
    // 先创建实例
    var vm = new vue_1["default"]({
        render: function (h: (arg0: any, arg1: { props: any; }) => void) {
            // h就是createElement，它返回VNode
            return h(Component, { props: props });
        }
    }).$mount();
    // 手动挂载
    document.body.appendChild(vm.$el);
    // 销毁方法
    var comp = vm.$children[0];
    comp.remove = function () {
        document.body.removeChild(vm.$el);
        vm.$destroy();
    };
    return comp;
};

