(function(){
  var display = [];
  var displayContainer = $('.display');
  var $button = $('.button')

  function displayNumbers(){
    if(display.length === 0) {
      displayContainer.text("0");
    } else {
      displayContainer.text(display);
    }
  }

  function clearDisplay(){
    display = [];
  }
  


  // User Actions

  $('[data-number]').on("click", function(){
    var buttonValue = $(this).attr("data-number");
    display += buttonValue;
    displayNumbers();
  });

  $('[data-operator="clear"]').on("click", function(){
    clearDisplay();
    displayNumbers();
  })

})();