<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Sidebar from "./lib/Sidebar.svelte";

  import Icon from "./lib/Icon.svelte";
  import { copyright } from "./lib/icons/copyright";
  import { person } from "./lib/icons/person";
</script>

<main>
  <Sidebar>
    <div>
      <h2>Hello World <Icon icon={person.filled} /></h2>
      <p>
        Check out <a
          href="https://github.com/sveltejs/kit#readme"
          target="_blank"
          rel="noreferrer">SvelteKit</a
        >, the official Svelte app framework powered by Vite!
      </p>
      ``
      <p class="read-the-docs">
        Click on the Vite and Svelte logos to learn more
      </p>
    </div>
    <div slot="branding">
      <Icon fontSize="64px" icon={copyright.outlined} /> Tom Hinkle
    </div>
  </Sidebar>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
