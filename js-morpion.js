//valider que l'input utilisateur est soit O soit un X
function validationSpecifique() {
    //recuperer l'input utilisateur dans une variable qu'on upperCase
    let choixUtilisateur = String(document.getElementById("case1").value).toUpperCase();
    //   console.log(choixUtilisateur);
    const croix = "X";
    const rond = "O";
    let paragrapheMessage = document.getElementById("test");
    //On compare la saisie upperCased a rond ou croix pour valider la saisie
    if (choixUtilisateur != croix && choixUtilisateur != rond) {
        //si la saisie est incorrecte on efface la saisie
        document.getElementById("case1").value = "";
        paragrapheMessage.innerHTML = "Il faut rentrer un X ou un O"
    } else {
        paragrapheMessage.innerHTML = "Ok on joue!"
    }
}
let compteur = 1;
let premierChoix;
function validation(id) {
    //recuperer l'input utilisateur dans une variable qu'on upperCase
    choixUtilisateur = document.getElementById(id).value.toUpperCase();
    console.log(id);
    console.log(choixUtilisateur);
    const croix = "X";
    const rond = "O";
    let paragrapheMessage = document.getElementById("test");
    //On compare la saisie upperCased a rond ou croix pour valider la saisie
    if (choixUtilisateur != croix && choixUtilisateur != rond) {
        //si la saisie est incorrecte on efface la saisie
        document.getElementById(id).value = "";
        paragrapheMessage.innerHTML = "Il faut rentrer un X ou un O"
    } else {
        paragrapheMessage.innerHTML = "Ok on joue!"
        document.getElementById(id).readOnly = true;
        if (compteur == 1) {
            premierChoix = choixUtilisateur;
        } else if (compteur % 2 == 0) {
            console.log("je suis pair");
        } else {
            console.log("je suis impair")
        }
        compteur++;
        console.log("Mon premier choix est " + premierChoix);
        victoire();
        // troisAlignes("1", "2", "3");

    }
}
function troisAlignes(a, b, c) {
    if (document.getElementById(a).value != "" && document.getElementById(a).value == document.getElementById(b).value && document.getElementById(b).value == document.getElementById(c).value) {
        console.log("Cond1. la case n'est pas vide");
        console.log("Cond2. a = b");
        console.log("Cond3. b = c");
        return true;
    }
}

function victoire() {
    if (
        troisAlignes("1", "2", "3") ||
        troisAlignes("4", "5", "6") ||
        troisAlignes("7", "8", "9") ||
        troisAlignes("1", "4", "7") ||
        troisAlignes("2", "5", "8") ||
        troisAlignes("3", "6", "9") ||
        troisAlignes("1", "5", "9") ||
        troisAlignes("3", "5", "7")
    ) {
        console.log("Vous avez gagné");
        return true;
    }
}