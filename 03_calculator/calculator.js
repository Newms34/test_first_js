//quackulator
function Calculator () {
	this.inNum = 0;
	this.value=function(inNum){
		//simply return the value
		return this.inNum;
	};
	this.add = function (inNum){
		//add val to current inNum
		this.inNum += inNum;
	};
	this.subtract = function(inNum){
		//subtract val from current inNum
		this.inNum -= inNum;
	};
}