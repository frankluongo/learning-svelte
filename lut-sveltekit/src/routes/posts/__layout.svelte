<script context="module">
  export async function load() {
    const postsFiles = import.meta.globEager('../../posts/*.md');
    const postsList = Object.values(postsFiles);
    const posts = postsList.map(post => post.metadata);
    return {
      props: { posts }
    }
  }
</script>

<script>
  export let posts;
  import Archive from '$lib/archive.svelte';
</script>

<section>
  <article>
    <slot />
  </article>
  <aside>
    <Archive {posts} />
  </aside>
</section>

<style>
  section {
    display: grid;
    gap: 1rem;
    grid-template-columns: 3fr 1fr;
    margin: 0 auto;
    max-width: var(--max-width);
    padding: 3rem 1rem;
    width: 100%;
  }
</style>
