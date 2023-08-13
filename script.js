// ... (previous code) ...

function appendToResult(value) {
    result.value += value;
  }
  
  function clearResult() {
    result.value = '';
  }
  
  function deleteLast() {
    result.value = result.value.slice(0, -1);
  }
  
  function calculate() {
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = 'Error';
    }
  }
  
  // Allow keyboard inputs
  document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key === "Enter") {
      calculate();
    } else if (key === "Escape") {
      clearResult();
    } else if (key === "Backspace") {
      deleteLast();
    } else {
      appendToResult(key);
    }
  });
  