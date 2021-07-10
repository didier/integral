<script>
  import { toKebabCase } from '$lib/utils/toKebabCase'

  export let title
</script>

<section id={toKebabCase(title)}>
  <header>
    <a href="#{toKebabCase(title)}">
      <h2>{title}</h2>
    </a>
  </header>
  <slot />
</section>

<style>
  section {
    margin: -var(--integral-padding-y) -var(--integral-padding-x);
  }

  section > :global(main) {
    border-radius: 0.5rem;
    background: var(--gray-50);
    border: 1px solid var(--gray-200);
    padding: var(--integral-padding-x);
  }
</style>
