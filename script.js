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
      const response = await fetch("https://example.com/api/login", {
        // ⬅️ здесь замени URL на свой сервер
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Connexion réussie ✅");
        // редирект, если надо:
        // window.location.href = '/dashboard.html';
      } else {
        alert("Erreur : " + (result.message || "Connexion échouée."));
      }
    } catch (error) {
      console.error("Erreur de connexion:", error);
      alert("Une erreur est survenue lors de la connexion.");
    }
  });

  async function user() {
    const data = await fetch(
      "http://localhost:3000/users/689474b2fd72fd75f5ceda48",
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    return data;
  }

  async function login() {
    const userData = {
      email: "pepito@gmail.com",
      password: "pepitoAmigo_123",
    };
    const data = await fetch("http://localhost:3000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => data);

    return data;
  }

  async function questions() {
    const data = await fetch("http://localhost:3000/questions", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => {
        console.error("Erreur récupération questions", err);
        return [];
      });

    return data;
  }

  const buttonFetch = document.getElementById("fetchOnClick");
  buttonFetch.addEventListener("click", async () => {
    const loginData = await login();
    const userData = await user();
    const dataQuestions = await questions();
    console.log("Login info", loginData);
    console.log("User info:", userData);
    console.log("Questions info:", dataQuestions);
  });
});
