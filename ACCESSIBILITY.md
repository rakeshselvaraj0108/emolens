# Accessibility Statement

EmoLens is built for neurodivergent users first. Accessibility isn't a checklist item here — it's the core design constraint.

## What We Support

- **`prefers-reduced-motion`** respected at the animation-engine level, not just CSS — GSAP and Framer Motion transitions are disabled or shortened accordingly
- **WCAG 2.1 AA contrast** — minimum 4.5:1 across all text and interactive elements
- **44px minimum touch targets** on all interactive controls
- **Keyboard navigation** across the check-in flow, results, and dictionary
- **2D SVG fallback** for the 3D body model when WebGL is unavailable or motion-sensitive users opt out
- **No auto-playing audio**, no flashing content, no sudden motion
- **Zero emojis** — ambiguous and inconsistently rendered across screen readers; Lucide line icons used instead

## Known Gaps

- Full screen reader pass on the 3D body scene is in progress; the 2D fallback is the recommended path for screen reader users today
- Color-only zone intensity encoding is paired with numeric labels, but a high-contrast mode is not yet available

## Feedback

If you hit an accessibility barrier, please open an issue using the bug report template — accessibility issues are treated as high priority.
