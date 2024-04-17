import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useConfigStore = defineStore( 'configStore', () => {
    const URL = "https://mtrainer.khomike.ru/";

    return { URL };
} )