<script lang="ts">
  import Icon from "./Icon.svelte";
  export let label: string | null;
  export let expanded: boolean = false;
  let bodyEl: HTMLDivElement;
  import { expand_less } from "./icons/expand_less";
  import { expand_more } from "./icons/expand_more";
  import Block from "./Block.svelte";
  let icon = expand_more.round;
  $: icon = (expanded && expand_less.round) || expand_more.round;
  let bodyHeight = 10;
  $: {
    bodyHeight = bodyEl?.clientHeight;
  }

  function toggle(e) {
    e.stopPropagation();
    console.log("Toggling!", expanded, "=>", !expanded);
    expanded = !expanded;
  }
</script>

<Block>
  <section style:--bodyHeight="{bodyHeight}px">
    <div class="head">
      <button on:click={toggle}>
        <span><slot name="label">{label}</slot></span>
        <span> <Icon {icon} /></span>
      </button>
    </div>
    <div class="body-wrap" class:expanded class:hidden={!expanded}>
      <div class="body" bind:this={bodyEl}>
        <slot />
      </div>
    </div>
  </section>
</Block>

<style>
  div {
    box-sizing: border-box;
  }
  .body :global(:nth-child(1)) {
    margin-top: 0;
  }
  .hidden {
    opacity: 0;
    pointer-events: none;
    height: 0;
    transform: translate(0, -100%);
  }
  .body-wrap {
    overflow: hidden;
    transition: height 300ms;
    padding: 1px 0;
  }
  .hidden .body {
    transform: translate(0, -100%);
  }
  .expanded .body {
    transform: translate(0, 0);
  }
  .expanded {
    height: var(--bodyHeight);
  }
  .head {
    font-size: var(--size, 16px);
  }
  .body {
    box-sizing: border-box;
    transition: all 300ms;
    padding-left: var(--margin-left, var(--margin, 16px));
  }
  .head button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: transparent;
    border: none;
  }
  section {
    box-shadow: var(--shadow, var(--shadow-1));
    padding: var(--margin, 16px);
    overflow: hidden;
  }
  button {
    background: transparent;
    border: none;
  }
  button:active {
    box-shadow: none;
  }
</style>
