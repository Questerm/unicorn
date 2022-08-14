import { defineStore } from 'pinia'
export default defineStore('mystore', {
    //开启数据持久化
    persist: {
        enabled: true
    },
    state: () => {
        return {
            elDom: '',
            els: [],
            elsIdx: new Array(2),//当前
            rectStyle: { style: {} }
        }
    },
    getters: {},
    actions: {}
})