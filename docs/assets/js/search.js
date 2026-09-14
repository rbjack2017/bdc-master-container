/* TRAINING SEARCH */
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("search-input");
    const items = document.querySelectorAll(".sidebar a");

    if (!input) return;

    input.addEventListener("input", () => {
        const term = input.value.toLowerCase();

        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(term) ? "block" : "none";
        });
    });
});
