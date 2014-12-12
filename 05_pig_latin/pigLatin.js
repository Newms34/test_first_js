/*first, some notes: 
the "translates a word beginning with three consonants" and "counts 'sch' as a single phoneme" can be treated by a single element: that all consonant clusters are treated as one 'piece'.
*/

function translate(haecVerba){
	var verbaLecta = haecVerba.split(' ');
	var verbaFactura  = '';
	for (var i=0;i<verbaLecta.length;i++){
		//loop to examine and modify each word
		var hocVerbum = verbaLecta[i].toLowerCase();//isolate the current word. For science.
		if (hocVerbum[0]=='a' || hocVerbum[0]=='e' || hocVerbum[0]=='i' ||hocVerbum[0]=='o' ||hocVerbum[0]=='u'){
			//it's a vowel, so just stick 'ay' on the end. 
			verbaLecta[i] = hocVerbum + 'ay';//ay lmao
		}
		else {
			//starts with a consonant, so let's pass this to a separate function.
			verbaLecta[i] = consonant(hocVerbum);
			
		}
	}

	for (var n=0; n<verbaLecta.length;n++){
		verbaFactura += verbaLecta[n];
		if (verbaLecta[n+1]){
			verbaFactura += ' ';
		}
	}
	return verbaFactura;
}

function consonant (consWord) {
	//separate fxn to deal with consonants
	if (consWord[0]!='q'){
		//doesnt start with qs
		var consString =consWord[0];//this will hold the list of consonants
		var consNum = 1;
		while (consWord[consNum]!='a' && consWord[consNum]!='e' && consWord[consNum]!='i' && consWord[consNum]!='o' && consWord[consNum]!='u'){
			consString += consWord[consNum];
			if (consWord[consNum]=='q' && consWord[consNum+1] == 'u'){
				//'qu' phoneme!
				consString += 'u';
				consNum++;
			}
			consNum++;
		}
		//So now we need to find a way to remove the 'consString' from the word, move to end, add 'ay';
		return consWord.replace(consString,'')+consString+'ay';
	}
	else if (consWord[1]=='u'){
		//starts with 'qu'
		return consWord.substring(2) + consWord.substring(0,2) + 'ay';
	}
}