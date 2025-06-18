<template>
  <code class="code">
    <slot />
  </code>
</template>

<style lang="css" scoped>
@reference "~/assets/css/main.css";

.code {
  @apply border border-border;

  padding-block: 0.05em;
  padding-inline: 0.4em;
  border-radius: 0.25rem;
  font-size: 0.9em;
  font-family: var(--font-fira);
  font-weight: normal;
  white-space: nowrap;
  transition: border 0.3s ease;
}
</style>
