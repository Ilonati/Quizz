const form = document.getElementById("quiz-form");
const answersContainer = document.getElementById("answers-container");
const addAnswerBtn = document.getElementById("add-answer");

let answerIndex = 0;

function addAnswerField() {
    const block = document.createElement("div");
    block.className = "answer-block";

    const input = document.createElement("input");
    input.type = "text";
    input.name = `answer_${answerIndex}`;
    input.placeholder = "Réponse possible";
    input.required = true;

    const correctBtn = document.createElement("button");
    correctBtn.type = "button";
    correctBtn.className = "mark-correct-btn";
    correctBtn.textContent = "✅";

    correctBtn.addEventListener("click", () => {
        document.querySelectorAll(".mark-correct-btn").forEach(btn => {
            btn.classList.remove("selected");
        });
        correctBtn.classList.add("selected");

        document.querySelectorAll(".answer-block input").forEach(inp => {
            inp.classList.remove("correct");
        });
        input.classList.add("correct");
    });

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "🗑️";
    removeBtn.className = "remove-btn";
    removeBtn.addEventListener("click", () => block.remove());

    block.appendChild(input);
    block.appendChild(correctBtn);
    block.appendChild(removeBtn);
    answersContainer.appendChild(block);

    answerIndex++;
}

addAnswerBtn.addEventListener("click", addAnswerField);


addAnswerField();

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const questionText = document.getElementById("question-input").value;
    const answers = [];
    let correct = null;

    document.querySelectorAll(".answer-block input").forEach(input => {
        const text = input.value;
        answers.push(text);
        if (input.classList.contains("correct")) {
            correct = text;
        }
    });

    if (!correct) {
        alert("⚠️ Veuillez sélectionner la bonne réponse.");
        return;
    }

    const payload = {
        question: questionText,
        answers: answers,
        correct: correct
    };

    // fetch("http://localhost:3000/api/quiz", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(payload)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         alert("Question envoyée !");
    //         form.reset();
    //         answersContainer.innerHTML = "";
    //         addAnswerField();
    //     })
    //     .catch(err => {
    //         alert("Erreur lors de l'envoi.");
    //         console.error(err);
    //     });
});
