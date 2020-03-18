let startDoc = document.getElementById('start');
let monthIncreaseDoc = document.getElementById('monthIncrease');
let percentDoc = document.getElementById('percent');
let daysDoc = document.getElementById('days');
let btn = document.getElementById('btn');

//errors
let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');

btn.addEventListener('click', function () {
    if(checkInput(startDoc, monthIncreaseDoc, percentDoc, daysDoc)){
            let start = +startDoc.value;
            let monthIncrease = +monthIncreaseDoc.value;
            let percent = +percentDoc.value/12;
            let days = Math.floor(+daysDoc.value / 30);
            let total = start;
        for (let i = 0; i < days; i++) {
            total += total * percent / 100;
            total += monthIncrease;
        }
            console.log(Math.round(total));
            alert(Math.round(total));
    }else{
        return NaN;
    }
    
})


function checkInput(start, monthIncrease, percent, days) {
    if(start.value <= 0 || monthIncrease.value <= 0 || percent.value <= 0 || percent.value > 100 || days.value <= 0){
        if (start.value <= 0) {
            first.className='show';
            console.log('Начальная сумма вклада содержит ошибку ввода');
        }else{
            first.className='block';
        }
        if (monthIncrease.value <= 0) {
            second.className='show';
            console.log('Сумма пополнения содержит ошибку ввода');
        }
        else{
            second.className='block';
        }
        if (percent.value <= 0 || percent.value > 100) {
            third.className='show';
            console.log('Процент содержит ошибку ввода');
        }
        else{
            third.className='block';
        }
        if (days.value <= 0) {
            fourth.className='show';
            console.log('Срок содержит ошибку ввода');
        }
        else{
            fourth.className='block';
        }
        return false;
    }else{
        first.className='block';
        second.className='block';
        third.className='block';
        fourth.className='block';
    }
    return true;
}