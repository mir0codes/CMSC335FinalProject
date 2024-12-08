document.addEventListener("DOMContentLoaded", () => {
    console.log("League of Legends Portal Loaded");

    const favoriteForm = document.querySelector("#favorite-form");
    if (favoriteForm) {
        favoriteForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Form submitted successfully!");
            favoriteForm.submit();
        });
    }
});
