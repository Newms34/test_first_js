//temp!


function f2c(ftemp) {
    return (5 / 9) * (ftemp - 32);
}

function c2f(ctemp) {
    return (9 / 5) * ctemp + 32;
}
function Temperature(ftemp){

	if (!ftemp){
		//temp undefined, so set default vals
		var fahrenheit = 0;
		var celcius = 0;

		var far = false;
		var cel = false;
	}
	else {
		//look ma, i have a temp!
		//so it seems 'var' in a constructor = u cant haz to other stuff, while
		//'this.' means 'u can haz'
		var fahrenheit = ftemp;
		var celcius = 0;

		var far = true;
		var cel = false;
	}

	this.setFahrenheit = function(input){
		fahrenheit = input;
		far = true;
	}

	this.fahrenheit = function(){
		if(far) {
			return fahrenheit;
		}
		else if(cel) {
			return (((celcius * 9)/5)+32);
		}
	}

	this.setCelcius = function(input){
		celcius = input;
		cel = true;
	}

	this.celcius = function(){
		if(cel){
			return celcius;
		}
		else if (far){
			return (((fahrenheit-32)*5)/9);
		}
	}

}