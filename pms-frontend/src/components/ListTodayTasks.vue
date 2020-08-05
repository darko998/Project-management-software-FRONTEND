<template>
  <div>
    <ul>
      <li v-for="(task,index) in tasks" v-bind:key="index">
        {{ task.title }}
        <br />
        <br />
        <br />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListTodayTasks",
  data () {
    return {
      tasks: [
        {
          title: "Uraditi header i footer.",
          description: "",
          projectId: "1",
          created: "4.8.2020",
          deadline: "6.8.2020.",
          priority: "low",
          done: "90%",
          timeSpent: "3 hours",
          workers: [
            {
              personId: "1",
              name: "Darko Dimitrijevic",
            },
            {
              personId: "2",
              name: "Pera Peric"
            }
          ]
        },
        {
          title: "Kontaktirati klijenta radi dobijanja specifikacije projekta.",
          description: "",
          projectId: "1",
          created: "4.8.2020",
          deadline: "6.8.2020.",
          priority: "low",
          done: "90%",
          timeSpent: "3 hours",
          workers: [
            {
              personId: "1",
              name: "Darko Dimitrijevic",
            },
            {
              personId: "2",
              name: "Pera Peric"
            }
          ]
        },
        {
          title: "Podesiti margine na about stranici i promeniti font.",
          description: "",
          projectId: "1",
          created: "4.8.2020",
          deadline: "6.8.2020.",
          priority: "low",
          done: "90%",
          timeSpent: "3 hours",
          workers: [
            {
              personId: "1",
              name: "Darko Dimitrijevic",
            },
            {
              personId: "2",
              name: "Pera Peric"
            }
          ]
        },
        {
          title: "Kreirati izvrsnu verziju programa.",
          description: "",
          projectId: "1",
          created: "4.8.2020",
          deadline: "6.8.2020.",
          priority: "low",
          done: "90%",
          timeSpent: "3 hours",
          workers: [
            {
              personId: "1",
              name: "Darko Dimitrijevic",
            },
            {
              personId: "2",
              name: "Pera Peric"
            }
          ]
        },
        {
          title: "Uraditi header i footer.",
          description: "",
          projectId: "1",
          created: "4.8.2020",
          deadline: "6.8.2020.",
          priority: "low",
          done: "90%",
          timeSpent: "3 hours",
          workers: [
            {
              personId: "1",
              name: "Darko Dimitrijevic",
            },
            {
              personId: "2",
              name: "Pera Peric"
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
li:hover {
  cursor: pointer;
  color: rgb(146, 143, 143);
}
</style>