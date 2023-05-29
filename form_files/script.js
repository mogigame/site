function sendEmil() {
    Email.send({
        SecureToken: "214e01c3-7745-4c31-ad90-718378bdcc0f",
        To: 'mogiserv@outlook.fr',
        From: 'lili24082008@gmail.com',
        Subject: "Candidature Minecraft",
        Body: "Prénom : " + document.getElementById("Prenom").value
            + "<br> Age : " + document.getElementById("age").value
            + "<br> Mail : " + document.getElementById("mail").value
            + "<br> disponibilitÃ© :" + document.getElementById("day").value
            + "<br>" + document.getElementById("time").value
            + "<br> Pourquoi moi et pas un autre : " + document.getElementById("autre").value
            + "<br> Quand est ce qu'il a rejoin le serveur : " + document.getElementById("date").value
            + "<br> quelle grade : " + document.getElementById("grade").value
            + "<br> Ses qualitÃ©s :" + document.getElementById("qualiter").value
            + "<br> Ses dÃ©faut : " + document.getElementById("defaut").value
            + "<br> Ce qu'il va apporter au staff : " + document.getElementById("apporter").value
    }).then(
        message => alert("Votre candidature a bien été envoyer")
    );
}