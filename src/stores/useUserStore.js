import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";
import { useConfigStore } from "./useConfigStore";
import { router } from "@/router";

export const useUserStore = defineStore("userStore", () => {
    const user = ref(JSON.parse(localStorage.getItem("user")));

    const login = async (login, pass) => {
        const configStore = useConfigStore();
        const url = `${configStore.URL}login`;
        const body = JSON.stringify({
            login: login,
            pass: pass,
        });
        const requestOptions = {
            method: "POST",
            body: body,
            headers: {
                "Content-type": "application/json;charset=utf-8",
            },
        };

        return fetch(url, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                user.value = result;
                router.push({ name: 'home' });

            });
    };

    const reg = async (login, pass) => {
        const configStore = useConfigStore();
        const url = `${configStore.URL}reg`;
        const body = JSON.stringify({
            login: login,
            pass: pass,
        });
        const requestOptions = {
            method: "POST",
            body: body,
            headers: {
                "Content-type": "application/json;charset=utf-8",
            },
        };

        return fetch(url, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                user.value = result;
                router.push({ name: 'home' });

            });
    };

    const logout = () => {
        user.value = null;
    };

    watch (
        () => user.value,
        (newValue) => {
            if (newValue) {
                localStorage.setItem("user", JSON.stringify(newValue));
            } else {
                localStorage.removeItem("user");
            }
        }, 
        { deep: true }
    );

    return { 
        user,
        login,
        reg,
        logout
    };
});
