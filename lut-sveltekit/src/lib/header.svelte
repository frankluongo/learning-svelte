<script>
  import { NAME } from '$lib/constants';
</script>

<header>
  <section>
    <h1>{NAME}</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About Us</a>
      <a href="/posts">Blog</a>
    </nav>
  </section>
</header>

<style lang="scss">
  a {
    font-size: 0.875rem;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
  }

  h1 {
    font-size: 1rem;
  }

  header {
    padding: 1rem 0;

    border-bottom: 1px solid var(--color-gray-light);
  }

  nav {
    margin-left: auto;
  }

  section {
    align-items: center;
    display: flex;
    padding: 0 1rem;
    margin: 0 auto;
    max-width: var(--max-width);
    width: 100%;
  }
</style>
