//创建用户相关小仓库
import  {defineStore} from 'pinia';
import { reqLogin } from '@/api/user/index'
import { loginForm } from "@/api/user/type";
let useUserStore = defineStore('User',{ 
    
    state:()=>{
        return {

        }
    },
    actions:{
        userLogin(data:loginForm){
            console.log(123);
            
            console.log(data);
            
            //  reqLogin(data)
        }
    },
    getters:{

    }
})
export default useUserStore;
