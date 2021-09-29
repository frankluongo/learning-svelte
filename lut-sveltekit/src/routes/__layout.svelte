<script>
  import Footer from '$lib/footer.svelte';
  import Header from '$lib/header.svelte';
  import "../base.css";
</script>

<Header />
<main>
  <slot />
</main>
<Footer />
