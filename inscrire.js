document.getElementById("signup-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
        username: document.getElementById("username").value,
        prenom: document.getElementById("prenom").value,
        nom: document.getElementById("nom").value,
        email: document.getElementById("email").value,
        mot_de_passe: document.getElementById("mot_de_passe").value,
    };

    try {
        const response = await fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
            alert("Bienvenue " + data.prenom + " !");
            window.location.href = "quiz.html";
        } else {
            alert("Erreur : " + result.error);
        }
    } catch (err) {
        alert("Échec de la connexion au serveur.");
    }
});
