let screen = document.getElementById('screen');
let calcOperation, operandOne, operandTwo, result=null, checkForNewCalc=true, takeOperationVar;
let screenVal = '';
let bigBrotherNumber = document.querySelectorAll(".digits > button"); //список цифр в переменнную
console.log(bigBrotherNumber);
let bigBrotherOperation = document.querySelectorAll(".actions > button");
console.log(bigBrotherOperation);

function takeNumber(event){                                                 //получаем значение атрибута
    let someVar = event.target.getAttribute('data-value');
    screenVal = screenVal + someVar;
    screen.innerHTML = screenVal;
    if (takeOperationVar==='='){                    //можно упростить выражение с if О_о
        checkForNewCalc = true;
    }
    else {
        checkForNewCalc = false;
    }
}

function takeOperation(event){
    let someVar = event.target.getAttribute('data-value');
    takeOperationVar = someVar;
    if (someVar==='C'){
        console.log('this is C');
        calcOperation = undefined, operandOne = undefined, operandTwo = undefined, takeOperationVar = undefined;
        result = null, checkForNewCalc=true;
        screenVal = '';
        screen.innerHTML = '0';
    }
    else if (someVar==='='){
        operandTwo = parseFloat(screenVal);
        console.log('operandOne', operandOne);
        console.log('operandTwo', operandTwo);
        console.log('calcOperation', calcOperation);
        console.log('takeOperationVar', takeOperationVar);
        console.log('checkForNewCalc', checkForNewCalc);
        switch (calcOperation){
            case ('+'):
                result = operandOne + operandTwo;
            break;
            case ('-'):
                result = operandOne - operandTwo;
            break;
            case ('/'):
                result = operandOne / operandTwo;
            break;
            case ('*'):
                result = operandOne * operandTwo;
            break;
        }
        console.log('result', result);
        screen.innerHTML = result;
        operandOne = result;
        screenVal='';
    }
    else if (someVar==='+'||someVar==='-'||someVar==='/'||someVar==='*'){   //почему нельзя else if (someVar===('+'||'-'||'/'||'*'));
        if ((checkForNewCalc!==true)&&(operandOne===result)){
            console.log('Continue calculations...');
            calcOperation = someVar;
            screenVal='';
        }
        else {
            console.log('First or new operation');
            operandOne = parseFloat(screenVal);
            calcOperation = someVar;
            screenVal='';
        }
    }
    else{
        console.log('К такому жизнь меня не готовила(Ошибка takeOperation)');
        console.log(someVar);
    }
}

for(let i=0; i < bigBrotherNumber.length; i++) {                            //слушаем цифры, знаки
    bigBrotherNumber[i].addEventListener("click", takeNumber)
}

for (let i=0; i < bigBrotherOperation.length; i++) {
    bigBrotherOperation[i].addEventListener('click',takeOperation)
}