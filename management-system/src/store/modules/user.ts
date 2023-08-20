//创建用户相关小仓库
import  {defineStore} from 'pinia';
import { reqLogin } from '@/api/user/index'
import { loginForm } from "@/api/user/type";
let useUserStore = defineStore('User',{ 
    
    state:()=>{
        return {
            token:localStorage.getItem("TOKEN"),
        }
    },
    actions:{
        async userLogin(data:loginForm){

            let result:any = await reqLogin(data);
            if (result.code == 200) {
                this.token = result.data.token;
                //本地存储
                localStorage.setItem("TOKEN",result.data.token);
                return 'ok';
            }else{            
                return Promise.reject(new Error(result.data.message))
            }
            
        }
    },
    getters:{

    }
})
export default useUserStore;
