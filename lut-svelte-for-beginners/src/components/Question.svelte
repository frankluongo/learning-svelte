<script>
  export let question;
  let answered = false;
  let correct;

  function pickAnswer(answer) {
    answered = true;
    if (answer === question.correct_answer) return (correct = true);
    correct = false;
  }
</script>

<section>
  <header>
    <h3>{@html question.question}</h3>
    {#if correct && answered}<h4>Nailed it!</h4>{/if}
    {#if !correct && answered}<h4>D'oh!</h4>{/if}
  </header>
  <section class="buttons">
    {#each question.answers as answer}
      <button
        on:click={pickAnswer.bind(null, answer)}
        aria-disabled={answered}
        disabled={answered}
      >
        {@html answer}
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
    text-transform: capitalize;

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
