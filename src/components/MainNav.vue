<template>
  <header class="w-full text-sm text-white">
    <div class="fixed top-0 z-50 left-0 w-full h-16 bg-slate-600">
      <div class="flex flex-nowrap h-full border-b border-solid border-slate-500 px-8 mx-auto">
        <a href="/" class="mx-8 flex h-full items-center text-xl font-bold">{{ company }}</a>

        <!--Right hand menu items -->
        <nav class="mx-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem" class="h-full ml-9 first:ml-0">
              <a :href="panelUrl" class="flex h-full items-center py-2.5">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  import ActionButton from '@/components/ActionButton.vue'

  export default {
    name: 'MainNav',
    components: {
      ActionButton
    },
    data() {
      return {
        company: 'Kobe Plane',
        panelUrl: 'https://panel.deeznodes.com/',
        menuItems: ['GitHub', 'LinkedIn', 'Contact Me']
      }
    }
  }
</script>
