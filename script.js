// Mapeando elementos do HTML
const buttonCalculate = document.querySelector(".button-calculate");
const buttonReset = document.querySelector(".button-reset");
const resultValue = document.querySelector(".result-value");
const fisrtInputValue = document.querySelector(".first-input-value");
const secondInputValue = document.querySelector(".second-input-value");
const selectValue = document.getElementById("select-value");

// função criada para realizar os calculos
function calculateValue() {
  const fisrtInputValue = document.querySelector(".first-input-value").value;
  const secondInputValue = document.querySelector(".second-input-value").value;

  // Realiza os calculos
  const calculatedVoltage = fisrtInputValue * secondInputValue;
  const calculatedCurrent = fisrtInputValue / secondInputValue;
  const calculatedResistance = fisrtInputValue / secondInputValue;
  const calculatedPower = fisrtInputValue * secondInputValue;

  // Se o valor do select for verdadeiro ele imprime o valor calculado
  if (selectValue.value == "tensao") {
    //Se a opção for "tensão" imprima na tela o seguinte valor
    console.log((resultValue.value = calculatedVoltage + "V"));
  }
  if (selectValue.value == "corrente") {
    //Se a opção for "corrente" imprima na tela o seguinte valor
    console.log((resultValue.value = calculatedCurrent + "A"));
  }
  if (selectValue.value == "resistencia") {
    //Se a opção for "resistencia" imprima na tela o seguinte valor
    console.log((resultValue.value = calculatedResistance + "Ω"));
  }
  if (selectValue.value == "potencia") {
    //Se a opção for "potencia" imprima na tela o seguinte valor
    console.log((resultValue.value = calculatedPower + "W"));
  }
}

//Função criada para mapearos elementos do HTML

function changeName() {
  //Mapeando elementos do HTML
  const currentName = document.getElementById("current-name");
  const resistanceName = document.getElementById("resistance-name");
  const resultName = document.getElementById("result-name");

  if (selectValue.value == "corrente") {
    //Se a opção for "corrende (I)" coloque os seguintes valores de entrada
    currentName.innerHTML = "Tensao (V)";
    resistanceName.innerHTML = "Resistência (Ω)";
    resultName.innerHTML = "Corrente (I)";
    
  }

  if (selectValue.value == "resistencia") {
    //Se a opção for "resistencia (Ω)"  coloqe os seguintes valores de entrada
    resistanceName.innerHTML = " Corrente (I)";
    currentName.innerHTML = "Tensão (V)";
    resultName.innerHTML = "Resistência (Ω)";
  }

  if (selectValue.value == "potencia") {
    // Se a opção for "potência (W)" coloque os seguintes valores de entrada
    currentName.innerHTML = "Tensão (V)";
    resistanceName.innerHTML = "Corrente (I)";
    resultName.innerHTML = "Potência (W)";
  }
  if (selectValue.value == "tensao") {
    // Se a opção for "Tensão", redefina os valores dos campos de entrada
    currentName.innerHTML = "Corrente (I)";
    resistanceName.innerHTML = "Resistência (Ω)";
    resultName.innerHTML = "Tensão (V)";
  }
}

// Realiza o reset para as configurações iniciais
function resetValues() {
  fisrtInputValue.value = "";
  secondInputValue.value = "";
  resultValue.value = "";

  // Redefinir os nomes para os valores originais
  const currentName = document.getElementById("current-name");
  const resistanceName = document.getElementById("resistance-name");
  const resultName = document.getElementById("result-name");

  selectValue.innerHTML = originalSelectValue;
  currentName.innerHTML = originalCurrentName;
  resistanceName.innerHTML = originalResistanceName;
  resultName.innerHTML = orinalResultName;
}

// Armazenar os valores originais dos nomes
originalSelectValue = document.getElementById("select-value").innerHTML;
originalCurrentName = document.getElementById("current-name").innerHTML;
originalResistanceName = document.getElementById("resistance-name").innerHTML;
orinalResultName = document.getElementById("result-name").innerHTML;

//chama as funções abaixo a partir de cada evento

selectValue.addEventListener("change", changeName);
buttonCalculate.addEventListener("click", calculateValue);
buttonReset.addEventListener("click", resetValues);
