//v.0.1 development
// calculator made with vanilla.js
// date: 12.04.2019

const main = document.querySelector('.main');
const calculator = document.querySelector('.calculator');
const result = document.querySelector('#result');

let opClicked = false;

const values = {
    'first': '',
    'operation': '',
    'second': '',
    'calculated': false,
    'opCalled': 0
};

calculator.addEventListener('click', (e) => {
    let res = e.target.textContent; //содержимое ячейки
if (values.calculated == true && values.opCalled > 0 && ((res == '+') || (res == '-') || (res == '/') || (res == '*'))) {
values.opCalled++;
values.operation = res;
} else if (values.calculated == true && values.opCalled < 1 &&((res == '+') || (res == '-') || (res == '/') || (res == '*'))) {
    values.first = e.target.textContent;
    values.opCalled++;
}
});



calculator.addEventListener('click', (e) => { //отлавливаем событие клика по таблице
    e.preventDefault();
    let res = e.target.textContent; //содержимое ячейки
    console.log(res);

    if ((res == '+') || (res == '-') || (res == '/') || (res == '*') || (res == '=')) { //проверка нажатия кнопки операции
        if ((res != '=')) { //если не равно - меняем значение аттрибута объекта для вычислений на символ операции и выводим символ на страницу 

            opClicked = true;
            result.value = res;
            values.operation = res;
            
          

        } else { //если нажато равно - вызываем функцию в которой происходят все вычисления, после чего сбрасываем объект до начального состояния
            result.value = calcResults();
            values.first = result.value;
            values.operation = '';
            values.second = '';
            values.calculated = true;
            opClicked = false;
        }

    } else if (!opClicked) { // если opClicked == false, то записываем значения в левый операнд
        values.first += res;
        result.value = values.first;
    } else { // а если true - то в правый
        values.second += res;
        result.value = values.second;
    }

    function calcResults() {
        if (res == '=') {
            let sum = 0;
            if (values.operation == '+') {
                sum = Number(values.first) + Number(values.second);
            } else if (values.operation == '-') {
                sum = Number(values.first) - Number(values.second);
            } else if (values.operation == '/') {
                sum = Number(values.first) / Number(values.second);
            } else if (values.operation == '*') {
                sum = Number(values.first) * Number(values.second);
            }
            console.log(sum);
            values.opCalled = 0;
            return sum;
        }
    }

});

/*


*/