const inputNumber = document.querySelector('#inNumber');
const buttonAdd = document.querySelector('#add-to-list');
const select = document.querySelector('#list-space');
const buttonGenerate = document.querySelector('#generate-report');
const result = document.querySelector('#result');
const valores = [];

function inList (number, list) {
    if (list.indexOf(Number(number)) !== -1) {
        return true;
    } else {
        return false;
    }
};

function ParImpar (n) {
    if (n%2 === 0) {
        return true;
    } else {
        return false;
    }
};

buttonAdd.addEventListener('click', function () {
    if (inputNumber.value.length === 0 ) {
        alert('Digite um número');
    }
    else if (!inList (inputNumber.value, valores)) {
        valores.push(Number(inputNumber.value));
        const option = document.createElement('option');
        option.textContent = `o número ${inputNumber.value} foi adicionado na lista`;
        select.appendChild(option);
        result.textContent = '';
    }
    else {
        alert('Esse número já foi adicionado');
    }
    inputNumber.value = '';
    inputNumber.focus();
});


buttonGenerate.addEventListener('click', function () {
    if (valores.length === 0) {
        alert('Adicione valores antes de finalizar');
    }
    else {
        const totalElement = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for (const posicao in valores) {
            soma += valores[posicao];

            if(valores[posicao] > maior) {
                maior = valores[posicao];
            } if(valores[posicao] < menor) {
                menor = valores[posicao];
            }
        };
        media = (soma / totalElement).toFixed(2);
        result.textContent = '';
        result.innerHTML += `Foram adicionados ${totalElement} elementos na lista`;
        result.innerHTML += `<br>A soma de todos os valores é igual a ${soma}`;
        result.innerHTML += `<br>A média dos valores é ${media}`;
        result.innerHTML += `<br>O maior número na lista é o número ${maior}`;
        result.innerHTML += `<br>O menor número na lista é o número ${menor}`;
        for (const val of valores) {
            if (ParImpar(val)) {
                result.innerHTML += `<br>O número ${val} é par`;
            }
            else {
                result.innerHTML += `<br>O número ${val} é ímpar`;
            }
        }
    }
});