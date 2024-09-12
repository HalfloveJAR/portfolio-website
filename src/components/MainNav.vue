<template>
  <header class="w-full text-sm text-white">
    <div class="fixed top-0 z-50 left-0 w-full h-16 bg-slate-600">
      <div class="flex flex-nowrap h-full border-b border-solid border-slate-500 px-8 mx-auto">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          class="mx-8 flex h-full items-center text-xl font-bold"
          >{{ company }}</a
        >

        <!--Right hand menu items -->
        <nav class="mx-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem" class="h-full ml-9 first:ml-0">
              <a
                :href="menuItem.link"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-full items-center py-2.5"
                >{{ menuItem.name }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'MainNav',
    data() {
      return {
        company: 'Kobe Plane',
        panelUrl: 'https://panel.deeznodes.com/',
        menuItems: [
          {
            name: 'GitHub',
            link: 'https://github.com/HalfloveJAR'
          },
          {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/kobeplane/'
          },
          {
            name: 'Website Code',
            link: 'https://github.com/HalfloveJAR/portfolio-website'
          },
          {
            name: 'Contact Me',
            link: ''
          }
        ]
      }
    }
  }
</script>
