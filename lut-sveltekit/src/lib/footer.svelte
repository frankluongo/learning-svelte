<script>
  import { NAME } from '$lib/constants';
</script>
<footer>
  <section>
    <small>{NAME} &copy; {new Date().getFullYear()}</small>
  </section>
</footer>

<style>
  footer {
    padding: 1rem 0;

    background-color: var(--color-gray-light);
  }

  section {
    margin: 0 auto;
    max-width: var(--max-width);

    text-align: center;
  }
</style>
