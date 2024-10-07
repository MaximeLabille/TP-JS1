const output = document.getElementById("output")

function setOutput(text, isError=false) {
    output.innerText = text;
    if (isError == true) {
        output.classList.add('error');
        setTimeout(() => {
            output.classList.remove('error');
        }, 600);
    } else {
        output.classList.add('active');
        setTimeout(() => {
            output.classList.remove('active');
        }, 300);
    }
}

function majorite() {
    let age = parseInt(prompt("Quel est votre age?"));
    if (age >= 18) {
        setOutput("Vous etes majeur car vous avez 18 ans ou plus.")
    } else if (age <= 17) {
        setOutput("Vous etes mineur car vous avez moins de 18 ans.");
    } else {
        setOutput("Certaines valeurs sont manquantes ou invalides", true)
    }
}

function nomprenom() {
    let nom = prompt("Quel est votre nom?");
    let prenom = prompt("Quel est votre prénom?");

    if (prenom == null || prenom == "") {setOutput("Certaines valeurs sont manquantes ou invalides", true); return};
    if (nom == null || nom == "") {setOutput("Certaines valeurs sont manquantes ou invalides", true); return};
    setOutput(`Bonjour ${nom} ${prenom}`);
}

function changecolor() {
    const eventelem = event.target;
    var possibleValues = ["blue", "green", "yellow", "red"];
    let color = prompt("Quel est votre couleur voulez vous choisir ? (blue, green, yellow, red)");
    if (possibleValues.includes(color)) {
        setOutput(`La couleur de fond a été changer par ${color}`);
        document.body.style.backgroundColor = color;
        eventelem.disabled = true;
        setTimeout(() => {
            document.body.style = "";
            eventelem.removeAttribute("disabled");
        }, 5000);
    } else {
        setOutput("Certaines valeurs sont manquantes ou invalides", true);
    }
}

function moyenne() {
    let premierenote = parseInt(prompt("(1/3) Veuille mettre une note sur 20."));
    let secondenote = parseInt(prompt("(2/3) Veuille mettre une note sur 20."));
    let troisemenote = parseInt(prompt("(3/3) Veuille mettre une note sur 20."));

    if (premierenote > 20 || secondenote > 20 || troisemenote > 20) {
        setOutput("Certaines valeurs sont manquantes ou invalides", true);
        return
    }

    if (premierenote < 1 || secondenote < 1 || troisemenote < 1) {
        setOutput("Certaines valeurs sont manquantes ou invalides", true);
        return
    }

    let resultat = ((premierenote+secondenote+troisemenote)/3);
    let resultatround = (Math.round(resultat * 100) / 100).toFixed(2);
    
    setOutput(`le resultat de vos notes fait une moyenne de ${resultatround}/20`);
}