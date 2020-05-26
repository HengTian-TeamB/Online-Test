/**
 * 答题用户相关api
 * 所有api 命名方式 _functionName
 */
import {
    fetch,
    post,
    patch,
    put,
    del
} from './public.js'

// 查看所有试卷名
export const _getMyPap = (param) => {
    return fetch('/exampaper/getAllPapersNameByStudent', param)
}