<script>
  import { fade } from 'svelte/transition';
  import getQuiz from '../lib/getQuiz';
  import Question from './Question.svelte';
  import Modal from './Modal.svelte';
  import { score } from '../lib/store';
  let quiz = getQuiz();
  let isModalOpen = false;
  let currentQuestion = 0;

  const nextQuestion = () => {
    currentQuestion = currentQuestion + 1;
  };
  const refreshQuiz = () => {
    quiz = getQuiz();
    score.update(0);
    isModalOpen = false;
  };

  function setScore(correct) {
    if (correct) score.update((val) => val + 1);
  }

  // Reactive Statement
  $: if ($score > 0) {
    isModalOpen = true;
  }

  $: questionNumber = currentQuestion + 1;
</script>

<section>
  <header>
    <h2>Art Quiz</h2>
    <h3>Score: {$score}/{quiz?.results?.length || 10}</h3>
    <h3>Question #{questionNumber}</h3>
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

{#if isModalOpen}
  <Modal on:close={refreshQuiz}>
    <svelte:fragment slot="header">Congrats!</svelte:fragment>
    <svelte:fragment slot="content">
      <p>You won!</p>
      <button on:click={refreshQuiz}>Start Over</button>
    </svelte:fragment>
  </Modal>
{/if}
