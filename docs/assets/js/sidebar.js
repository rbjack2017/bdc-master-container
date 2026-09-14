document.addEventListener("DOMContentLoaded", () => {
    /* Collapsible sections */
    document.querySelectorAll(".sidebar-section-title").forEach(title => {
        title.addEventListener("click", () => {
            title.parentElement.classList.toggle("collapsed");
        });
    });

    /* Active link */
    const current = window.location.pathname.split("/").pop();
    document.querySelectorAll(".sidebar-links a").forEach(link => {
        if (link.getAttribute("href") === current) {
            link.classList.add("active");
        }
    });
});
