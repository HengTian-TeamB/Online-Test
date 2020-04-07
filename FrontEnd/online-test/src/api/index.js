/**
 * 主页相关api
 * home register
 * 所有api 命名方式 _functionName
 */
import {
    fetch,
    post,
    patch,
    put,
    del
} from './public.js'

// 手机号+密码登陆
export const _userLogin = (data) => {
    return post('/user/login', data)
}
// 手机号+验证码登录
export const _userLoginByCode = (data) =>{
    return post('/user/loginByPhone', data)
}
// 手机号验证
export const _vfPhone = (data) =>{
    return post('/user/vfphone', data)
}
// 短信验证
export const _getInfo = (data) =>{
    return post('/user/getCode', data)
}
// 手机号注册
export const _register = (data) =>{
    return post('/user/register', data)
}
