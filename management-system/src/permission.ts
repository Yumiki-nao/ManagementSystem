//路由鉴权
import router from '@/router';
import nprogress  from 'nprogress';
import "nprogress/nprogress.css";
import pinia from './store';
import useUserStore from './store/modules/user';
import setting from './setting';

nprogress.configure({showSpinner:false})
let userStore = useUserStore(pinia);
//全局前置守卫
router.beforeEach((to,_from,next) => {
    nprogress.start()
    if(userStore.token){
        //登录状态，除了/login都可以访问
        if(to.path === '/login'){
            document.title=`${setting.title}-首页`;
            next({path:'/'});
        }else{
            document.title=`${setting.title}-${to.meta.title }`;
            next();
        }
    }else{
        //未登录状态，除了login都不可以访问
        if(to.path === '/login'){
            document.title=`${setting.title}-登录`;
            next();
        }else{
            document.title=`${setting.title}-登录`;
            next({path:'/login'});
        }
    }
    
    
})
//全局后置守卫
router.afterEach(()=>{
    nprogress.done()
})