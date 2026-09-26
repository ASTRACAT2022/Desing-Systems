# AntarktidaUI

Foundation preview дизайн-системы ASTRACAT: semantic tokens, документационная страница и стартовые Twig API. Проект назван в соответствии с папкой — **AntarktidaUI**.

## Просмотр

Откройте `index.html` напрямую в браузере. Для локального HTTP-сервера из корня проекта можно выполнить `python3 -m http.server 8080`, затем открыть `http://localhost:8080`.

## Структура

- `design-system/tokens/` — независимые CSS token layers; `index.css` подключает их одним импортом.
- `design-system/system.css` — демонстрационная страница и responsive presentation layer.
- `design-system/components/` — Twig primitives под namespace `@ui`.
- `design-system/patterns/` — композиционные Twig patterns (`Signal`, `Service Pulse`, `Metric Rail`).
- `design-system/docs/` — API и заметки по доступности.
- `index.html` — автономная документационная витрина без сборки.

## Подключение Twig

Настройте namespace `@ui` на каталог `design-system/components/`, а `@patterns` — на `design-system/patterns/`. Для реального приложения подключайте token layers и компонентные стили в его существующем asset pipeline. Twig runtime, backend и CSS build пока не добавлены: в пустой исходной папке проекта их не было.

## Foundation

Включает семантические светлые и тёмные роли цвета, spacing scale на шаге 4 px, четыре радиуса, типографическую шкалу, уровни глубины, motion tokens, layout constraints, начальные компоненты форм и данных, а также страницу демонстрации на русском языке.
