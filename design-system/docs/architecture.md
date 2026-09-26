# Архитектура AntarktidaUI

## Слои

```text
tokens → primitives → patterns → layouts → product pages
```

- **Tokens** задают семантические роли: цвета поверхностей и текста, интервалы, типографику, радиусы, тени, motion, z-index и ограничения ширины.
- **Primitives** — повторно используемые элементы с небольшим Twig API: Button, Input, Select, Status, Metric и другие.
- **Patterns** собирают primitives в продуктовые сценарии: Signal, Service Pulse, Metric Rail.
- **Layouts** отвечают за сетку и расположение областей; продуктовая страница собирает их из primitives и patterns.

## Точки подключения

| Файл | Назначение |
| --- | --- |
| `design-system/tokens/index.css` | Импорт токенов и `components/components.css` |
| `design-system/system.css` | Layout и стили демонстрационной страницы |
| `design-system/interactions.js` | Переключение темы, custom select, документационные tabs и demo interactions |
| `design-system/components/` | Twig includes и reusable component styles |
| `design-system/patterns/` | Twig compositions поверх namespace `@ui` |
| `index.html` | Статическая документация и showcase без сборки |

## Twig namespaces

Настройте в приложении:

- `@ui` → `design-system/components/`
- `@patterns` → `design-system/patterns/`

Компонентные Twig-шаблоны предполагают стандартный Twig include API. Поскольку здесь не закреплена версия Twig, проверьте фактическую совместимость функций и конфигурации namespace в consuming application.

## Темы и интерактивность

Компоненты используют semantic color roles. Для raised popup или menu берите `--color-surface-raised`, для встроенной области — `--color-surface-sunken`; не задавайте светлую подложку напрямую. Интерактивные шаблоны должны сохранять клавиатурное управление, видимый focus и связанные ARIA состояния.

В самостоятельном демо `interactions.js` загружается один раз в конце документа. При переносе компонента интегрируйте только нужные стили и поведение, не подключая layout демонстрационной страницы.
