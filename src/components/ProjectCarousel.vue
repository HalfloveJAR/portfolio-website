<template>
  <section class="flex justify-center">
    <project-details
      class="transform scale-90"
      :src="'src/assets/hexwood.png'"
      :name="'Hexwood'"
      :description="'A free-to-play, heavily modified, RPG-like Minecraft server.'"
      :link="'https://store.hexwood.net/'"
    />
    <project-details
      :src="'src/assets/minecraft.avif'"
      :link="'https://www.spigotmc.org/resources/authors/halflove.35019/'"
    />
    <project-details
      class="transform scale-90"
      :src="'src/assets/vue.jpg'"
      :name="'Front-End Development'"
      :description="'Reactive front-end website development using Vue.js.'"
      :link="'https://github.com/HalfloveJAR'"
    />
  </section>
</template>
<script>
  import ProjectDetails from '@/components/ProjectDetails.vue'

  export default {
    name: 'ProjectCarousel',
    components: {
      ProjectDetails
    }
  }
</script>
