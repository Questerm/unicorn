import { defineStore } from 'pinia'
export default defineStore('mystore', {
    state: () => {
        return {
            els: [],
            elsIdx: new Array(2)//当前
        }
    },
    getters: {},
    actions: {}
})