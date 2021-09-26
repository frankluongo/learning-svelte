<script>
  import { fade, fly } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const duration = 300;
  const delay = duration;
</script>

<section
  class="modalBackground"
  in:fade={{ duration }}
  out:fade={{ delay, duration }}
>
  <div class="modal" in:fly={{ delay, y: 200, duration }} out:fly={{ y: -200 }}>
    <header>
      <h2><slot name="header" /></h2>
      <button on:click={dispatch.bind(null, 'close')}>&times;</button>
    </header>
    <slot name="content" />
  </div>
</section>

<style>
  .modalBackground {
    inset: 0;
    position: fixed;

    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;

    background-color: rgba(0, 0, 0, 0.65);
  }

  .modal {
    max-width: 45rem;
    width: 90%;

    background-color: #fff;
    border-radius: 1rem;
  }

  header {
    position: relative;

    padding: 1rem;

    border-bottom: 1px solid #eee;
  }

  header button {
    position: absolute;
    right: 0;
    top: 0;

    align-items: center;
    display: flex;
    justify-content: center;
    height: 2.5rem;
    margin: 0;
    padding: 0;
    width: 2.5rem;

    font-size: 1.25rem;

    appearance: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  header h2 {
    margin: 0;

    text-align: left;
  }
</style>
