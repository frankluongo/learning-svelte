<script context="module">
  export function load({ error, status }) {
    return {
      props: { error, status }
    }
  }
</script>

<script>
  export let error;
  export let status;
  console.log({ error, status });
</script>

<section data-container>
  <h1>Something went wrong!</h1>
  <h2>{status}</h2>
  <p>{error.message}</p>
</section>

