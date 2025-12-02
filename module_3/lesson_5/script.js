// ----------------------------------------- 5

/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let total = 0;

// for(const num of numbers) {
//     if(num % 2 === 0) {
//         total += num;
//     }
// }

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// const numbers1 = [10, 3, 20, 5];
// const numbers2 = [4, 3, 2, 5];

// function foo(arr) {
//     let total = 0;
    
//     for(const item of arr) { // 1) numbers // 2) numbers1 // 3) numbers2
//         if(item % 2 === 0) {
//             total += item;
//         }
//     }
//     return total;
// }

// console.log("numbers:", foo(numbers));
// console.log("numbers1:", foo(numbers1));
// console.log("numbers2: ", foo(numbers2));








/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "38001234567,38001112233,380055566377,380055566300";


// const namesArr = names.split(",");
// const phonesArr = phones.split(",");


// for(let i = 0; i < namesArr.length; i++) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }









/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

// const string = "    Welcome         to the          future     ";

// const arr = string.trim().split(" ");
// console.log(arr);

// const res = arr.slice(1, arr.length - 1).join(" ").trim();

// console.log(res);








/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */


// const arr = [2, 17, 94, 1, 5, 24];
// let min;

// for(let i = 0; i < arr.length; i++) {
//     if(i === 0) {
//         min = arr[i];
//     } else if(arr[i] < min) {
//         min = arr[i];   
//     }
// }

// console.log(min);



