var oHp ={
	"Sirius"	:"Black",
	"Remus"		:"Lupin",
	"Luna"		:"Lovegood"

};
oHp['Albus'] = "Dumbledore";
oHp.Harry = "Potter";
var monObjet = oHp;

function sfficheObjet(monObjet){}
for (propriete in monObjet){
	console.log(propriete+' - '+monObjet[propriete]);
}
}

