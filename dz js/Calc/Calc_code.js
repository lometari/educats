let result, operandOne = '', operandTwo = '', calcOperation = '';
let screen = document.getElementById('screen');
let operation = ''; //переменна для приема функций
let tempScreen = ''; //переменная для хранения текущего содержания экрана
let infoScreen = document.getElementById('info');
let afterPoint; //переменная с количеством разрядов при округлении
alert(`    Много еще не до(с)делано. \n\n    Главное нет ограничения на кол-во знаков на экране калькулятара, поэтому не набирайте чисел и не задавайте выражений, которые будут иметь в результате больше 9 символов. \n\n    И главное не забывайте нажать на "С" когда сделали свои дела, после вас придут считать другие люди. \n\nКивни и нажми "ОК"` );
alert (`Зато у нас есть точка для дробных чисел!   >(^_^<)`);

//Типичная подстава, тут оказывается остаток при делении в двоичной системе
// let op1=2.1, op2=2.2;
// let res=op1+op2;
// console.log(res);

// Выбор элементов через querySelectorAll
let bigBrotherNumber = document.querySelectorAll(".digits > button");
console.log(bigBrotherNumber);
let bigBrotherOperation = document.querySelectorAll(".actions > button");
console.log(bigBrotherOperation);

//Выбор элемента через getElementById + getElementsByTagName
// let bigBrotherNumber = document.getElementById("dig").getElementsByTagName("button");
// console.log(bigBrotherNumber);

for(let i=0; i < bigBrotherNumber.length; i++) {
    bigBrotherNumber[i].addEventListener("click", takeNumber);
}

for(let i=0; i < bigBrotherOperation.length; i++) {
    bigBrotherOperation[i].addEventListener("click", takeOperation);
}

function takeNumber(e) {
       e = this.getAttribute("data-value");
       tempScreen += e;
       console.log(`Это tempScreen= ${tempScreen}`);
       screen.innerHTML = tempScreen;
}

function takeOperation() {
    operation = this.getAttribute("data-value");
    // console.log(`Это operation  ${operation}`);
    // console.log(screen.innerHTML);
    // console.log(operandOne);
    switch (operation) {
        case ('+'):
        case ('-'):
        case ('*'):
        case ('/'):
            operandOne = tempScreen;
            console.log(`Это операнд1 ${operandOne}`);
            calcOperation = operation;
            console.log(calcOperation);
            tempScreen = "";
            infoScreen.innerHTML=`${operandOne}${calcOperation}`
            break;
        case ('='):
            operandTwo = tempScreen;
            infoScreen.innerHTML +=`${operandTwo}=`
            console.log(`Это операнд2 ${operandTwo}`);
            if (calcOperation == "+") {
                result = Number(operandOne) + Number(operandTwo);
            } else if (calcOperation == "-") {
                result = Number(operandOne) - Number(operandTwo);
            } else if (calcOperation == "*") {
                result = Number(operandOne) * Number(operandTwo);
            } else if (calcOperation == "/") {
                result = Number(operandOne) / Number(operandTwo);
            } else {
                alert('К такому жизнь меня не готовила...')
            }
            switch (result) {
                case (Infinity)://wow! не 'Infinity', не ('Infinity')
                    infoScreen.innerHTML = ' Divide by zero attempt registered. Stay where you are, your math teacher on the way';
                    screen.innerHTML = 0;
                    break;
                default:
                        floatLength();
                        infoScreen.innerHTML += `${result.toFixed(afterPoint)}`;
                        screen.innerHTML = result.toFixed(afterPoint);
                    break;
            }
            break;
        case ('C'):
            console.log("Нажали С Сброс")
            operandOne = operandTwo = calcOperation = operation = tempScreen = "";
            screen.innerHTML = 0;
            infoScreen.innerHTML =`Let's see whats next...`;
            // console.log(`Это операнд1 ${operandOne}`);
            // console.log(`Это операнд2 ${operandTwo}`);
            // console.log(`calcOperation ${calcOperation}`);
            // console.log(`Это operation  ${operation}`);
            // console.log(`Это screen.innerHTML  ${tempScreen}`);
            break;
    }
}

//Определение разрядов округления
function floatLength(){
    afterPoint = 0;
    let op1Length = operandOne.length;
    let op1PointPosition = operandOne.lastIndexOf('.'); //lastIndexOf не работает
    let op1AfterPoint=op1Length-(op1PointPosition+1);
    // console.log(`operandOne is_${operandOne}`);
    // console.log(`op1Length is_${op1Length}`);
    // console.log(`op1PointPosition is_${op1PointPosition}`);
    // console.log(`op1AfterPoint is_${op1AfterPoint}`);
    let op2Length = operandTwo.length;
    let op2PointPosition = operandTwo.lastIndexOf('.');
    let op2AfterPoint = op2Length-(op2PointPosition+1);
    // console.log(`operandTwo is_${operandTwo}`);
    // console.log(`op2Length is_${op2Length}`);
    // console.log(`op2PointPosition is_${op2PointPosition}`);
    // console.log(`op2AfterPoint is_${op2AfterPoint}`);
    afterPoint = Math.max(op1AfterPoint, op2AfterPoint);
    if ((op1PointPosition==-1)&&(op2PointPosition==-1)){
        afterPoint = 0;
    }
}





//file:///C:/TOPPRO/VSC/caT/Calc/Calc_index.html