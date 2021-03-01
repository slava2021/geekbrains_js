//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var qevent, ok, q, a;

var answers = [];

q = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
a = isAnswer(works.a0, q, works.a00);
whileDo(q, a);
// do {//Выводим первый вопрос
//     ok = false;
//     qevent = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');

//     if (qevent == -1) {
//         break;
//     }
//     else {
//         ok = isAnswer(works.a0, qevent, works.a00);
//     }
// } while (!ok);

switch (qevent) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2

        q = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
        a = isAnswer(works.b0, q, works.b00);
        whileDo(q, a);

        // do {
        //     ok = false;
        //     qevent = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
        //     if (qevent == -1) {
        //         break;
        //     }
        //     else {
        //         ok = isAnswer(works.b0, qevent, works.b00);
        //     }
        // } while (!ok);

        switch (qevent) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно

                q = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                a = isAnswer(works.d0, q, works.d00);
                whileDo(q, a);

                // do {
                //     ok = false;
                //     qevent = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                //     if (qevent == -1) {
                //         break;
                //     }
                //     else {
                //         ok = isAnswer(works.d0, qevent, works.d00);
                //     }
                // } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно

                q = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                a = isAnswer(works.d0, q, works.d00);
                whileDo(q, a);

                // do {
                //     ok = false;
                //     qevent = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                //     if (qevent == -1) {
                //         break;
                //     }
                //     else {
                //         ok = isAnswer(works.d0, qevent, works.d00);
                //     }
                // } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;

    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну

        q = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
        a = isAnswer(works.c0, q, works.c00);
        whileDo(q, a);

        // do {
        //     ok = false;
        //     qevent = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
        //     if (qevent == -1) {
        //         break;
        //     }
        //     else {
        //         ok = isAnswer(works.c0, qevent, works.c00);
        //     }
        // } while (!ok);

        switch (qevent) {
            case 1: // Второе действие

                q = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                a = isAnswer(works.d0, q, works.d00);
                whileDo(q, a);

                // do {
                //     ok = false;
                //     qevent = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                //     if (qevent == -1) {
                //         break;
                //     }
                //     else {
                //         ok = isAnswer(works.d0, qevent, works.d00);
                //     }
                // } while (!ok);

                break;
            case 2: // Второе действие

                q = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                a = isAnswer(works.d0, qevent, works.d00);
                whileDo(q, a);

                // do {
                //     ok = false;
                //     qevent = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                //     if (qevent == -1) {
                //         break;
                //     }
                //     else {
                //         ok = isAnswer(works.d0, qevent, works.d00);
                //     }
                // } while (!ok);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
console.log(answers);
do {
    ok = false;
    var inpval = +prompt("Введите Ваш ход или -1 - Выход из игры ");
    if (inpval == -1) {
        break;
    } else {
        alert(isAnswers(inpval, answers));
        break;
    }
} while (!ok);
//------------------------------------------
function isAnswer(q, qevent, qopen) {
    if (isNaN(qevent) || !isFinite(qevent)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (qevent < 1 || qevent > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    answers.push([qopen, qevent]); //add answer
    return true;
}
//------------------------------------------
// выводим окно и ответ
function isAnswers(inp, ans) {
    if (inpval < 1 || inpval > 4) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    switch (inp) {
        case 1:
            a = ans[0].join('\n Ваш ответ ');
            break;
        case 2:
            a = ans[1].join('\n Ваш ответ ');
            break;
        case 3:
            a = ans[2].join('\n Ваш ответ ');
            break;
        case 4:
            a = ans[3].join('\n Ваш ответ ');
            break;
    }
    return a;
}
//------------------------------------------
//основная фонкция обработки действий в игре
function whileDo(q, a) {
    do {
        ok = false;
        qevent = q;
        if (qevent == -1) {
            break;
        }
        else {
            ok = a;
        }
    } while (!ok);
    return ok;
}