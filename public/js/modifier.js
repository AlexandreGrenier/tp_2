function modifier(element){

	var parent = element.parentElement;
  	
  	var nom = parent.children[0].innerHTML;
	var prenom = parent.children[1].innerHTML;
	var telephone = parent.children[2].innerHTML;
  	var id = parent.children[3].innerHTML;

		document.getElementById("nom2").value = nom;
		document.getElementById("prenom2").value = prenom;
		document.getElementById("telephone2").value = telephone;
		document.getElementById("_id2").value = id;
	

	//var elmForm = document.getElementById("formulaire");
	//this.submit(elmForm);
}