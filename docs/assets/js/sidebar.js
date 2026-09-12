document.addEventListener("DOMContentLoaded", () => {
    fetch("includes/sidebar.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("sidebar").innerHTML = html;
        });
});
