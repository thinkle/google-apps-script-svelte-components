<script lang="ts">
  import GoogleStyles from "./GoogleStyles.svelte";
  export let color: string = "";
</script>

<GoogleStyles />
<button on:click class={color}>
  <slot />
</button>

<style>
  button {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 32px;
    box-sizing: border-box;
    vertical-align: middle;
  }
  button :global(.material-icon) {
    font-size: 24px;
  }
</style>
