# Contributing to EmoLens

Thanks for your interest in improving EmoLens.

## Getting Started

1. Fork the repository and clone your fork
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and fill in your own API keys
4. Run database migrations: `node scripts/migrate.mjs`
5. Start the dev server: `npm run dev`

## Development Guidelines

- Run `npm run lint` before opening a pull request
- Keep components accessible: respect `prefers-reduced-motion`, maintain 4.5:1 contrast, and use 44px minimum touch targets
- Never add emojis to the UI — use Lucide line icons
- AI-facing code (`src/lib/ai`, `src/lib/prompts`) should never produce diagnostic language; suggestions must stay framed as hypotheses

## Submitting Changes

1. Create a feature branch off `main`
2. Make your changes with clear, focused commits
3. Open a pull request describing what changed and why

## Reporting Issues

Please include steps to reproduce, expected behavior, and actual behavior when filing a bug report.
