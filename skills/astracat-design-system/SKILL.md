---
name: astracat-design-system
description: Create or refine ASTRACAT product interfaces using AntarktidaUI foundations, tokens, reusable components, responsive layouts, and accessibility patterns.
---

# ASTRACAT Design System

Use this skill when changing a product screen, visual primitive, design token, or responsive presentation in a repository that contains AntarktidaUI.

## Start with the system

- Read `AGENTS.md`, then inspect the relevant section of `index.html` and the token/component files before editing.
- `design-system/tokens/index.css` is the entrypoint for semantic color roles, spacing, radii, typography, elevation, motion, z-index, and layout constraints.
- Reuse components from `design-system/components/components.css`; use patterns from `design-system/patterns/` for composed UI such as Signal, Service Pulse, and Metric Rail.
- The Twig templates are integration examples. This repository has no Twig runtime or application build pipeline.

## Build with the visual language

- Preserve familiar interaction patterns and the original ASTRACAT visual character: quiet mineral surfaces, restrained teal action color, measured typography, and precise alignment.
- Use semantic variables such as `--color-action`, `--color-positive`, and `--color-critical`; do not hard-code new component colors.
- Follow the 4 px spacing scale and 8 px primary rhythm. Keep controls of the same size geometrically identical.
- Use surfaces to express hierarchy. Add a container only when the content is a distinct object or interaction region.
- Keep light and dark themes paired. Dropdowns, overlays, and form controls should use semantic surface tokens so browser-native white popups do not leak into dark mode.
- Extend a reusable primitive or pattern when a visual treatment will serve multiple screens. Avoid one-off business-page selectors.

## Interaction and accessibility

- Prefer semantic HTML and native controls when their rendering can follow the system theme. Use a custom control only when the native UI cannot meet the visual or interaction requirement.
- For custom controls, provide keyboard operation, visible focus, state attributes, an accessible name, and a hidden submitted value when applicable.
- Pair status colors with text. Respect `prefers-reduced-motion` and preserve readable contrast in both themes.
- Adapt narrow layouts by changing hierarchy and columns, not by shrinking the desktop layout uniformly.

## Keep the system documented

When adding or changing a reusable API, update `design-system/docs/components.md` and provide a usable Twig example. Keep the static documentation page (`index.html`) consistent with the component's states and theme behavior. Follow `CONTRIBUTING.md` for local checks.
