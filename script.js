document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = {
            username: form.username.value.trim(),
            email: form.email.value.trim(),
            password: form.password.value.trim(),
        };

        try {
            const response = await fetch('https://example.com/api/login', { // ⬅️ здесь замени URL на свой сервер
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                alert('Connexion réussie ✅');
                // редирект, если надо:
                // window.location.href = '/dashboard.html';
            } else {
                alert('Erreur : ' + (result.message || 'Connexion échouée.'));
            }

        } catch (error) {
            console.error('Erreur de connexion:', error);
            alert('Une erreur est survenue lors de la connexion.');
        }
    });
});
