import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
    id: 'auth', 
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null,
    }),
    actions: {
        async login(login, pass) {
            const url = `https://mtrainer.khomike.ru/login`;
            const body = JSON.stringify({
                login: login,
                pass: pass,
                remember: remember,
            });
            const requestOptions = {
                method: "POST",
                body:  body,
                headers: {
                    'Content-type': 'application/json;charset=utf-8',
                }, 
            };

            return fetch(url, requestOptions)
                .then(response => response.json())
                .then(result => console.log(result) /* обрабатываем результат */);
            
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});