<template>
  <a :href="link" target="_blank" rel="noopener noreferrer">
    <button
      class="rounded border-0 h-fit px-5 py-3 font-medium text-white bg-brand-blue-1 hover:shadow-blue duration-100"
    >
      {{ name }}
    </button>
  </a>
</template>

<script>
  export default {
    name: 'ActionButton',
    props: {
      name: {
        type: String,
        default: 'Sign In'
      },
      link: {
        type: String,
        default: 'https://www.spigotmc.org/resources/authors/halflove.35019/'
      }
    }
  }
</script>
