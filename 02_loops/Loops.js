function repeat (toRepeat, numRepeats) {
	var outStr="";
	var currN=0;
	while (currN<numRepeats) {
		outStr+=toRepeat;
		currN++;
	}
	return outStr;
}

function join (myArr , sep) {

	var joinStr="";//This is what's gonna get spat out at the end.
	// var mySep = sep.toString() || "";//convert the seperator thingy to a string, in case it's like a number, or some wool, or yarn (i.e., not string)
	for (var n=0; n<myArr.length;n++) {
		joinStr += myArr[n];
		if (n == myArr.length-1) {
			
		}
		else if (sep){
			joinStr +=sep;
		}
		else {
			
		}
	} 
	return joinStr;
}

function sum (sumTzu) {
	var dimSum = 0;
	for (var i=0;i<sumTzu.length;i++){
		dimSum += sumTzu[i];
	}
	return dimSum;//mmm, dim sum
}

function paramify(hashBrowns) {
	//variables in Latin. Because why not.
	//protip: Don't program when hungry.
	var narraturi = "";
	var n=0;//counter! this one sees how many we have
	var c=0;
	var clavis = Object.keys(hashBrowns);
	var ordinati = clavis.sort();

	for (var numInd in hashBrowns){
		n++;
	}
	for (c=0;c<ordinati.length; c++){
			if (c < ordinati.length-1)
				{
					narraturi += ordinati[c] + "=" + hashBrowns[ordinati[c]] + "&";
				}
			else
				{
					narraturi += ordinati[c] + "=" + hashBrowns[ordinati[c]];
				}
	}
	return narraturi;
}

function factorial (numerus){
	//so, why DOES 0! = 1?
	var numerationes = 1;//because, duh, if we start off with zero, we'd end with zero.
	for (var iste = 1; iste<numerus+1; iste++){
		numerationes = numerationes * iste;
	}
	return numerationes;
}

function concat_string (){
	var hicOrdo = [];
	var epistulaeIunctae = "";
	for (var i = 0; i<arguments.length; i++)
		{
			hicOrdo.push(arguments[i]);
		}
	for (var i = 0; i<hicOrdo.length; i++)
		{
			epistulaeIunctae += hicOrdo[i];
		}
	return epistulaeIunctae;
}