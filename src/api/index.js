import { get } from '../utils/axios'

// 获取文章内容
export const articleList = params => get('api/articleList', params) 