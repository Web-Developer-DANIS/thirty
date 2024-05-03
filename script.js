
let numberInput = +prompt("Введите число:");


if (!isNaN(numberInput) && numberInput !== 0) {

    let powerInput = parseFloat(prompt("Введите степень (если пусто или не число, будет использовано значение 2):"));


    if (isNaN(powerInput) || powerInput === 0) {
        powerInput = 2; 
    }

    let result = 1;

    for (let i = 0; i < powerInput; i++) {
        result *= numberInput;
    }


    alert("Ответ: " + result);
} else {
    alert("Ошибка! Введите число, отличное от нуля.");
}
