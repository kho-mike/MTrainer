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
                }, // authHeader(url),
                // referrer: "",
                // redirect: 'follow',
            };
            // if (body) {
            //     requestOptions.headers['Content-Type'] = 'application/json';
            //     requestOptions.body = JSON.stringify(body);
            // }


            return fetch(url, requestOptions).then((response) => {
                console.log('this is then in fetch function');

                return response.json()


                return response.text().then(text => {
                    console.log('this is then in then in fetch function');

                    const data = text && JSON.parse(text);
            
                    return data;
                });
            });
            






            
            // const url = `https://mtrainer.khomike.re/login`;
            // return (url, body) => {
            //     const requestOptions = {
            //         method: "POST",
            //         headers: {} // authHeader(url)
            //     };
            //     if (body) {
            //         requestOptions.headers['Content-Type'] = 'application/json';
            //         requestOptions.body = JSON.stringify(body);
            //     }
            //     return fetch(url, requestOptions).then((response) => {
            //         return response.text().then(text => {
            //             const data = text && JSON.parse(text);
    
            //             console.log(data);
                        
            //             if (!response.ok) {
            //                 const { user, logout } = useAuthStore();
            //                 if ([401, 403].includes(response.status) && user) {
            //                     // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            //                     logout();
            //                 }
                
            //                 const error = (data && data.message) || response.statusText;
            //                 return Promise.reject(error);
            //             }
                
            //             return data;
            //         });
            //     });
            // }


            // console.log('this is useAuthStore');
            // console.log(login, pass);
            // // const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { login, pass });

            // fetch(url, {
            //     method:"POST",
            //     // headers: authHeader(url)
            // }).then((response) => {
            //     return response.text().then(text => {
            //         const data = text && JSON.parse(text);

            //         console.log(data);
                    
            //         if (!response.ok) {
            //             const { user, logout } = useAuthStore();
            //             if ([401, 403].includes(response.status) && user) {
            //                 // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            //                 logout();
            //             }
            
            //             const error = (data && data.message) || response.statusText;
            //             return Promise.reject(error);
            //         }
            
            //         return data;
            //     });
            // });

            // update pinia state
            // this.user = user;

            // store user details and jwt in local storage to keep user logged in between page refreshes
            // localStorage.setItem('user', JSON.stringify(user));

            // redirect to previous url or default to home page
            // router.push(this.returnUrl || '/');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});