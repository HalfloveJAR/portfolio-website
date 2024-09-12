<template>
  <section class="flex flex-wrap justify-center">
    <div v-for="(project, index) in projectList" :key="index" class="w-full md:w-1/3 p-4">
      <project-details
        :src="project.picture"
        :name="project.name"
        :link="project.link"
        :description="project.description"
      />
    </div>
  </section>
</template>

<script>
  import ProjectDetails from '@/components/ProjectDetails.vue'

  export default {
    name: 'AllProjects',
    components: {
      ProjectDetails
    },
    data() {
      return {
        projectList: [
          {
            name: 'Daily Rewards 2',
            link: 'https://www.spigotmc.org/resources/daily-rewards-2.115112/',
            picture: 'src/assets/dr2.png',
            description:
              'A Minecraft Spigot plugin that allows you to reward players daily with infinite rewards.'
          },
          {
            name: 'Snowball Damage',
            link: 'https://www.spigotmc.org/resources/snowball-damage.16740/',
            picture: 'src/assets/snowdamage.jpg',
            description:
              'A Minecraft Spigot plugin that allows you to modify the damage snowballs and eggs deal.'
          }
        ]
      }
    }
  }
</script>
