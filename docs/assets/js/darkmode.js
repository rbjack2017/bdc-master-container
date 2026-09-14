/* DARK MODE */
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkmode-toggle");
    const saved = localStorage.getItem("darkmode");

    if (saved === "on") {
        document.body.classList.add("darkmode");
    }

    if (!toggle) return;

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("darkmode");

        const active = document.body.classList.contains("darkmode");
        localStorage.setItem("darkmode", active ? "on" : "off");
    });
});
