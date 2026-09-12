document.addEventListener("DOMContentLoaded", () => {
    // Update card statuses
    const cards = document.querySelectorAll(".training-card");
    let completedCount = 0;

    cards.forEach(card => {
        const moduleKey = card.getAttribute("data-module");
        const statusEl = document.getElementById(`status-${moduleKey}`);

        const completed = localStorage.getItem(`module-${moduleKey}`) === "completed";

        if (completed) {
            statusEl.textContent = "Completed";
            statusEl.classList.add("completed");
            completedCount++;
        } else {
            statusEl.textContent = "Not completed";
            statusEl.classList.add("not-completed");
        }
    });

    // Progress bar
    const totalModules = cards.length;
    const percent = Math.round((completedCount / totalModules) * 100);

    const bar = document.getElementById("progressFill");
    const label = document.getElementById("progressLabel");

    bar.style.width = percent + "%";
    label.textContent = percent + "% Complete";
});
