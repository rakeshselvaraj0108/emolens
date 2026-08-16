# Security Policy

## Reporting a Vulnerability

EmoLens handles sensitive user data (emotional check-ins, body sensation patterns). If you discover a security vulnerability, please report it privately rather than opening a public issue.

Email the maintainer directly with:

- A description of the vulnerability
- Steps to reproduce
- Potential impact

We aim to acknowledge reports within 48 hours.

## Scope

- Authentication and session handling (Supabase Auth)
- Row-Level Security policy bypasses
- Prompt injection against the AI pipeline
- XSS in user-generated content (context notes, communication cards)
- Rate limiting bypass on `/api/*` routes

## Out of Scope

- Denial-of-service testing against production infrastructure
- Social engineering
- Physical access attacks
