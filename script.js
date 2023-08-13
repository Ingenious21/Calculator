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
  // ... Function keys calculator ...

function appendToResult(value) {
  const input = document.getElementById("result");
  const selectionStart = input.selectionStart;
  const selectionEnd = input.selectionEnd;

  const beforeCursor = input.value.slice(0, selectionStart);
  const afterCursor = input.value.slice(selectionEnd);

  input.value = beforeCursor + value + afterCursor;
  input.setSelectionRange(selectionStart + value.length, selectionStart + value.length);
  input.focus();
}
  
  // Allow keyboard inputs
document.addEventListener("keydown", function (event) {
  const key = event.key;
  const allowedKeys = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "+", "-", "*", "/", ".", "Enter", "Escape", "Backspace",
    "^", "r", "(", ")", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"
  ];

  if (allowedKeys.includes(key)) {
    event.preventDefault(); // Prevent default action for allowed keys
    if (key === "Enter") {
      calculate();
    } else if (key === "Escape") {
      clearResult();
    } else if (key === "Backspace") {
      deleteLast();
    } else if (key === "ArrowLeft") {
      moveCursor("left");
    } else if (key === "ArrowRight") {
      moveCursor("right");
    } else {
      appendToResult(key);
    }
  }
});

function moveCursor(direction) {
  const input = document.getElementById("result");
  const selectionStart = input.selectionStart;
  const selectionEnd = input.selectionEnd;

  if (direction === "left" && selectionStart > 0) {
    input.setSelectionRange(selectionStart - 1, selectionStart - 1);
  } else if (direction === "right" && selectionEnd < input.value.length) {
    input.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
  }
}
