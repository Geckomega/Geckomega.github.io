document.addEventListener("DOMContentLoaded", () => {
  // Set default language
  applyLanguage("en");

  // Language switch buttons
  document.getElementById("lang-en").addEventListener("click", () => {
    applyLanguage("en");
  });

  document.getElementById("lang-fr").addEventListener("click", () => {
    applyLanguage("fr");
  });
});
