/*
*
* Project     : Plato - Demo
* Author      : @jansanchez
* Description : Project for learn to use the npm package called plato
* 
*/

StringTwo = function(originalText, caseType){
	this.text = originalText;
	this.output = '';
	this.to(caseType);
	return this.getText();
}

StringTwo.prototype.to = function(caseType) {
	switch(caseType){
		case 'lower':
			this.toLower();
		break;
		case 'upper':
			this.toUpper();
		break;
		default:
			this.toLower();
		break;
	};
};

StringTwo.prototype.toLower = function() {
	this.text = this.text.toString().toLowerCase();
	return this.text;
};

StringTwo.prototype.toUpper = function() {
	this.text = this.text.toString().toUpperCase();
	return this.text;
};

StringTwo.prototype.getText = function() {
	this.output = this.text;
	return this.output;
};


var newText = new StringTwo('mInUsCulA', 'upper');

console.log(newText.output);

