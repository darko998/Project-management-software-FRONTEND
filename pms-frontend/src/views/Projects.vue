<template>
  <div>
    <all-projects />
    <br />
    <br />
  </div>
</template>

<script>
import AllProjects from '../components/AllProjects'
export default {
  name: "Projects",
  components: {
    "all-projects": AllProjects
  }

}
</script>

<style scoped>
</style>