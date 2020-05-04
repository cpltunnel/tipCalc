calcButton = function(){
  var billAmt = Number(document.getElementById("bill").value);
  var tipMod = getTip(document.getElementById("service").value);
  function getTip(level){
	if (level == "great"){
		var tip = .25;
	} else if (level == "good"){
		var tip = .20;
	} else if (level == "average"){
		var tip = .15;
	} else if (level == "satisfactory"){
		var tip = .10;
	}
	return tip;  
  };
  var partySize = parseInt(document.getElementById("party").value);
  var splitBill = ((billAmt + (billAmt * tipMod)) / partySize).toFixed(2);
  
  function makeSplit(){
	if (isNaN(billAmt)){
	  alert ("Invalid bill amount");
    } else if (isNaN(partySize)){
	    alert ("Invalid party size");
      } else if (typeof tipMod === "undefined"){
		  alert ("Please select service level");
	    } else document.getElementById("total").innerHTML = "Tip: $" + ((billAmt * tipMod).toFixed(2)) + "<br/>" + "Total bill: $" + ((billAmt + (billAmt * tipMod)).toFixed(2)) + "<br/>" + "Each person owes: $" + splitBill;  
  };
  makeSplit();
}