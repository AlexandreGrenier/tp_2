var fs = require("fs"); // importation du modue de gestion de fichiers
var http = require("http"); // importe le module serveur http

var obj;
fs.readFile('06_fichier.json', function (err, data){
	if(err) return console.error(err);
	obj = JSON.parse(data);
	console.log(obj.toString());
});


function tableauDesProvinces(){
	 var chaine = "";
  	chaine = chaine+"<h1>Tab de provinces</h1>";

	chaine = chaine+"<table style='border-right: 1px solid black'>";
	for (province in obj){

		chaine = chaine+"<tr><td style='border: 1px solid black' >" + province + "</td><td style='border-bottom: 1px solid black'>" + obj[province].toString() + "</td></tr>";
	}
	chaine = chaine+"</table>";

	return chaine;
}

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html; charset=utf8"});
  
  response.write(tableauDesProvinces());
  
  response.end(); 
}).listen(3000);

console.log("Program Ended");