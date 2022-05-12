class Morpion {

    grille = [];
    tourJoueur1 = true;
    compteurCoup = 0;

    constructor() {
    }

    jouerCoup(idCase){
        if(typeof this.grille[idCase] != "undefined") {
            return this.grille[idCase];
        }
        this.compteurCoup++;
        if(this.tourJoueur1){
            this.grille[idCase] = 'X';
            this.tourJoueur1 = false;
        } else {
            this.grille[idCase] = 'O';
            this.tourJoueur1 = true;
        }
        return this.grille[idCase];
    }

    verif() {
        return this.verifLigne() || this.verifColonne() || this.verifDiag();
    }

    verifLigne(){
        if(typeof this.grille[1] !== "undefined" && this.grille[1] === this.grille[2] && this.grille[1] === this.grille[3]){
            return true;
        } else if(typeof this.grille[4] !== "undefined" && this.grille[4] === this.grille[5] && this.grille[4] === this.grille[6]){
            return true;
        } else if(typeof this.grille[7] !== "undefined" && this.grille[7] === this.grille[8] && this.grille[7] === this.grille[9]){
            return true;
        }
        return false;
    }

    verifColonne(){
        if(typeof this.grille[1] !== "undefined" && this.grille[1] === this.grille[4] && this.grille[1] === this.grille[7]){
            return true;
        } else if(typeof this.grille[2] !== "undefined" && this.grille[2] === this.grille[5] && this.grille[2] === this.grille[8]){
            return true;
        } else if(typeof this.grille[3] !== "undefined" && this.grille[3] === this.grille[6] && this.grille[3] === this.grille[9]){
            return true;
        }
        return false;
    }

    verifDiag(){
        if(typeof this.grille[1] !== "undefined" && this.grille[1] === this.grille[5] && this.grille[1] === this.grille[9]){
            return true;
        } else if(typeof this.grille[3] !== "undefined" && this.grille[3] === this.grille[5] && this.grille[3] === this.grille[7]){
            return true;
        }
        return false;
    }

}

let morpion = new Morpion();

function jouerCoup(bouton){
    let pion = morpion.jouerCoup(bouton.id);
    bouton.innerHTML = pion;
    if(morpion.verif()) {
        document.getElementById("message").innerHTML = `Victoire du joueur ${ pion }`;
        let boutons = document.getElementsByTagName("button");
        for (const bouton of boutons) {
            bouton.setAttribute("disabled","disabled");
        }
    } else if(morpion.compteurCoup == 9){
        document.getElementById("message").innerHTML = `Egalité`;
    }
}