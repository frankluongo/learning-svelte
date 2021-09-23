<script>
  import { fade } from 'svelte/transition';
  import getQuiz from '../lib/getQuiz';
  import Question from './Question.svelte';
  let quiz = getQuiz();
  let score = 0;
  let currentQuestion = 0;

  const nextQuestion = () => {
    currentQuestion = currentQuestion + 1;
  };
  const refreshQuiz = () => {
    quiz = getQuiz();
    score = 0;
  };

  function setScore(correct) {
    if (correct) score = score + 1;
  }
</script>

<section>
  <header>
    <h2>Art Quiz</h2>
    <p>Score: {score}/{quiz?.results?.length || 10}</p>
    <section class="quiz-refresh">
      <button on:click={refreshQuiz}>Refresh Quiz</button>
    </section>
  </header>
  <section class="question">
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
  </section>
</section>
