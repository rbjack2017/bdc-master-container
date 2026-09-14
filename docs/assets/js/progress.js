/* PROGRESS TRACKING */
document.addEventListener("DOMContentLoaded", () => {
    const page = window.location.pathname.split("/").pop().replace(".html", "");
    const key = `progress-${page}`;

    /* Mark page as visited */
    localStorage.setItem(key, "completed");

    /* Update sidebar badges */
    const links = document.querySelectorAll(".sidebar a");

    links.forEach(link => {
        const name = link.getAttribute("href").replace(".html", "");
        const done = localStorage.getItem(`progress-${name}`);

        if (done) {
            const badge = document.createElement("span");
            badge.className = "badge badge-sage";
            badge.textContent = "✓";
            link.appendChild(badge);
        }
    });
});
