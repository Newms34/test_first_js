var Calculator = function () {
	//constructor!
	var stufftodo = []; //initialize empty arr to hold the stack of operators and operands
	function result(wattodo) {
		//this fxn prepares the two values (i.e., at positions -1 and -2) for mathings.
		//first, we need to check that the calc's actualy got stuff to work with.
		if (stufftodo.length<=0){
			throw 'calculator is empty';
		}
		else {
			var num1 = stufftodo.pop();
			var num2 = stufftodo.pop();
			var mathIt = wattodo(num1,num2);
			stufftodo.push(mathIt);
		}
	}
	this.push = function (watNum){
		//add a number to our stack!
		stufftodo.push(watNum);
	}
	this.plus = function(){
		function add (num1,num2){
			return num1 + num2;
		}
		result(add);
	}
	this.minus = function(){
		function sub (num1,num2){
			return num2 - num1;
		}
		result(sub);
	}
	this.times = function(num1, num2){
		function mul (num1,num2){
			return num1 * num2;
		}
		result(mul);
	}
	this.divide = function (){
		function div (num1,num2){
			return num2 / num1;
		}
		result(div);
	}
	this.value = function(){
		return stufftodo[stufftodo.length-1];
	}

}