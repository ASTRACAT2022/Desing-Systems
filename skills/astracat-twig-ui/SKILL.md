---
name: astracat-twig-ui
description: Compose or integrate Twig pages with AntarktidaUI components and patterns, including the @ui and @patterns namespaces and accessible form controls.
---

# AntarktidaUI with Twig

Use this skill when writing Twig templates that consume AntarktidaUI, registering its namespaces, or composing a product page from the library.

## Integration map

- Register `@ui` to `design-system/components/` and `@patterns` to `design-system/patterns/` in the host application's Twig loader.
- Load `design-system/tokens/index.css` through the host asset pipeline. It imports semantic tokens and reusable component styles.
- Load `design-system/interactions.js` once on pages using the custom select or interactive patterns. Do not duplicate per-page handlers.
- `design-system/system.css` contains the standalone documentation page layout; application screens should use component styles and layout primitives instead of copying its page selectors.
- This repository has no Twig runtime. Confirm the consuming application's Twig version, namespace configuration, and asset bundler before relying on runtime-specific behavior.

## Compose components

Prefer small includes with `only` and semantic props:

```twig
{% include '@ui/button.html.twig' with {
  label: 'Продолжить', variant: 'action', size: 'md'
} only %}

{% include '@patterns/service-pulse.html.twig' with {
  services: [
    {name: 'VPN', status: 'healthy'},
    {name: 'DNS', status: 'healthy'}
  ]
} only %}
```

Component contracts and field details are documented in `design-system/docs/components.md`.

## Form controls

- Connect every field to a visible label and describe hint/error text with `aria-describedby`.
- Use the library select template for theme-consistent popups. Pass `id`, `name`, `label`, `value`, and an `options` list of `{value, label}` objects. The custom select updates a hidden input and supports Arrow keys, Home/End, Enter, Escape, and pointer selection.
- Escape dynamic values normally. Do not pass untrusted markup to a Twig `raw` filter.
- Keep server-side validation authoritative; client-side states only communicate feedback.

## When extending

Add reusable markup under `design-system/components/` or `design-system/patterns/`, put styles in the component stylesheet, expose semantic props, and add an example to `design-system/docs/components.md`. Preserve existing application routing and business logic when integrating the UI.
