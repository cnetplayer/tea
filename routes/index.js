
/*
 * GET home page.
 */

var teas = require('../data');

var tea = require('../tea');

for(var number in teas) {
	teas[number] = tea(teas[number]);
}

exports.tea = function(req, res){
	var number = req.param('number');

	if (typeof teas[number] === 'undefined') {
		res.status(404).json({status: 'error'});
	} else {
		res.json(teas[number].getInformation());
	}
};

exports.arriving = function (req, res) {
	var number = req.param('number');

	if (typeof teas[number] === 'undefined') {
		res.status(404).json({status: 'error'});
	} else {
		teas[number].triggerArriving();
		res.json({status: 'done'});
	}
};

exports.list = function (req, res) {
	res.render('list', {
		title: 'Current Tea Inventory', 
		teas: teas});
};