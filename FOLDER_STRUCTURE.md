# Next.js Production-Ready Folder Structure

This project has been restructured to adhere to Next.js App Router best practices, making it production-ready, organized, and efficient for future maintainability and scalability.

## Directory Layout

- `/app`
  - Contains all the Next.js routes (pages, layouts, globals).
  - Keeps only routing and top-level page components, separating concerns.
- `/components`
  - Reusable UI components across the site (e.g., `hero.tsx`, `services.tsx`, `about.tsx`).
  - Uses strictly lowercase and kebab-case for standard Next.js consistency.
- `/layouts`
  - Structural layout components that span across pages, such as `navbar.tsx` and `footer.tsx`.
- `/styles`
  - Dedicated global CSS folder (e.g., `globals.css`) or any `.scss` / config if expanded upon.
- `/public`
  - Next.js default public directory.
  - Contains `/images/` for serving static assets, accessible via `/images/...` in URLs directly.
- `/context`
  - Contains shared React Contexts (e.g., `contact-modal-context.tsx`).
- `/lib` (or `/utils`)
  - Utility scripts and helper functions used throughout the application.

## Naming Conventions
All files follow lowercase/kebab-case (e.g., `contact-modal.tsx`). This aligns directly with strict OS case behaviors (preventing Git/Linux/Windows casing mismatches) and perfectly matches standard Next.js route path conversions.

### Imports
Absolute imports utilizing `@` mapped to the root directory are setup and highly encouraged, ex: `import Hero from '@/components/hero';`.
