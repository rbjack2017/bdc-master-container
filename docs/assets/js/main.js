document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("loadingOverlay");
    overlay.style.display = "flex";

    Promise.all([
        fetch("includes/header.html").then(r => r.text()).then(h => {
            document.getElementById("header").innerHTML = h;
        }),
        fetch("includes/sidebar.html").then(r => r.text()).then(h => {
            document.getElementById("sidebar").innerHTML = h;
        }),
        fetch("includes/footer.html").then(r => r.text()).then(h => {
            document.getElementById("footer").innerHTML = h;
        }),
        fetch("includes/breadcrumbs.html").then(r => r.text()).then(h => {
            document.getElementById("breadcrumbs").innerHTML = h;
        })
    ]).finally(() => {
        overlay.style.display = "none";
    });
});
