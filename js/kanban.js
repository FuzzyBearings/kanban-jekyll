$(document).ready(function(){

	// var url = "https://gitlab.asynchrony.com/api/v3/projects/591/issues?private_token=crcyqdFZzdaENN82uxCa";
	var url = "https://gitlab.asynchrony.com/api/v3/projects/591/issues";
	jQuery.ajax(url, {
		headers: { "PRIVATE-TOKEN": "crcyqdFZzdaENN82uxCa" },
		method: 'GET'
	}).success(function(data, textStatus, jqXHR) {
		console.log('found data: ' + data);
	}).error(function(jqXHR, textStatus, errorThrown) {
		console.log('error thrown: ' + errorThrown);
	});

});
