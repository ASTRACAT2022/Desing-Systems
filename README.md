<p align="center">
  <img src="assets/astracat-mark.svg" width="64" height="64" alt="Знак ASTRACAT">
  <br><strong>ASTRACAT · ANTARKTIDAUI</strong>
  <br>Интерфейсная система для спокойных и точных продуктовых UI
</p>

<p align="center">
  <a href="#быстрый-старт">Быстрый старт</a> ·
  <a href="design-system/docs/architecture.md">Архитектура</a> ·
  <a href="design-system/docs/components.md">Компоненты</a> ·
  <a href="skills/astracat-design-system/SKILL.md">Навыки AI-агентов</a>
</p>

---

AntarktidaUI — собственная дизайн-система ASTRACAT. Она сочетает знакомые UX-паттерны с характерной графикой: минеральная нейтральная база, холодный зелёно-синий акцент, точная сетка и выразительные данные.

**Familiar UX. Original visual language.**

## Что внутри

- Light и dark темы на семантических CSS-токенах.
- Ритм отступов с шагом 4 px, четыре базовых радиуса и типографическая шкала.
- Twig API для кнопок, полей, выбора, статусов и метрик.
- Композиционные паттерны `Signal`, `Service Pulse` и `Metric Rail`.
- Интерактивная документационная страница с примерами компонентов, адаптивными состояниями и переключением темы.
- Два навыка AI-агентов, которые помогают собирать и расширять интерфейсы на базе системы.

## Быстрый старт

Откройте [`index.html`](index.html) в браузере или запустите из корня репозитория локальный сервер:

```sh
python3 -m http.server 8080
```

Затем откройте `http://localhost:8080`. Сборщик и backend для просмотра демо не нужны.

## Подключение к Twig

Зарегистрируйте namespace `@ui` для `design-system/components/`, а `@patterns` для `design-system/patterns/`. Подключите `design-system/tokens/index.css` в asset pipeline приложения. Он импортирует foundation tokens и CSS primitives; `design-system/system.css` нужен только демонстрационной странице.

```twig
{% include '@ui/button.html.twig' with {
  label: 'Продолжить',
  variant: 'action',
  size: 'md'
} only %}

{% include '@ui/status.html.twig' with {
  status: 'healthy',
  label: 'Все системы работают'
} only %}
```

У `select` есть доступная кастомная панель, поэтому используйте его Twig-шаблон вместе с `design-system/interactions.js`; нативный popup браузера не поддерживает единый theme-aware стиль.

## Структура

```text
.
├── skills/                переносимые навыки AI-агентов
├── .github/              шаблоны issue и pull request
├── assets/               фирменные ресурсы
├── design-system/
│   ├── components/       Twig primitives и их стили
│   ├── docs/             архитектура и API компонентов
│   ├── patterns/         композиционные Twig patterns
│   └── tokens/            цвета, геометрия, типографика и layout
├── AGENTS.md             краткая точка входа для AI-агентов
├── CONTRIBUTING.md       правила изменений
└── index.html            самостоятельная страница библиотеки
```

## Навыки AI-агентов

Папка [`skills/`](skills/) содержит переносимые инструкции в формате Agent Skill. Файл [`AGENTS.md`](AGENTS.md) направляет AI-агентов к ним:

- [`astracat-design-system`](skills/astracat-design-system/SKILL.md) — создание и развитие интерфейсов на токенах и primitives.
- [`astracat-twig-ui`](skills/astracat-twig-ui/SKILL.md) — подключение Twig namespace и сборка экранов из includes и patterns.

## Развитие системы

Если паттерн нужен в нескольких местах, оформите его как компонент или pattern и добавьте документацию. Не добавляйте особые стили на бизнес-страницу, если тот же результат можно выразить токеном или reusable primitive.

Подробности — в [архитектуре](design-system/docs/architecture.md) и [правилах контрибьюции](CONTRIBUTING.md).
