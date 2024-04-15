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
            const requestOptions = {
                method: "POST",
                mode: "no-cors",
                body:  `login=${login}&pass=${pass}`,
                headers: {
                    'Content-type': "application/x-www-form-urlencoded; charset=UTF-8",
                }, 
            };

            return fetch(url, requestOptions).then((response) => {
                return response.json( ) 
            }).then((data) => {
                this.user = data;
            });
            
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});