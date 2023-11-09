<script lang="ts">
  export let icon: string;
  export let fontSize: string = "";
</script>

<div class="material-icon" style:font-size={fontSize}>
  {@html icon}
</div>

<style>
  div {
    display: inline-grid;
    place-content: stretch;
    width: 1em;
    height: 1em;
  }
  div :global(svg) {
    width: 100%;
    height: 100%;
  }
</style>
