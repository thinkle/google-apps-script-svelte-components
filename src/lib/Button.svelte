<script lang="ts">
  import GoogleStyles from "./GoogleStyles.svelte";
  export let color: string = "";
  let svgColor: string;

  function fixSvgColor(el: HTMLButtonElement) {
    svgColor = getComputedStyle(el).color;
  }
</script>

<GoogleStyles />
<button use:fixSvgColor on:click class={color} style:--color={svgColor}>
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
  button :global(.material-icon svg) {
    fill: var(--color);
  }
</style>
