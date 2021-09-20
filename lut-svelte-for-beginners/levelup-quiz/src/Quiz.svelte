<script>
  // It has to be `let` instead of `const`
  export let name = 'Frank Quiz';
  let input = ' ';
  let a = 0;
  let b = 0;
</script>

<section>
  <h2>My Quiz: {name}</h2>
  <h3>{input}</h3>
  <input bind:value={input} type="text" />
  <hr />
  <h3>{a + b}</h3>
  <input bind:value={a} type="number" />
  <input bind:value={b} type="number" />
</section>
