$(function() {
	$('body').on('keydown', '.alpha', function (e) {
	  	var key = e.which;
	    
	    if (e.shiftKey || e.ctrlKey || e.altKey) {

	       if (!((key == 8) || (key == 9) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
	        	e.preventDefault();
	      }
	    } else {
	    
	      var key = e.which;
	      
	      if (!((key == 222) || (key == 8) || (key == 9)  || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
	      
	        e.preventDefault();
	      }

	    }
	    
	});

	$('body').on('keyup', '.numeric', function (e) {
	
		 if (event.which >= 37 && event.which <= 40) {
				event.preventDefault();
			}

			var currentVal = $(this).val();
			var testDecimal = testDecimals(currentVal);
			if (testDecimal.length > 1) {
					// console.log("You cannot enter more than one decimal point");
					currentVal = currentVal.slice(0, -1);
			}
			$(this).val(replaceCommas(currentVal)); 
	});

	function testDecimals(currentVal) {
			var count;
			currentVal.match(/\./g) === null ? count = 0 : count = currentVal.match(/\./g);
			return count;
	}

	function replaceCommas(yourNumber) {
			var components = yourNumber.toString().split(".");
			if (components.length === 1) 
					components[0] = yourNumber;
			components[0] = components[0].replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			if (components.length === 2)
					components[1] = components[1].replace(/\D/g, "");
			return components.join(".");
	}
	
})