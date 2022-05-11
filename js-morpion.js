//valider que l'input utilisateur est soit O soit un X
function validationSpecifique() {
    //recuperer l'input utilisateur dans une variable qu'on upperCase
    let choixUtilisateur = String(document.getElementById("case1").value).toUpperCase();
//   console.log(choixUtilisateur);

    const croix = "X";
    const rond = "O";
    let paragrapheMessage = document.getElementById("test");
//On compare la saisie upperCased a rond ou croix pour valider la saisie
    if (choixUtilisateur != croix && choixUtilisateur != rond ) {
        //si la saisie est incorrecte on efface la saisie
        document.getElementById("case1").value = "";
        paragrapheMessage.innerHTML = "Il faut rentrer un X ou un O"  
    }else{
        paragrapheMessage.innerHTML = "Ok on joue!"  
    }
}

function validation(id) {
    //recuperer l'input utilisateur dans une variable qu'on upperCase
    choixUtilisateur = document.getElementById(id).value.toUpperCase();
  console.log(id);
  console.log(choixUtilisateur);

    const croix = "X";
    const rond = "O";
    let paragrapheMessage = document.getElementById("test");
//On compare la saisie upperCased a rond ou croix pour valider la saisie
    if (choixUtilisateur != croix && choixUtilisateur != rond ) {
        //si la saisie est incorrecte on efface la saisie
        document.getElementById(id).value = "";
        paragrapheMessage.innerHTML = "Il faut rentrer un X ou un O"  
    }else{
        paragrapheMessage.innerHTML = "Ok on joue!"  
    }
}