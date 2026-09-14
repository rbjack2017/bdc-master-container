document.addEventListener("DOMContentLoaded", () => {
    const page = window.location.pathname.split("/").pop().replace(".html", "");
    const key = `progress-${page}`;

    /* Mark current page completed */
    localStorage.setItem(key, "completed");

    /* Sidebar badges */
    document.querySelectorAll(".sidebar-links a").forEach(link => {
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
