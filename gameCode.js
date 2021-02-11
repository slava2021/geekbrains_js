//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var qevent, ok;

var answers = [];

do {//Выводим первый вопрос
    ok = false;
    qevent = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');

    if (qevent == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, qevent);
    }
} while (!ok);

switch (qevent) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            qevent = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (qevent == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, qevent);
            }
        } while (!ok);

        switch (qevent) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    qevent = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (qevent == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, qevent);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    qevent = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (qevent == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, qevent);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;

    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            qevent = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (qevent == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, qevent);
            }
        } while (!ok);

        switch (qevent) {
            case 1: // Второе действие
                do {
                    ok = false;
                    qevent = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (qevent == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, qevent);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    qevent = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (qevent == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, qevent);
                    }
                } while (!ok);
                answers.push(qevent); //add fourth answer
                console.log(qevent);
                break;
            case -1: // Второе действие
                answers.push(qevent); //add fourth answer
                console.log(qevent);
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

alert(answers);

//------------------------------------------
function isAnswer(q, qevent) {
    if (isNaN(qevent) || !isFinite(qevent)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (qevent < 1 || qevent > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    answers.push(qevent); //add answer
    console.log(qevent);
    return true;

}

