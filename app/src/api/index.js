// 所有的api接口进行统一管理
import requests from "./request";

// 三级联动接口
// axios发请求得到的是一个promise对象
export const reqCategoryList = ()=> requests({url:'/product/getBaseCategoryList',method:'get'})
