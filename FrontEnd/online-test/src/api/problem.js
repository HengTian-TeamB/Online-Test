/**
 * 出题用户相关api
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

// 题库条件查找
export const _getProblem = (data) => {
    return post('/question/condition', data)
}
// 题库全局查找
export const _getAllPro = (data) => {
    return post('question/all', data)
}
// 获取所有标签 /label/all
export const _getLabel = (param) => {
    return fetch('/label/all', param)
}
// 增加题目
export const _addPro = (data) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };
    return post('/question/add', data, config)
}