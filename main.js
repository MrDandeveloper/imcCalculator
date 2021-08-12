const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputWeight = e.target.querySelector('#ps');
  const inputHeight = e.target.querySelector('#alt');

  let peso = Number(inputWeight.value);
  let altura = Number(inputHeight.value);


  if (!peso) {
    setResult('Peso inválido! use somente números e "." ao invés de ",".', false);
    return;
  }
  if (!altura) {
    setResult('Altura inválida! use somente números e "." ao invés de ",".', false);
    return;
  }
  
  const imc = getIMC(peso, altura);
  const levelIMC = getLevelIMC(imc);

  const msg = `Seu IMC é ${imc} (${levelIMC}).`;

  setResult(msg, true);
});

function getIMC(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
};

function getLevelIMC(imc) {
  const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

  if (imc >= 39.9) return level[5];
  if (imc >= 34.9) return level[4];
  if (imc >= 29.9) return level[3];
  if (imc >= 24.9) return level[2];
  if (imc >= 18.5) return level[1];
  if (imc < 18.5) return level[0];
};

function createP() {
  const p = document.createElement('p');
  return p;
};

function setResult(msg, isValid) {
  const result = document.querySelector('#result');
  result.innerHTML = '';

  const p = createP();

  if (isValid) { p.classList.add('paragrafo-resultado') }
  else {p.classList.add('paragrafo-resultado-bad')};
  p.innerHTML = msg;
  result.appendChild(p);
};
