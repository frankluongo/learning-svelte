<script>
  export let posts;
</script>

<h5>Archive</h5>
<ul>
  {#each posts as post}
    <li>
      <a sveltekit:prefetch href={`/posts/${post.slug}`}>{post.title}</a>
    </li>
  {/each}
  <li>
    <a rel="external" target="_blank" href="https://leveluptutorials.com">Level Up</a>
  </li>
</ul>
