<script lang="ts">
  import Icon from "./Icon.svelte";
  export let label: string | null;
  let expanded: boolean = false;
  import { expand_less, expand_more } from "./icons/";
  import { fly } from "svelte/transition";
  import Block from "./Block.svelte";
  let icon = expand_more.round;
  $: icon = (expanded && expand_less.round) || expand_more.round;
</script>

<Block>
  <section>
    <div class="head">
      <label
        on:click={() => (expanded = !expanded)}
        on:keyup={() => (expanded = !expanded)}
      >
        <span>{label}</span>
        <Icon {icon} />
      </label>
    </div>
    {#if expanded}
      <div class="body" in:fly={{ y: -200 }} out:fly={{ y: -200 }}>
        <slot />
      </div>
    {/if}
  </section>
</Block>

<style>
  .head {
    font-size: var(--size, 16px);
  }
  .body {
    padding-left: var(--margin, 16px);
  }
  .head label {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  section {
    box-shadow: var(--shadow, var(--shadow-1));
    padding: var(--margin, 16px);
    overflow: hidden;
  }
</style>
