# Level Up Tutorials Svelte Kit Course

This project contains notes pertaining to the "Svelte Kit" Course on Level Up Tutorials

## Lessons

### What is Svelte Kit

### Getting Started

### Exploring The Svelte Kit Demo

### Starting From a Skeleton

### Pages, Routing and Layouts in Svelte Kit

### The $lib Directory

### CSS In Svelte Kit - PostCSS, SCSS & Scoping

### Tailwinds With PostCSS

### API Routes

### Nested Layouts

### Layout Reset

`__layout.reset.svelte` will create a fully blank Layout

### Parameter Based File Names

### Loading Data Before Initial Render

### Markdown with MDSVEX

### Dynamic Imports and Frontmatter

### Frontmatter with MDSVEX

### Glob Imports

### Loading in Depth

This lesson is next

### Error Pages

### Prefetch and Other Anchor Options

### Static Site Generation Adapters

### Hosting on Render

### Building For Node

### TypeScript in Svelte Kit

## Initial Instructions

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
