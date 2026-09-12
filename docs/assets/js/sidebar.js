document.addEventListener("DOMContentLoaded", () => {
    // Load sidebar HTML
    fetch("includes/sidebar.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("sidebar").innerHTML = html;

            // Sidebar toggle
            const toggle = document.getElementById("sidebarToggle");
            const sidebar = document.querySelector(".sidebar");

            toggle.addEventListener("click", () => {
                sidebar.classList.toggle("collapsed");
            });
        });
});
