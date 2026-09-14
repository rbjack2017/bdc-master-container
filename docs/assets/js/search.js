document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("search-input");
    const list = document.getElementById("search-suggestions");
    const links = Array.from(document.querySelectorAll(".sidebar-links a"));

    if (!input || !list) return;

    input.addEventListener("input", () => {
        const term = input.value.toLowerCase();
        list.innerHTML = "";

        if (!term) return;

        const matches = links
            .filter(link => link.textContent.toLowerCase().includes(term))
            .slice(0, 8);

        matches.forEach(link => {
            const li = document.createElement("li");
            li.textContent = link.textContent;
            li.addEventListener("click", () => {
                window.location.href = link.getAttribute("href");
            });
            list.appendChild(li);
        });
    });
});
