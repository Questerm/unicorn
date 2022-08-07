import { defineStore } from 'pinia'
export default defineStore('mystore', {
    state: () => {
        return {
            els: [],
            elsIdx: []//当前
        }
    },
    getters: {},
    actions: {}
})