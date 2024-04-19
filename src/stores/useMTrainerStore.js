import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'


/*
Умножение (multiplication);
Деление (division).
Для описания формул умножения и деления пригодится следующая лексика:

multiply (by) – умножать (на);
multiplicanda - множимое;
multiplier - множитель;
product - произведение;
divide (by) – делить (на);
dividend - делимое;
divisor - делитель;
quotient - частное.
*/

export const useMTrainerStore = defineStore( 'MTrainer', () => {

    const signs = {
        multiplication: "x",
        division: ":",
        composition: "и",
    }

    labels = {
        multiplication: "Умножение",
        division: "Деление",
        composition: "Состав числа",
    }

    const examples = [
        {
            id: 1,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 2,
            second: 2,
            result: 4,
            level: 1,
        },
        {
            id: 2,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 2,
            second: 3,
            result: 6,
            level: 1,
        },

        {
            id: 3,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 2,
            second: 4,
            result: 8,
            level: 1,
        },

        {
            id: 4,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 2,
            second: 5,
            result: 10,
            level: 1,
        },

        {
            id: 5,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 2,
            second: 6,
            result: 12,
            level: 1,
        },

        {
            id: 6,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 2,
            second: 7,
            result: 14,
            level: 1,
        },

        {
            id: 7,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 2,
            second: 8,
            result: 16,
            level: 1,
        },

        {
            id: 8,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 2,
            second: 9,
            result: 18,
            level: 1,
        },

        {
            id: 9,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 3,
            second: 2,
            result: 6,
            level: 1,
        },

        {
            id: 10,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 3,
            second: 3,
            result: 9,
            level: 1,
        },

        {
            id: 11,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 3,
            second: 4,
            result: 12,
            level: 1,
        },

        {
            id: 12,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 3,
            second: 5,
            result: 15,
            level: 1,
        },

        {
            id: 13,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 3,
            second: 6,
            result: 18,
            level: 1,
        },

        {
            id: 14,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 3,
            second: 7,
            result: 21,
            level: 1,
        },

        {
            id: 15,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 3,
            second: 8,
            result: 24,
            level: 1,
        },

        {
            id: 16,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 3,
            second: 9,
            result: 27,
            level: 1,
        },

        {
            id: 17,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 4,
            second: 2,
            result: 8,
            level: 1,
        },

        {
            id: 18,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 4,
            second: 3,
            result: 12,
            level: 1,
        },

        {
            id: 19,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 4,
            second: 4,
            result: 16,
            level: 1,
        },

        {
            id: 20,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 4,
            second: 5,
            result: 20,
            level: 1,
        },

        {
            id: 20,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 4,
            second: 6,
            result: 24,
            level: 1,
        },

        {
            id: 21,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 4,
            second: 8,
            result: 32,
            level: 1,
        },

        {
            id: 22,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 4,
            second: 9,
            result: 36,
            level: 1,
        },

        {
            id: 23,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 5,
            second: 2,
            result: 10,
            level: 1,
        },

        {
            id: 23,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 5,
            second: 3,
            result: 15,
            level: 1,
        },

        {
            id: 17,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 4,
            second: 2,
            result: 8,
            level: 1,
        },


































        {
            id: 3,
            name: labels["division"],
            type: "division",
            sign: signs["division"],
            first: 6,
            second: 2,
            result: 3,
            level: 1,
        },

        {
            id: 4,
            name: labels["division"],
            type: "division",
            sign: signs["division"],
            first: 6,
            second: 3,
            result: 2,
            level: 1,
        },

    ]
    const user = ref(null);

    return { 
        signs, 
        examples, 
    };
} )