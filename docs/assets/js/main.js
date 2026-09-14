/* LOAD INCLUDE FILES INTO PAGE */
async function loadInclude(id, file) {
    const container = document.getElementById(id);
    if (!container) return;

    try {
        const response = await fetch(file);
        const html = await response.text();
        container.innerHTML = html;
    } catch (err) {
        console.error(`Include failed: ${file}`, err);
    }
}

/* INITIALIZE PAGE */
document.addEventListener("DOMContentLoaded", () => {
    loadInclude("header", "includes/header.html");
    loadInclude("footer", "includes/footer.html");
    loadInclude("sidebar", "includes/sidebar.html");
    loadInclude("breadcrumbs", "includes/breadcrumbs.html");
});

