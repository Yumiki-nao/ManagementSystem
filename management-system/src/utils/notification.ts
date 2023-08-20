import { ElNotification } from 'element-plus'
let message = (type:'success'|'error',msg:string) => {
    if(type === 'success'){
        ElNotification({
            type:'success',
            message:msg
        })
    }else{
        ElNotification({
            type:'error',
            message:msg
        })
    }
}
export default message