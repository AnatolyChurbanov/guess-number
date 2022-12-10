let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

minValue < -999 ? minValue = -999 : NaN;
maxValue > 999 ? maxValue = 999 : NaN; 

if (isNaN(minValue) || isNaN(maxValue)) {
    minValue = 0;
    maxValue = 100;
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function (starGame) {
        minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
        maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        orderNumber = 1;
        orderNumberField.innerText = orderNumber;
        answerField.innerText = `Вы загадали число ${answerNumber }?`;
        gameRun = true;
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            let phraseRandom = Math.round( Math.random()*3);
            let answerPhrase;
            if (phraseRandom === 1) {
                answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
            } else if (phraseRandom === 2){
                answerPhrase = `Я сдаюсь...\n\u{1F92F}`;
            } else {
                answerPhrase = `Я проиграл!\n\u{1F92F}`;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber + 0;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let phraseRandom = Math.round( Math.random()*3);
            let answerPhrase;
            if (phraseRandom === 1) {
                answerPhrase = `Вы загадали число ${answerNumber }?`;
            } else if (phraseRandom === 2){
                answerPhrase = `Ваше число это ${answerNumber }?`;
            } else {
                answerPhrase = `Я думаю ваше число ${answerNumber }`;
            }
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            let phraseRandom = Math.round( Math.random()*3);
            let answerPhrase;
            if (phraseRandom === 1) {
                answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
            } else if (phraseRandom === 2){
                answerPhrase = `Я сдаюсь...\n\u{1F61E}`;
            } else {
                answerPhrase = `Я проиграл!\n\u{1F633}`;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let phraseRandom = Math.round( Math.random()*3);
            let answerPhrase;
            if (phraseRandom === 1) {
                answerPhrase = `Вы загадали число ${answerNumber }?`;
            } else if (phraseRandom === 2){
                answerPhrase = `Ваше число это ${answerNumber }?`;
            } else {
                answerPhrase = `Я думаю ваше число ${answerNumber }`;
            }
            answerField.innerText = answerPhrase;;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let phraseRandom = Math.round( Math.random()*2);
        let answerPhrase;
        if (phraseRandom === 1) {
            answerPhrase = `Я всегда выигрываю \n\u{1F60E}`;
        } else if (phraseRandom === 2){
            answerPhrase = `Победа - мое второе имя! \n\u{1F604}`;
        } else {
            answerPhrase = `Так и знал, что у меня получится \n\u{1F60C}`;
        }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

