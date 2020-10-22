var screen = document.getElementById("screen");
    function writeit(el){
      var additional = el.value;
      screen.value = screen.value + additional;
    }
    function evaluateit(){
      var result = screen.value;
      result = result.replaceAll("x","*");
      screen.value = eval(result);
    }
    function removeOne(){
      screen.value = screen.value.slice(0,-1);
    }
    function clr(){
      screen.value="";
    }