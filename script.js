// Mapeando elementos do HTML
const buttonCalculate = document.querySelector(".button-calculate");
const buttonReset = document.querySelector(".button-reset");
const resultValue = document.querySelector(".result-value");
const fisrtInputValue = document.querySelector(".first-input-value");
const secondInputValue = document.querySelector(".second-input-value");
const selectValue = document.getElementById("select-value");

// função criada para realizar os calculos
function calculateValue() {
  const firstValue = parseFloat(fisrtInputValue.value);
  const secondValue = parseFloat(secondInputValue.value);

  // Verifica se os valores são válidos
  if (isNaN(firstValue) || isNaN(secondValue)) {
    resultValue.textContent = "Por favor, insira valores numéricos validos.";
  } else {
    // realizando os cálculos
    let result;
    if (selectValue.value == "tensao") {
      result = firstValue * secondValue;
      resultValue.textContent = `O resultado é: ${result}V`;
      console.log(result);
    }
    if (selectValue.value == "corrente") {
      result = firstValue / secondValue;
      resultValue.textContent = `O resultado é: ${result}A`;
    }
    if (selectValue.value == "resistencia") {
      result = firstValue / secondValue;
      resultValue.textContent = `O resultado é: ${result}Ω`;
    }
    if (selectValue.value == "potencia") {
      result = firstValue * secondValue;
      resultValue.textContent = `O resultado é: ${result}W`;
    }
  }
}
//Função criada para mapearos elementos do HTML
function changeName() {
  //Mapeando elementos do HTML
  const currentName = document.getElementById("current-name");
  const resistanceName = document.getElementById("resistance-name");
  const resultName = document.getElementById("result-name");

  //Definindo nomes com base na seleção
  if (selectValue.value == "corrente") {
    currentName.innerHTML = "Tensao (V)";
    resistanceName.innerHTML = "Resistência (Ω)";
    resultName.innerHTML = "Corrente (I)";
  }

  if (selectValue.value == "resistencia") {
    resistanceName.innerHTML = " Corrente (I)";
    currentName.innerHTML = "Tensão (V)";
    resultName.innerHTML = "Resistência (Ω)";
  }

  if (selectValue.value == "potencia") {
    currentName.innerHTML = "Tensão (V)";
    resistanceName.innerHTML = "Corrente (I)";
    resultName.innerHTML = "Potência (W)";
  }
  if (selectValue.value == "tensao") {
    currentName.innerHTML = "Corrente (I)";
    resistanceName.innerHTML = "Resistência (Ω)";
    resultName.innerHTML = "Tensão (V)";
  }
}
// Função criada para redefinir os valores para as configurações iniciais
function resetValues() {
  fisrtInputValue.value = "";
  secondInputValue.value = "";
  resultValue.textContent = "Resultado:";

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
