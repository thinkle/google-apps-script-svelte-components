<script>
  import GoogleStyles from "./GoogleStyles.svelte";
</script>

<GoogleStyles />
<div class="sidebar branding-below">
  <slot />
</div>
<div class="sidebar branding bottom">
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
