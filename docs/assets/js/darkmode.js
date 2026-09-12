document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkModeToggle");

    const applyMode = (mode) => {
        document.documentElement.setAttribute("data-theme", mode);
        localStorage.setItem("theme", mode);
        toggle.textContent = mode === "dark" ? "☀️" : "🌙";
    };

    const saved = localStorage.getItem("theme") || "light";
    applyMode(saved);

    toggle.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        applyMode(current === "light" ? "dark" : "light");
    });
});
