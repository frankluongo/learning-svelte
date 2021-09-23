# Svelte For Beginners

## Introduction

## What is Svelte

## Getting Started

## Starting Code

## Our First Component and Props

This is how you import props

```svelte
  export let varName;
```

## Inputs, Binding and Reacivity

This is crazy easy

```svelte
  <input bind:value={varName}>
```

## Basic Events

```svelte
  <button on:click={functionName}>
```

## Conditionals and Loops

```svelte
  {#if thing}
   ...code
  {:else}
    ...other code
  {/if}

  {#each things as thing}
    ...code
  {/each}
```

## CSS Basics

- CSS in Svelte is scoped by default
- It is scoped to the component and doesn't have a parent/child relationship

How to do global CSS

```css
:global(selector) {
  color: green;
}
```

## Hitting an API

## Await

## Our Questions

## A Working Quiz

## Interface Improvements

## Animated Transitions

```svelte
  import { fade } from 'svelte/transition';
  <div in:fade={{ delay: 200 }} out:fade={{ duration: 200 }}></div>
```

## Reactive Expressions
