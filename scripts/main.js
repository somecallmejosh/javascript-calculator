(function(){
  var display;
  var myNum;
  var evaluated = false;
  var $displayContainer = $('.display');
  clearDisplay();
  clearNumbers();
  function clearDisplay(){
    display = [];
  }
  function clearNumbers(){
    myNum = [];
  }
  function displayNumbers(){
    if(display.length === 0) {
      $displayContainer.text("0");
    } else {
      $displayContainer.text(display);
    }
  }

  $('[data-calc]').on("click", function(){
    var select = $(this).attr('data-calc');
    if(evaluated){
      clearDisplay();
      clearNumbers();
      evaluated = false;
    }
    if (select !== "+" && select !== "/" && select !== "-" && select !== "*") {
      display += select;
      displayNumbers();
      //console.log(display);
    } else {
      clearDisplay();
    }
    myNum += select;
    //console.log(myNum);
  });

  $('[data-operator="equal"]').on("click", function(){
    evaluated = true;
    // console.log(evaluated);
    // console.log(eval(myNum));
    $displayContainer.text(eval(myNum));
  })

  $('[data-memory="clear"]').on("click", function(){
    clearDisplay();
    clearNumbers();
    displayNumbers();
  });
})();