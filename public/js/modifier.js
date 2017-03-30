function modifier(element){

	var parent = element.parentElement;
  	
  	var nom = parent.children[0].innerHTML;
	var prenom = parent.children[1].innerHTML;
	var telephone = parent.children[2].innerHTML;
  	var id = parent.children[3].innerHTML;

		document.getElementById("nom").value = nom;
		document.getElementById("prenom").value = prenom;
		document.getElementById("telephone").value = telephone;
		document.getElementById("_id").value = id;
	

	var elmForm = document.getElementById("formulaire");
	elmForm.submit();
}