(function(){
  var display = [];
  var calc = [];
  var displayContainer = $('.display');
  var $button = $('.button')
  function clearDisplay(){
    display = [];
  }
  function clearNumbers(){
    calc = [];
  }
  function displayNumbers(){
    if(display.length === 0) {
      displayContainer.text("0");
    } else {
      displayContainer.text(display);
    }
  }

  function arrayManipulation(){
    // Split array at
      // multiply
      // divide
      // add
      // subract
    // Join Numbers (including decimals)
  }

  // User Actions
  $('[data-operator]').on("click", function(){
    var operationValue = $(this).attr('data-operator');
    if(operationValue !== "equal"){
      clearDisplay();
      displayNumbers();
      calc.push(operationValue);
    } else if(operationValue === "equal") {
      if(calc.length){
        displayContainer.text("Answer!");
      }
    }
  });

  $('[data-number]').on("click", function(){
    var buttonValue = $(this).attr("data-number");
    display += buttonValue;
    calc.push(buttonValue);
    displayNumbers();
  });

  $('[data-memory="clear"]').on("click", function(){
    clearDisplay();
    clearNumbers();
    displayNumbers();
  });

})();