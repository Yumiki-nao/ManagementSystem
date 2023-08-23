//引入项目的全局组件
import SvgIcon from "./SvgIcon.vue";
import type { App, Component } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//全局对象
const allGlobalComponents: { [name: string]: Component } = {SvgIcon};
export default {
    install(app:App) {
        Object.keys(allGlobalComponents).forEach(key => {
            app.component(key,allGlobalComponents[key]);
        })
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
          }
    }
}