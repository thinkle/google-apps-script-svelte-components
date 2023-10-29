<script context="module">
  let inserted = false;
</script>

<script>
  import rawcss from "./css/google-sidebar.css?raw";
  let css = "<style>" + rawcss + "</style>";
  let shouldInsert = !inserted;
</script>

<svelte:head>
  {#if shouldInsert}
    {@html css}
    {(inserted = true)}
  {/if}
</svelte:head>
