import Vue from 'vue'
import SvgIcon from '@/components/test/svgPlug06/SvgIcon.vue'

// 全局引入SvgIcon组件
Vue.component('svg-icon', SvgIcon)

//require.context 获取一个特定的上下文,主要用来实现自动化导入模块
const req = require.context('./svg', false, /\.svg$/);

//keys = ['qq.svg', 'weixin.svg']
//一个文件夹下面的所有文件，或者引入能匹配一个正则表达式的所有文件,参考require.context
//取得[Module， Module] 数组
req.keys().map(req);
console.log(req.keys().map(req))