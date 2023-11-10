<script lang="ts">
  import GoogleStyles from "./GoogleStyles.svelte";
  let branding: HTMLDivElement;
  let brandingHeight = 60;

  function fixBrandingHeight(el: HTMLDivElement) {
    brandingHeight = el.clientHeight;
  }
</script>

<GoogleStyles />
<div
  class="sidebar branding-below"
  style:--branding-height="{brandingHeight}px"
>
  <slot />
</div>
<div class="sidebar branding bottom" bind:this={branding} use:fixBrandingHeight>
  <slot name="branding">
    <span class="gray">
      Created with
      <a
        target="_blank"
        href="https://github.com/thinkle/google-apps-script-svelte-components.git"
      >
        Google Apps Script Svelte Components
      </a>
      by
      <a target="_blank" href="https://www.tomhinkle.net"> Tom Hinkle </a>
    </span>
  </slot>
</div>

<style>
  .branding-below {
    max-height: calc(100% - var(--branding-height));
  }
</style>
