<script>
  export let nextQuestion;
  export let question;
  export let setScore;
  export let index;
  export let length;

  let answered = false;
  let selectedAnswer;
  let correct;

  let hasNext = index + 1 < length;

  function pickAnswer(answer) {
    answered = true;
    selectedAnswer = answer.answer;
    correct = answer.correct;
    setScore(answer.correct);
  }
</script>

<section class="container" data-correct={correct}>
  <header>
    <h3>{@html question.question}</h3>
    {#if correct && answered}<h4>Nailed it!</h4>{/if}
    {#if !correct && answered}<h4>D'oh!</h4>{/if}
  </header>
  <section class="buttons">
    {#each question.answers as answer}
      <button
        on:click={pickAnswer.bind(null, answer)}
        disabled={answered}
        aria-disabled={answered}
        data-selected={answer.answer === selectedAnswer}
        class:correct
      >
        {@html answer.answer}
      </button>
    {/each}
  </section>
  {#if answered && hasNext}
    <section>
      <button on:click={nextQuestion}>Next Question</button>
    </section>
  {/if}
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

  button[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }

  .container[data-correct='false'] button[data-selected='true'] {
    color: white;

    background-color: rgb(197, 59, 5);
  }

  .container[data-correct='true'] button[data-selected='true'] {
    color: white;

    background-color: rgb(5, 197, 92);
  }
</style>
