function countWords (w){
	wArr = w.split(" ");
	return wArr.length;
}

function makeAdder(thingToAdd){
	return function (addTo){
		return thingToAdd + addTo;
	}
}

function forEach (wat,watDo){
	for (var i = 0; i<wat.length; i++){
		watDo(wat[i]);
	}
}

function map (wat, watDo){
	for (var i=0; i<wat.length; i++){
		wat[i] = watDo(wat[i]);//do the functionystuff on each element
	}
	return wat;
}

function filter(wat,watDo){
	var filtered=[];//where we'll store our filtered stuff
	for (var i=0;i<wat.length;i++){
		if (watDo(wat[i])){
			filtered.push(wat[i]);
		}
	}
	return filtered;
}

function contains (arr,toFind) {
	var found=false;
	var dat;
	for (dat in arr) {
		(arr[dat]==toFind)? found=true: found=found; 
	}
	return found;
}

function reduce(arr,start,func) {
	var  result = arr[start];
	for (var n = start+1; n < arr.length; n++) {
		result = func(result, arr[n]);
	}
	return result;
}

function countWordsInReduce (arr1,arr2){
	return arr1.split(' ').length + arr2.split(' ').length;
}

function sum(arr){
	var addMe = function(one,two) {
		return one+two;
	};
	return reduce (arr,0,addMe);
}

function every(arr, func) {
	//returns true ONLY if everything is permitted. Uh, I mean true.
	var cantHandle=true;
	for (var i=0; i<arr.length;i++){
		if(!func(arr[i])){
			cantHandle=false;//we want the truth!
		}
	}
	return cantHandle;
}


function any(arr, func) {
	//kinda the opposite of the previous.
	//Notice that all we did here to be different is flip the 'true' and 'false' assignments, and change the 'if'
	var cantHandle=false;
	var func = func || function (e) {return e};//because sometimes we're not given a function.
	for (var i=0; i<arr.length;i++){
		if(func(arr[i])){
			cantHandle=true;
		}
	}
	return cantHandle;
}

function once(func){
	var done=false;
	return function(){
		if (!done){
			func();
			done=true;
		}
	}
}