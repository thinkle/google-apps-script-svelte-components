<script lang="ts">
  export let depth: 1 | 2 | 3 | 4 | 5 = 1;
</script>

<div
  class="card"
  class:depth-1={depth == 1}
  class:depth-2={depth == 2}
  class:depth-3={depth == 3}
  class:depth-4={depth == 4}
  class:depth-5={depth == 5}
>
  <slot />
</div>

<style>
  .card {
    padding: var(--margin, 16px);
    margin-top: var(--margin, 16px);
    margin-bottom: var(--margin, 16px);
  }
  .depth-1 {
    box-shadow: var(--shadow-1);
  }
  .depth-2 {
    box-shadow: var(--shadow-2);
  }
  .depth-3 {
    box-shadow: var(--shadow-3);
  }
  .depth-4 {
    box-shadow: var(--shadow-4);
  }
  .depth-5 {
    box-shadow: var(--shadow-5);
  }
</style>
