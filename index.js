function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }
  
  function calculate() {
    let expression = document.getElementById("display").value;
    let result = eval(expression);
    document.getElementById("display").value = result;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  function clearInput(){
    let displayValue = document.getElementById("display").value;
    if (displayValue.length > 0){
      document.getElementById("display").value = displayValue.slice(0, -1);

    }
  }
    