function setLanguage(language) {

    language = language === "tr" ? "tr" : "en";
    try { localStorage.setItem("siteLanguage", language); } catch (_) {}

    document.documentElement.lang = language;

    const elements = document.querySelectorAll("[data-tr][data-en]");

    elements.forEach((element) => {

        if (language === "tr") {
            element.textContent = element.dataset.tr;
        } else {
            element.textContent = element.dataset.en;
        }

    });


    const trButton = document.getElementById("tr-button");
    const enButton = document.getElementById("en-button");


    if (trButton) {
        trButton.classList.toggle(
            "active",
            language === "tr"
        );
    }


    if (enButton) {
        enButton.classList.toggle(
            "active",
            language === "en"
        );
    }

    document.dispatchEvent(new Event("languagechange"));
}


document.addEventListener("DOMContentLoaded", function () {

    let savedLanguage = "en";
    try { savedLanguage = localStorage.getItem("siteLanguage") || "en"; } catch (_) {}

    setLanguage(savedLanguage);

});
document.querySelectorAll('.dropdown-button').forEach(button => {
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => {
        const open = button.parentElement.classList.toggle('is-open');
        button.setAttribute('aria-expanded', String(open));
    });
    button.parentElement.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            button.parentElement.classList.remove('is-open');
            button.setAttribute('aria-expanded', 'false');
            button.blur();
        }
    });
});
