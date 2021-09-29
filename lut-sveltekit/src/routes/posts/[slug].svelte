<script context="module">
  export async function load({ page, }) {
    const slug = page?.params?.slug;
    try {
      const Post = (await import(`../../posts/${slug}.md`));
      return { props: { Post: Post.default, meta: Post.metadata } };
    } catch (e) {
      return {
        error: 'Post Not Found',
        status: 404,
      }
    }

  }
</script>

<script>
  export let Post;
</script>

<h2>Slug Detail</h2>
<svelte:component this={Post} />
