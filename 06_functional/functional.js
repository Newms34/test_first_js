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