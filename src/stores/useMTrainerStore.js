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




/**
 * Функции:
 * 
 * 1. Сформировать массив примеров по заданным параметрам:
 *   - оператор
 *   - сложность примеров 
 */

export const useMTrainerStore = defineStore( 'MTrainer', () => {

    const getExamples = function(operation, operand, count, level){
        //return [ operation, operand, count, level ];

        return examples.filter( elem => elem.type === "multiplication" && elem.first === 2 );
    }

    const signs = {
        multiplication: "x",
        division: ":",
        composition: "и",
    }

    const labels = {
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
            id: 24,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 5,
            second: 3,
            result: 15,
            level: 1,
        },

        {
            id: 25,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 5,
            second: 4,
            result: 20,
            level: 1,
        },

        {
            id: 26,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 5,
            second: 5,
            result: 25,
            level: 1,
        },
        {
            id: 27,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 5,
            second: 6,
            result: 30,
            level: 1,
        },

        {
            id: 28,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 5,
            second: 7,
            result: 35,
            level: 1,
        },

        {
            id: 29,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 5,
            second: 8,
            result: 40,
            level: 1,
        },

        {
            id: 30,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 5,
            second: 9,
            result: 45,
            level: 1,
        },
        {
            id: 31,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 6,
            second: 2,
            result: 12,
            level: 1,
        },

        {
            id: 32,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 6,
            second: 3,
            result: 18,
            level: 1,
        },

        {
            id: 33,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 6,
            second: 4,
            result: 24,
            level: 1,
        },

        {
            id: 34,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 6,
            second: 5,
            result: 30,
            level: 1,
        },

        {
            id: 35,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 6,
            second: 6,
            result: 36,
            level: 1,
        },

        {
            id: 36,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 6,
            second: 7,
            result: 42,
            level: 1,
        },

        {
            id: 37,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 6,
            second: 8,
            result: 48,
            level: 1,
        },

        {
            id: 38,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 6,
            second: 9,
            result: 54,
            level: 1,
        },

        {
            id: 39,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 7,
            second: 2,
            result: 14,
            level: 1,
        },

        {
            id: 40,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 7,
            second: 3,
            result: 21,
            level: 1,
        },

        {
            id: 41,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 7,
            second: 4,
            result: 28,
            level: 1,
        },

        {
            id: 42,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 7,
            second: 5,
            result: 35,
            level: 1,
        },

        {
            id: 43,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 7,
            second: 6,
            result: 42,
            level: 1,
        },

        {
            id: 44,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 7,
            second: 7,
            result: 49,
            level: 1,
        },
        {
            id: 45,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 7,
            second: 8,
            result: 56,
            level: 1,
        },

        {
            id: 46,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 7,
            second: 9,
            result: 63,
            level: 1,
        },

        {
            id: 47,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 8,
            second: 2,
            result: 16,
            level: 1,
        },

        {
            id: 48,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 8,
            second: 3,
            result: 24,
            level: 1,
        },

        {
            id: 49,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 8,
            second: 4,
            result: 32,
            level: 1,
        },

        {
            id: 50,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 8,
            second: 5,
            result: 40,
            level: 1,
        },

        {
            id: 51,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 8,
            second: 6,
            result: 48,
            level: 1,
        },

        {
            id: 52,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 8,
            second: 7,
            result: 56,
            level: 1,
        },

        {
            id: 53,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 8,
            second: 8,
            result: 64,
            level: 1,
        },

        {
            id: 54,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 8,
            second: 9,
            result: 72,
            level: 1,
        },

        {
            id: 55,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 9,
            second: 2,
            result: 18,
            level: 1,
        },

        {
            id: 56,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 9,
            second: 3,
            result: 27,
            level: 1,
        },

        {
            id: 57,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 9,
            second: 4,
            result: 36,
            level: 1,
        },

        {
            id: 58,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 9,
            second: 5,
            result: 45,
            level: 1,
        },

        {
            id: 59,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 9,
            second: 6,
            result: 54,
            level: 1,
        },

        {
            id: 60,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 9,
            second: 7,
            result: 63,
            level: 1,
        },

        {
            id: 61,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 9,
            second: 8,
            result: 72,
            level: 1,
        },

        {
            id: 62,
            name: labels["multiplication"],
            type: "multiplication",
            sign: signs["multiplication"],
            first: 9,
            second: 9,
            result: 81,
            level: 1,
        },



































        {
            id: 63,
            name: labels["division"],
            type: "division",
            sign: signs["division"],
            first: 6,
            second: 2,
            result: 3,
            level: 1,
        },

        {
            id: 64,
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
        labels,
        getExamples,
    };
} )