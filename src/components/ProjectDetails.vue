<template>
  <section
    class="mt-8 pt-8 pb-6 px-8 w-[32rem] hover:-translate-y-1 bg-gray-300 rounded-lg duration-100"
  >
    <img :src="src" class="block object-cover rounded-md w-[32rem] h-[20rem]" />
    <div class="flex flex-row h-max justify-between pt-2 gap-4">
      <div class="pt-4">
        <div class="text-left font-bold">{{ name }}</div>
        <div class="text-left text-wrap">{{ description }}</div>
      </div>
      <action-button class="mt-6" :name="'Details'" :link="link" />
    </div>
  </section>
</template>
<script>
  import ActionButton from '@/components/ActionButton.vue'

  export default {
    name: 'ProjectDetails',
    components: {
      ActionButton
    },
    props: {
      src: {
        type: String,
        default:
          'https://www.minecraft.net/content/dam/games/minecraft/key-art/MC-Vanilla_Media-Block-Image_PC-Bundle-Keyart_800x450.jpg'
      },
      name: {
        type: String,
        default: 'Spigot Plugins'
      },
      description: {
        type: String,
        default: 'A variety of custom coded Spigot/Minecraft server plugins.'
      },
      link: {
        type: String,
        default: 'https://www.spigotmc.org/resources/authors/halflove.35019/'
      }
    }
  }
</script>
