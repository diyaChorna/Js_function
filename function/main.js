// Написати розв’язок нижче описаного завдання за допомогою конструкції switch:
// Користувач вводить число в prompt
// Після введення числа вистрибує алерт з оголошенням пори року до якої відноситься число (номер місяця) що ввів користувач.
// Якщо число не входить в діапазон від 1 до 12 тоді виводить що це неможливо.

// let input = prompt('Введіть будь ласка пору року');
// switch(input){
//       case '1' :
//       case '2' :
//       case '12' :
//             console.log("winter");
//             break
//       case '5' :
//       case '3' :
//       case '4' :
//             console.log("spring");
//             break
//       case '6' :
//       case '7' :
//       case '8' :
//             console.log("summer");
//             break
//       case '9' :
//       case '10' :
//       case '11' :
//             console.log("autumn");
//             break    
//       default:
//             console.log("sorry you are wrong");
//             break
// }

// Написати розв’язок нижче описаного завдання за допомогою function declaration:
// Створити функцію яка буде приймати одне число.
// В середині функції перевіряємо чи це число є простим.
// Після перевірки виводимо повідомлення в console.log().

function numberF(n){
      if(n%2 ===0){
            console.log(`${a} isn't a prime number`)
      }
      else if(n%3 ===0){
            console.log(`${a} isn't a prime number`)
      }
      else if(n%5 ===0){
            console.log(`${a} isn't a prime number`)
      }
      else if(n%7 ===0){
            console.log(`${a} isn't a prime number`)
      }
      else{
            console.log(`${a} is a prime number`)
      }
}
numberF(17);

// Написати розв’язок нижче описаного завдання за допомогою function declaration:
// Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
// Кількість параметрів у функції може бути від 2х і більше.
// Приклад роботи:
// max(5,-2) – має повернути 5.
// max(5,-2, 30, 6) – має повернути 30

// function maxFunction(a,b,c,d){
//       let max = maxFunction[0]
//       for(let i=0; i<arguments.length; i++)
//       {
//             if(i> max){
//                   i = max;
//             }
//       }
//       console.log(max)
// }
// maxFunction(45,-7,5,58);