# axle-ui

A Turborepo monorepo featuring an Apple-inspired UI library and associated Next.js applications.

## Project Overview

- **Purpose:** Provide a collection of clean, subtle, and tactile UI components inspired by Apple's design language, shared across multiple Next.js applications.
- **Architecture:** Monorepo managed by [Turborepo](https://turbo.build/).
  - `apps/docs`: Next.js documentation site.
  - `apps/web`: Primary Next.js web application.
  - `packages/ui`: Shared React component library (`@repo/ui`).
  - `packages/eslint-config`: Shared ESLint configurations (`@repo/eslint-config`).
  - `packages/typescript-config`: Shared TypeScript configurations (`@repo/typescript-config`).
- **Main Technologies:**
  - **Framework:** Next.js (16.2.0)
  - **Library:** React (19.2.0)
  - **Styling:** Tailwind CSS + [Class Variance Authority (CVA)](https://cva.style/)
  - **Language:** TypeScript
  - **Build Tooling:** Turborepo

## Building and Running

Commands are run from the root of the monorepo:

- **Development:** `npm run dev` starts all applications in development mode.
- **Build:** `npm run build` builds all packages and applications.
- **Linting:** `npm run lint` runs ESLint across the entire monorepo.
- **Type Checking:** `npm run check-types` runs `tsc` for all projects.
- **Formatting:** `npm run format` applies Prettier formatting to all files.

To run a command for a specific package, use the `--filter` flag:
```sh
npx turbo dev --filter=web
```

## Development Conventions

### UI Components (`packages/ui`)

- **Location:** All shared components reside in `packages/ui/src`.
- **Styling:** Use CVA for managing component variants (e.g., primary, secondary, ghost).
- **Utilities:** Use the `cn` helper from `@repo/ui/utils` for conditional class joining.
- **Exporting:** Components are exported via subpaths.
- **Importing:** In apps, import components using their subpath:
  ```tsx
  import { Button } from "@repo/ui/button";
  ```

### Design Principles

- **Aesthetic:** Clean, subtle, and tactile.
- **Styling Details:** Prioritize `rounded-apple` (custom radius), `shadow-apple` (subtle shadows), and smooth transitions.
- **Interactive Feedback:** Components should feel responsive (e.g., `active:scale-[0.98]`).

### Code Standards

- **TypeScript:** Mandatory for all source code. Avoid `any` where possible.
- **Linting:** Adhere to the shared rules in `@repo/eslint-config`.
- **Formatting:** Prettier is used for consistent code style.
