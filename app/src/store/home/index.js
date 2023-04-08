// home模块的小仓库
import { reqCategoryList } from "@/api";
const state = {
    categoryList:[],
};
const mutations = {
    CATEGORYLIST(state,categorylist) {
        state.categoryList = categorylist;
    }
};
const actions = {
    async categoryList({commit}) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit('CATEGORYLIST',result.data)
        }

    }
};
const getters = {};
export default {
    state,mutations,actions,getters
}
