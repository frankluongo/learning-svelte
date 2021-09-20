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

this is next
