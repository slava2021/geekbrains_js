// ДОМАШНЕЕ ЗАДАНИЕ УРОК 2
// 1. Дан код
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 префиксная форма 1+1 = в alert выведется 2
// d = b++; alert(d);           // 1 постфиксная форма, результат будет после вывода alert
// c = (2+ ++a); alert(c);      // 5 a = 2 результат сложения будет 2 + 1 + 2 -> alert
// d = (2+ b++); alert(d);      // 4 b = 2 результат будет 2 + 2 -> alert -> + 1
// alert(a);                    // 3 итог мы дважды увеличиваем значение переменной на 1
// alert(b);                    // 3 итог мы дважды увеличиваем значение переменной на 1


// 2. Чему будет равен x в примере ниже?

// var a = 2;
// var x = 1 + (a *= 2); // итог 1 + (2 * 2) = 5

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
// var a = parseInt((Math.random() * 11) - 5);
// var b = parseInt((Math.random() * 11) - 5);
// var c;
// if (a > 0 && b > 0) {
//     c = a - b;
//     document.write("a-b=" + c + "<br>");
// } else if (a < 0 && b < 0) {
//     c = a * b;
//     document.write("a*b=" + c + "<br>");
// } else {
//     c = a + b;
//     document.write("a+b=" + c + "<br>");
// };

// document.write(a + " " + b);

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
// var a = Math.floor(Math.random() * 16);
// document.write("random a = " + a + "<br>");
// switch (a) {
//     case 0:
//         document.write(0 + "<br>");
//     case 1:
//         document.write(1 + "<br>");
//     case 2:
//         document.write(2 + "<br>");
//     case 3:
//         document.write(3 + "<br>");
//     case 4:
//         document.write(4 + "<br>");
//     case 5:
//         document.write(5 + "<br>");
//     case 6:
//         document.write(6 + "<br>");
//     case 7:
//         document.write(7 + "<br>");
//     case 8:
//         document.write(8 + "<br>");
//     case 9:
//         document.write(9 + "<br>");
//     case 10:
//         document.write(10 + "<br>");
//     case 11:
//         document.write(11 + "<br>");
//     case 12:
//         document.write(12 + "<br>");
//     case 13:
//         document.write(13 + "<br>");
//     case 14:
//         document.write(14 + "<br>");
//     default:
//         document.write(15 + "<br>");
//     // break;
// };

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

// function addCalc(a, b) {
//     return a + b;
// };
// function subCalc(a, b) {
//     return a - b;
// };
// function multCalc(a, b) {
//     return a * b;
// };
// function divCalc(a, b) {
//     if (a != 0)
//         return a / b;
//     return 0;
// }
// };
// console.log(addCalc(1, 2));
// console.log(subCalc(1, 2));
// console.log(multCalc(1, 2));
// console.log(divCalc(1, 2));

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
// operation – строка с названием операции.В зависимости от переданного значения операции выполнить одну из арифметических
//  операций(использовать функции из пункта 3) и вернуть полученное значение(использовать switch).
// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case '+':
//             a = addCalc(arg1, arg2);
//             break;
//         case '-':
//             a = subCalc(arg1, arg2);
//             break;
//         case '*':
//             a = multCalc(arg1, arg2);
//             break;
//         case '/':
//             a = divCalc(arg1, arg2);
//             break;
//     };
//     return a;
// };

// var a = prompt("Введите знак операции = ");

// console.log(mathOperation(2, 3, a));

/////////////////////////////////////////////////////////////////////////////
// Урок 3. Циклы, массивы, структуры данных
// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
var i = 0;
while (i <= 100) {
    var count = 0;
    for (var j = 2; j <= i; j++) {
        if (i % j) continue;
        count += 1;
    }
    if (count == 1) console.log(i);
    i++;
};

// 2. С этого урока начинаем работать с функционалом интернет-магазина. 
// Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

var goods = [
    {
        title: "Товар1",
        price: 100,
        count: 2
    },
    {
        title: "Товар2",
        price: 200,
        count: 3
    },
    {
        title: "Товар3",
        price: 300,
        count: 1
    },

];

function countBasketPrice() {
    var sum = 0;
    for (var item of goods) {
        console.log(item.title + " стоит " + item.price + " количество " + item.count);
        sum += item.price * item.count;
    };
    return sum;
};

console.log("Итого: " + countBasketPrice(goods));