/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
function addToResult(value) {
  document.getElementById('result').value += value;
}

function calculate() {
  try {
    document.getElementById('result').value = eval(document.getElementById('result').value);
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function clearResult() {
  document.getElementById('result').value = '';
}

