import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useConstsStore = defineStore({
    id: 'consts', 
    state: () => ({
        SITE_URL: "https://mtrainer.khomike.ru/",
    })
});