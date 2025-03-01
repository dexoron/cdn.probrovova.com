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
const headerTitle = document.querySelector("h1");
const headerSubtitle = document.querySelector(".subtitle");

function setLanguage(lang) {
  let selectedLang = lang;
  if (lang === "system") {
    const systemLang = navigator.language.slice(0, 2); // Берем первые 2 символа (например, 'en' или 'ru')
    selectedLang = systemLang === "ru" ? "ru" : "en"; // Если не 'ru', то по умолчанию 'en'
  }

  document.documentElement.lang = selectedLang;
  if (selectedLang === "en") {
    contentEn.style.display = "block";
    contentRu.style.display = "none";
    document.title = "Dexoron CDN - Free Fonts & Styles";
    headerTitle.textContent = "Dexoron CDN";
    headerSubtitle.textContent = "Free fonts and styles for your projects";
  } else if (selectedLang === "ru") {
    contentEn.style.display = "none";
    contentRu.style.display = "block";
    document.title = "Dexoron CDN - Бесплатные шрифты и стили";
    headerTitle.textContent = "Dexoron CDN";
    headerSubtitle.textContent = "Бесплатные шрифты и стили для ваших проектов";
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
const savedLanguage = localStorage.getItem("language") || "system"; // По умолчанию системный
const savedTheme = localStorage.getItem("theme") || "system"; // По умолчанию системная

// Установка языка
languageSelect.value = savedLanguage;
setLanguage(savedLanguage);

// Установка темы
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

// Реакция на изменение системного языка (если поддерживается системой)
window.addEventListener("languagechange", () => {
  if (languageSelect.value === "system") {
    setLanguage("system");
  }
});
