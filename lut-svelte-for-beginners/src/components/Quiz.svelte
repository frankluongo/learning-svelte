<script>
  import getQuiz from '../lib/getQuiz';
  import Question from './Question.svelte';
  let quiz = getQuiz();

  const refreshQuiz = () => (quiz = getQuiz());
</script>

<section>
  <section class="question">
    {#await quiz}
      <h3>Getting Quiz Info</h3>
    {:then data}
      {#each data.results as question}
        <Question {question} />
      {/each}
    {/await}
  </section>
  <section class="quiz-refresh">
    <button on:click={refreshQuiz}>Refresh Quiz</button>
  </section>
</section>
