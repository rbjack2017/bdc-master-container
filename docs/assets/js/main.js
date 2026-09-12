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
