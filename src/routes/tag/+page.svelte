<script>
    import { TegakiRenderer } from 'tegaki/svelte';
    import bundle from 'tegaki/fonts/caveat';
  </script>
  
  <TegakiRenderer
    font={bundle}
    text="Alexdoesvoices"
    time={{ mode: 'uncontrolled', speed: 1, loop: true }}
    style="font-size: 48px "
  />