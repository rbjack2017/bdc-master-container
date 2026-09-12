document.addEventListener("DOMContentLoaded", () => {
    fetch("includes/header.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("header").innerHTML = html;
        });

    fetch("includes/footer.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("footer").innerHTML = html;
        });

    fetch("includes/breadcrumbs.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("breadcrumbs").innerHTML = html;
        });
});
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("loadingOverlay");
    if (!overlay) return;

    // Show while includes are loading
    overlay.style.display = "flex";

    Promise.all([
        fetch("includes/header.html").then(res => res.text()).then(html => {
            document.getElementById("header").innerHTML = html;
        }),
        fetch("includes/footer.html").then(res => res.text()).then(html => {
            document.getElementById("footer").innerHTML = html;
        }),
        fetch("includes/sidebar.html").then(res => res.text()).then(html => {
            document.getElementById("sidebar").innerHTML = html;
        }),
        fetch("includes/breadcrumbs.html").then(res => res.text()).then(html => {
            document.getElementById("breadcrumbs").innerHTML = html;
        })
    ]).finally(() => {
        overlay.style.display = "none";
    });
});
