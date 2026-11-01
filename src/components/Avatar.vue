
<script setup lang="ts">
withDefaults(defineProps<{
  name: string
  image?: string
  size?: 'sm' | 'md' | 'lg'
}>(), {
  image: '',
  size: 'md'
})
</script>

<template>
  <div class="flex items-center gap-3">

    <img
      v-if="image"
      :src="image"
      :alt="name"
      :class="[
        'rounded-full object-cover',
        {
          'w-8 h-8': size === 'sm',
          'w-12 h-12': size === 'md',
          'w-16 h-16': size === 'lg'
        }
      ]"
    />

    <div
      v-else
      :class="[
        'rounded-full flex items-center justify-center font-bold',
        'bg-linear-to-br from-indigo-600 to-purple-600 text-white',
        {
          'w-8 h-8 text-xs': size === 'sm',
          'w-12 h-12 text-sm': size === 'md',
          'w-16 h-16 text-lg': size === 'lg'
        }
      ]"
    >
      {{ name.charAt(0).toUpperCase() }}
    </div>

    <span class="font-semibold text-gray-900 dark:text-white">
      {{ name }}
    </span>

  </div>
</template>

