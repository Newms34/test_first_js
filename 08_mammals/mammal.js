var Mammal =  function Mammal(name){
	this.name = name || undefined;
	this.offspring=[];
}

Mammal.prototype = {
	sayHello : function(){
		return "My name is "+this.name+", I'm a "+this.constructor.name;
	},
	haveBaby : function () {
		var zomgABaby = new Mammal ("Baby "+ this.name);
		this.offspring.push(zomgABaby);
		return zomgABaby;
	}
};

Mammal.prototype.constructor = Mammal;

var Cat = function Cat (name, color) {
	Mammal.call (this, name);
	this.color = color || undefined;
};

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.haveBaby = function (color) {
	var zomgAKitty = Mammal.prototype.haveBaby.call(this);
	zomgAKitty.color = color || undefined;
	return zomgAKitty;
}