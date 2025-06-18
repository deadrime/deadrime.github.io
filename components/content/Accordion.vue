<template>
  <details
    class="details"
    :open="open"
    @change="toggle"
  >
    <summary class="summary">
      <span class="text-primary font-semibold select-none">
        {{ summary }}
      </span>

      <span>
        <SvgArrowdown
          width="12px"
          height="12px"
          class="icon"
        />
      </span>
    </summary>
    <span class="text-text/80">
      <slot />
    </span>
  </details>
</template>

<script lang="ts" setup>
import SvgArrowdown from '~/assets/icons/arrowdown.svg'

const { summary } = defineProps<{ summary: string }>()
const open = ref(false)

const toggle = () => {
  open.value = !open.value
}
</script>

<style scoped>
.summary {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  cursor: pointer;

  &::-webkit-details-marker {
    display: none;
  }

  list-style: none;
}

.details {
  &[open] {
    .icon {
      transform: scaleY(-1);
    }
  }
}
</style>
