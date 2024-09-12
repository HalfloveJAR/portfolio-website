<template>
  <main-nav />
  <section class="w-full flex flex-col py-32 justify-center bg-slate-100">
    <div class="text-center text-2xl font-bold">Notable Projects</div>
    <project-carousel class="mt-4" />
  </section>
  <section class="w-full flex flex-col py-16 justify-center bg-slate-200">
    <div class="text-center text-2xl font-bold">Other Projects</div>
    <all-projects />
  </section>
  <section class="w-full flex flex-col pt-16 justify-center bg-slate-600">
    <!--FOOTER-->
  </section>
</template>

<script>
  import MainNav from '@/components/MainNav.vue'
  import ProjectCarousel from '@/components/ProjectCarousel.vue'
  import AllProjects from '@/components/AllProjects.vue'

  export default {
    name: 'App',
    components: {
      ProjectCarousel,
      AllProjects,
      MainNav //main-nav
    }
  }
</script>
