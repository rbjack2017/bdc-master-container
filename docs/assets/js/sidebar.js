/* HIGHLIGHT ACTIVE LINK */
document.addEventListener("DOMContentLoaded", () => {
    const current = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".sidebar a");

    links.forEach(link => {
        if (link.getAttribute("href") === current) {
            link.classList.add("active");
        }
    });
});

/* MOBILE SIDEBAR TOGGLE */
document.addEventListener("click", e => {
    if (e.target.id === "sidebar-toggle") {
        document.body.classList.toggle("sidebar-open");
    }
});
