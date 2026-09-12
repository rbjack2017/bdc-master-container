document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("trainingSearch");
    if (!input) return;

    input.addEventListener("input", () => {
        const query = input.value.toLowerCase();
        const cards = document.querySelectorAll(".training-card");

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(query) ? "block" : "none";
        });
    });
});
