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
            console.log('this is useAuthStore');
            console.log(login, pass);

            const url = `https://mtrainer.khomike.ru/login`;
            const body = {
                login: login,
                pass: pass,
            }
            const requestOptions = {
                method: "POST",
                body: JSON.stringify({
                    login: login,
                    pass: pass,
                }),
                mode: 'no-cors',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }, 
            };


            return fetch(url, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            });
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});