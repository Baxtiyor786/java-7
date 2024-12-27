

// for (let i= 0; i<10; i++){
//     console.log(i)
// }


// for (let i= 1; i<=100; i++){
//      if (i%2==0){
//         console.log(i)
//      }
// }


// Вывод чисел от 1 до 5
// let i = 1;
// while (i <=5){
//     console.log(i)
//     i++ //Уведомленим счетчик
// }

const array = [2, 4, 9, 10, 45, 67, 8, 90];
console.log(array, "'boshlanishdagi array'");

// Juft sonlarni ajratish
const evenNumbers = array.filter(number => number % 2 === 0);
console.log(evenNumbers, "'juft sonlarga ajratilgan array'");