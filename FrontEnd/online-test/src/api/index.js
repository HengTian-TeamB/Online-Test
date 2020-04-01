/**
 * 主页相关api
 * 所有api 命名方式 _functionName
 */
import {
    fetch,
    post,
    patch,
    put,
    del
} from './public.js'

// 登陆
export const _userLogin = (data) => {
    return post('/login/user', data)
}