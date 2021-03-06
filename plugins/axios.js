import {Message} from 'element-ui'

// 网页启动时执行该文件
export default (data) =>{
    // 拦截请求的错误
    data.$axios.onError(err =>{
        const {statusCode,message} = err.response.data;

        // 判断如果是400，展示错误信息
        if(statusCode === 400){
            Message.error(message)
        }
    })
}