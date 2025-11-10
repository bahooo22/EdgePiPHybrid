[![???? Read in English](https://img.shields.io/badge/Readme-in%20English-blue)](README.md)

# PiP Helper - Расширение для плавающего видео в Edge

![Лицензия: MIT](https://img.shields.io/badge/Лицензия-MIT-blue.svg)
![Доступно в Edge Add-ons](https://img.shields.io/badge/Edge%20Add--ons-Доступно-green)
![Платформа: Edge](https://img.shields.io/badge/Платформа-Microsoft%20Edge-blue)
![Поддержка Android](https://img.shields.io/badge/Мобильная%20версия-Edge%20Canary%20Android-green)

**PiP Helper** - это лёгкое расширение для браузера Microsoft Edge, добавляющее кнопку Picture-in-Picture (PiP) к любому HTML5-видео. Работает на популярных платформах, таких как YouTube, Vimeo, Twitch и других, позволяя смотреть видео в отдельном окне, параллельно работая в других вкладках.

---

## ? Возможности

- ??? Добавляет кнопку PiP прямо в видеоплеер
- ?? Автоматический PiP при переключении вкладки (опционально)
- ?? Настраиваемые параметры через страницу настроек
- ?? Чёрный список доменов, на которых PiP отключён
- ?? Опциональная интеграция с Companion App (через deep link)
- ?? Работает на мобильных устройствах (Edge Canary Android) и на десктопе

---

## ?? Установка

### ??? Десктоп (Edge)

1. Скачайте последний `.zip` из [Releases](https://github.com/bahooo22/EdgePiPHybrid/releases)
2. Перейдите в `edge://extensions`
3. Включите **Режим разработчика**
4. Нажмите **Загрузить распакованное расширение** и выберите извлечённую папку

### ?? Мобильный (Edge Canary Android)

> Требуется Edge Canary версии **125.0.2487.0** или новее

1. Откройте **Настройки  О браузере Microsoft Edge**
2. Нажмите на номер сборки **5 раз подряд**, чтобы открыть Developer Options
3. Перейдите в **Developer Options  Extension install by ID**
4. Введите ID расширения из Edge Add-ons Store  
    [Посмотреть в Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/<your-extension-id>)

---

## ?? Настройки

Откройте страницу настроек расширения, чтобы настроить:

- ? Авто-PiP при переключении вкладки
- ?? Кнопка Companion App
- ?? Чёрный список доменов (например, `youtube.com`, `example.org`)

---

## ?? Конфиденциальность

Расширение **не собирает**, **не хранит** и **не передаёт** персональные данные. Вся логика работает локально в браузере.

---

## ?? Скриншоты

| YouTube с кнопкой PiP | Страница настроек |
|------------------------|-------------------|
| ![screenshot1](assets/screenshot1.png) | ![screenshot2](assets/screenshot2.png) |

---

## ?? Разработка

Клонируйте репозиторий и запустите локально:

```bash
git clone https://github.com/bahooo22/EdgePiPHybrid.git
```

Внесите изменения и перезагрузите расширение в Edge.

---

## ?? Ограничения

- PiP может не работать на видео с DRM-защитой (например, YouTube Premium)
- Некоторые сайты могут переопределять поведение PiP через собственные плееры
- Интеграция с Companion App требует установленного приложения

---

## ?? Поддержка и обратная связь

- GitHub Issues: [https://github.com/bahooo22/EdgePiPHybrid/issues](https://github.com/bahooo22/EdgePiPHybrid/issues)
- Email: `a7706061@outlook.com`

---

## ?? Лицензия

MIT License - см. [`LICENSE.txt`](LICENSE.txt)

---