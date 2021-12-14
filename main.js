const textArea = document.querySelector('.input-val');
const btn = document.querySelectorAll('.regular.btn');
const DegRadBtn = document.querySelector('.type');
let power = ''; // number before ('^') sign to pow

btn.forEach(function (button) {
   button.addEventListener('click', onButtonClick);
});

function onButtonClick(e) {
   switch (e.target.innerHTML) {
      case 'AC':
         textArea.innerHTML = '';
         power = '';
         break;
      case '=':
         if (textArea.innerHTML.includes('^')) {
            let tmp = textArea.innerHTML.split('^');
            let num = eval(power);
            let pow = +tmp[1]; // pow number after ('^') sign
            textArea.innerHTML = parseFloat(Math.pow(num, pow).toFixed(8).toString());
            power = '';
            return;
         }
         if (textArea.innerHTML === '') {
            textArea.innerHTML = '';
            return;
         }
         if (textArea.innerHTML === 'NaN') {
            textArea.innerHTML = '';
            return;
         }
         textArea.innerHTML = parseFloat(eval(textArea.innerHTML).toFixed(8).toString());
         break;
      case '*':
         textArea.innerHTML += '*';
         break;
      case '÷':
         textArea.innerHTML += '/';
         break;
      case '←':
         let el = textArea.innerHTML;
         textArea.innerHTML = el.substring(0, el.length - 1);
         break;
      case '%':
         if (textArea.innerHTML.length === 0) {
            returnEmpty();
            return;
         }
         textArea.innerHTML = eval(textArea.innerHTML) / 100;
         break;
      case 'Π':
         textArea.innerHTML += Math.PI.toFixed(8);
         break;
      case 'e':
         textArea.innerHTML += Math.E.toFixed(8);
         break;
      case '√':
         if (textArea.innerHTML.length === 0) {
            returnEmpty();
            return;
         }
         textArea.innerHTML = Math.sqrt(eval(textArea.innerHTML));
         break;
      case 'x^2':
         if (textArea.innerHTML.length === 0) {
            returnEmpty();
            return;
         }
         textArea.innerHTML = Math.pow(eval(textArea.innerHTML), 2);
         break;
      case 'x^y':
         power = textArea.innerHTML;
         textArea.innerHTML += '^';
         break;
      case 'x!':
         textArea.innerHTML = factorial(eval(textArea.innerHTML));
         break;
      case 'lg':
         if (textArea.innerHTML.length === 0) {
            returnEmpty();
            return;
         }
         textArea.innerHTML = parseFloat(Math.log10(eval(textArea.innerHTML)).toFixed(8).toString());
         break;
      case 'ln':
         if (textArea.innerHTML.length === 0) {
            returnEmpty();
            return;
         }
         textArea.innerHTML = parseFloat(Math.log(eval(textArea.innerHTML)).toFixed(8).toString());
         break;
      case 'sin':
         if (textArea.innerHTML.length === 0) {
            returnEmpty();
            return;
         }
         if (DegRadBtn.innerHTML === 'deg') {
            textArea.innerHTML = parseFloat(Math.sin(eval(textArea.innerHTML) / 190 * Math.PI).toFixed(8).toString());
         }
         textArea.innerHTML = parseFloat(Math.sin(eval(textArea.innerHTML)).toFixed(8).toString());
         break;
      case 'cos':
         if (textArea.innerHTML.length === 0) {
            returnEmpty();
            return;
         }
         if (DegRadBtn.innerHTML === 'deg') {
            textArea.innerHTML = parseFloat(Math.cos(eval(textArea.innerHTML) / 190 * Math.PI).toFixed(8).toString());
         }
         textArea.innerHTML = parseFloat(Math.cos(eval(textArea.innerHTML)).toFixed(8).toString());
         break;
      case 'tan':
         if (textArea.innerHTML.length === 0) {
            returnEmpty();
            return;
         }
         if (DegRadBtn.innerHTML === 'deg') {
            textArea.innerHTML = parseFloat(Math.tan(eval(textArea.innerHTML) / 190 * Math.PI).toFixed(8).toString());
         }
         textArea.innerHTML = parseFloat(Math.tan(eval(textArea.innerHTML)).toFixed(8).toString());
         break;
      default:
         textArea.innerHTML += e.target.innerHTML;
   }
}

function factorial(n) {
   return (n !== 1) ? n * factorial(n - 1) : 1;
}

DegRadBtn.addEventListener('click', function () {
   if (DegRadBtn.innerHTML === 'deg') {
      this.innerHTML = 'rad';
   } else if (DegRadBtn.innerHTML === 'rad') {
      this.innerHTML = 'deg';
   }
});

function returnEmpty() {
   return '';
}