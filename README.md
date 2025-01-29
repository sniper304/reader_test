This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to build project
```bash
npm run build
```
Will run build process.

## What used in the project
1. Husky - pre-commit hook which will run prettier and eslint command before commit. It will triggered only on changed files in repo. This will help any new developer to use the same code style on the project.
2. i18n - with default "Uk" translation. (Uk - by default, and can be switched to en.)
3. Locale redirect - By default application using "Uk" translation in routes
4. Dark/light mode switcher.
5. BookReader page - with possibility to change BookReader context and store changes in LocalStorage.

## Hooks
1. useGeneratePath - hook which can be easily used for links paths, which automatically handle locales and route by provided data

## Contexts
1. useThemeContext - main context for handle theme (dark/light) mode for all pages.
2. BookReaderContext - context for handle all changes with BookReader settings.

## Next improvements
1. Need to finish tailwind config setup with proper design components and sizes. (colors, borders, sizes etc.)
2. Implements missed components - like Dropdown selects.
