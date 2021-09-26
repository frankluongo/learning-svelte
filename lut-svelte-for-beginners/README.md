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

```svelte
{#await quiz}
  <h3>Getting Quiz Info</h3>
{:then data}
  {#each data.results as question, index}
    {#if currentQuestion === index}
      <div in:fade={{ delay: 200 }} out:fade={{ duration: 200 }}>
        <Question
          {question}
          {nextQuestion}
          {setScore}
          {index}
          length={data?.results?.length}
        />
      </div>
    {/if}
  {/each}
{/await}
```

## Our Questions

## A Working Quiz

## Interface Improvements

## Animated Transitions

```svelte
  import { fade } from 'svelte/transition';
  <div in:fade={{ delay: 200 }} out:fade={{ duration: 200 }}></div>
```

## Reactive Expressions

These will re-run every time something changes

```svelte
  $: if (score > 7) {
    alert('you won!');
    refreshQuiz();
  }

  $: questionNumber = currentQuestion + 1;
```

## Component Lifecycle

```svelte
  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

  onMount(() => {
    console.log('mounted');
  });
  onDestroy(() => {
    console.log('onDestroy');
  });
  beforeUpdate(() => {
    console.log('beforeUpdate');
  });
  afterUpdate(() => {
    console.log('afterUpdate');
  });
```

## Directive Modifiers & The Class Directive

### Directive Modifiers

Svelte has slick modifiers built into event directives to help with common issues.

```svelte
<form on:submit|preventDefault={handleSubmit}>
  ...
</form>
```

[Read Docs About Events](https://svelte.dev/docs#on_element_event)

### Class Directive

```svelte
  <script>
    let correct = true;
  </script>

  <div
    class:correct
    class:right={correct}
  >
  </div>
```

[Read Docs About Class Directives](https://svelte.dev/docs#class_name)

## Making a Modal With Slots

## Component Events & Dimensions

### Component Events

```svelte
<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<button on:click={dispatch.bind(null, 'close')}>&times;</button>
```

```svelte
  <Modal on:close={refreshQuiz} />
```

### Getting Dimensions

Svelte has a super easy way to get an element's dimensions.

```svelte
  <script>
    let w;
  </script>
  <div bind:clientWidth={w}>

  </div>
```

## CSS & Post Processing

## Data Stores & Global State

You can create a "writable" using the code below and then reference is using `$score` in the code.

```js
import { writable } from 'svelte/store';

export const score = writable(0);
```

## Sapper & Where To Go From Here
