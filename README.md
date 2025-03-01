# Dexoron CDN

**Dexoron CDN** — это быстрая и надёжная сеть доставки контента (CDN), предоставляющая бесплатные шрифты, CSS-стили и библиотеки иконок. Проект создан сообществом и дополнен личными вкладами автора, чтобы упростить веб-разработку с помощью качественных ресурсов.

Сейчас проект находится в стадии разработки, но уже предлагает готовые к использованию ресурсы. Следите за обновлениями, мы расширяем коллекцию!

---

## Особенности

- Бесплатные шрифты, такие как **Montserrat**.
- Иконки **FontAwesome 6 Pro**.
- Пользовательский CSS-фреймворк **DexoronCSS** (в разработке).
- Поддержка нескольких языков: английский, русский, китайский (упрощённый), польский.
- Адаптивный дизайн с переключением тем (светлая, тёмная, системная).

---

## Как использовать

Интегрируйте ресурсы в ваш проект с помощью одной строки кода. Примеры:

### Подключение шрифта Montserrat

```html
<link
  rel="stylesheet"
  href="https://cdn.probrovova.com/fonts/Montserrat/main.css"
/>
```

### Подключение иконок FontAwesome 6 Pro

```html
<link
  rel="stylesheet"
  href="https://cdn.probrovova.com/libs/fontawesome/6/js/all.min.css"
/>
```

### Подключение DexoronCSS

```html
<link
  rel="stylesheet"
  href="https://cdn.probrovova.com/css/DexoronCSS/all.css"
/>
```

---

## Установка (для разработчиков)

Если вы хотите запустить проект локально:

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/dexoron/cdn.probrovova.com.git
   ```

2. Откройте `index.html` в браузере:
   Используйте локальный сервер (например, с помощью `live-server` в VS Code).

3. Разместите ресурсы в папках `/fonts/`, `/libs/`, `/css/` пример:
   /fonts/Roboto/файлы_шрифт.{ttf, woff, woff2}
   /fonts/Roboto/main.css

---

## Структура проекта

```
/cdn.probrovova.com/
  ├── index.html       # Главная страница
  ├── style.css        # Стили
  ├── script.js        # Логика переключения языков и тем
  ├── index.html       # Главная страница
  ├── fonts/           # Шрифты для CDN
  ├── libs/            # Библиотеки для CDN
  ├── css/             # Пользовательские стили для CDN
  ├── LICENSE          # Лицензия
  ├── README.md        # Описание проекта
  └── .gitignore       # Игнорируемые файлы (libs, fonts, css)
```

**Примечание**: Папки `/libs/`, `/fonts/` и `/css/` игнорируются в `.gitignore`

---

## Внесение вклада

Хотите помочь? Мы приветствуем материалы от сообщества: шрифты, стили и многое другое!

### Как отправить свой шрифт

1. Отправьте email на `cdn@probrovova.com`.
2. Тема: `Font Submission` (или "Предложение шрифта").
3. Приложите:
   - Файлы шрифта (`.ttf` или `.woff` или `.woff2`).
   - Лицензию.
   - Ваше имя.

Или создайте Pull Request:

- Форкните репозиторий.
- Добавьте свои изменения.
- Отправьте PR с описанием.

Следите за прогрессом на [GitHub Issues](https://github.com/dexoron/cdn.probrovova.com/issues).

---

## Поддерживаемые языки

- English
- Русский
- 简体中文 (Chinese Simplified)
- Polski

Выберите язык в настройках на главной странице.

---

## Лицензия

© 2025 Dexoron CDN. Все права защищены.  
Проект распространяется под [MIT License](LICENSE).

---

## Контакты

- Email: [cdn@probrovova.com](mailto:cdn@probrovova.com)
- GitHub: [dexoron](https://github.com/dexoron)

Спасибо за интерес к Dexoron CDN!
