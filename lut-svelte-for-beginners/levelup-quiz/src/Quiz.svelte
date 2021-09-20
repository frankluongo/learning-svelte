<script>
  const answers = ['a', 'b', 'c', 'd'];
  let result;
  let correct = 'b';

  function pickAnswer(answer) {
    if (correct === answer) return (result = 'Correct!');
    result = 'and I OOP';
  }
</script>

<section>
  <header>
    {#if result}
      <h3>{result}</h3>
    {:else}
      <h3>Pick an Answer</h3>
    {/if}
  </header>
  <section class="buttons">
    {#each answers as answer}
      <button on:click={pickAnswer.bind(null, answer)}>
        Answer {answer.toUpperCase()}
      </button>
    {/each}
  </section>
</section>

<style>
  .buttons {
    display: flex;
    justify-content: center;
  }

  .buttons > * + * {
    margin-left: 1rem;
  }

  button {
    padding: 0.5rem 1rem;

    font-size: 0.875rem;

    appearance: none;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 150ms ease-in-out;
  }

  button:focus,
  button:hover {
    background-color: #fff;
  }
</style>
