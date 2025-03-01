// Показать/скрыть выпадающее меню
const settingsBtn = document.querySelector(".settings-btn");
const dropdown = document.querySelector(".dropdown");

settingsBtn.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});

// Закрытие меню при клике вне его
document.addEventListener("click", (e) => {
  if (!settingsBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});

// Переключение языка
const languageSelect = document.getElementById("language-select");
const contentEn = document.querySelector(".content-en");
const contentRu = document.querySelector(".content-ru");
const contentPl = document.querySelector(".content-pl");
const contentZh = document.querySelector(".content-zh-cn");
const headerTitle = document.querySelector("h1");
const headerSubtitle = document.querySelector(".subtitle");

function setLanguage(lang) {
  let selectedLang = lang;
  if (lang === "system") {
    const systemLang = navigator.language.slice(0, 2);
    if (systemLang === "ru") selectedLang = "ru";
    else if (systemLang === "pl") selectedLang = "pl";
    else if (systemLang === "zh") selectedLang = "zh-cn";
    else selectedLang = "en";
  }

  document.documentElement.lang = selectedLang;
  contentEn.style.display = "none";
  contentRu.style.display = "none";
  contentPl.style.display = "none";
  contentZh.style.display = "none";

  if (selectedLang === "en") {
    contentEn.style.display = "block";
    document.title = "Dexoron CDN - Free Fonts & Styles";
    headerTitle.textContent = "Dexoron CDN";
    headerSubtitle.textContent = "Free fonts and styles for your projects";
  } else if (selectedLang === "ru") {
    contentRu.style.display = "block";
    document.title = "Dexoron CDN - Бесплатные шрифты и стили";
    headerTitle.textContent = "Dexoron CDN";
    headerSubtitle.textContent = "Бесплатные шрифты и стили для ваших проектов";
  } else if (selectedLang === "pl") {
    contentPl.style.display = "block";
    document.title = "Dexoron CDN - Darmowe czcionki i style";
    headerTitle.textContent = "Dexoron CDN";
    headerSubtitle.textContent =
      "Darmowe czcionki i style dla twoich projektów";
  } else if (selectedLang === "zh-cn") {
    contentZh.style.display = "block";
    document.title = "Dexoron CDN - 免费字体和样式";
    headerTitle.textContent = "Dexoron CDN";
    headerSubtitle.textContent = "为您的项目提供免费字体和样式";
  }

  localStorage.setItem("language", lang);
}

languageSelect.addEventListener("change", (e) => {
  setLanguage(e.target.value);
});

// Переключение темы
const themeSelect = document.getElementById("theme-select");

function setTheme(theme) {
  if (theme === "system") {
    document.body.classList.remove("light", "dark");
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
  } else {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }
  localStorage.setItem("theme", theme);
}

themeSelect.addEventListener("change", (e) => {
  setTheme(e.target.value);
});

// Инициализация языка и темы
const savedLanguage = localStorage.getItem("language") || "system";
const savedTheme = localStorage.getItem("theme") || "system";

languageSelect.value = savedLanguage;
setLanguage(savedLanguage);

themeSelect.value = savedTheme;
setTheme(savedTheme);

// Реакция на изменение системной темы
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (themeSelect.value === "system") {
      document.body.classList.remove("light", "dark");
      document.body.classList.add(e.matches ? "dark" : "light");
    }
  });

// Реакция на изменение системного языка
window.addEventListener("languagechange", () => {
  if (languageSelect.value === "system") {
    setLanguage("system");
  }
});
