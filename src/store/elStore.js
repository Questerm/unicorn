import { defineStore } from 'pinia'
export default defineStore('mystore', {
    //开启数据持久化
    persist: {
        enabled: true
    },
    state: () => {
        return {
            els: [],
            elsIdx: new Array(2) //当前
        }
    },
    getters: {},
    actions: {}
})