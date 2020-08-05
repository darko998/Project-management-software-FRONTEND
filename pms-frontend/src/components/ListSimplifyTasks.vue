<template>
  <ul>
    <li v-for="(task, index) in tasks" v-bind:key="index">
      <div class="mb-3 task">{{ task.title }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListSimplifyTasks",
  data () {
    return {
      tasks: [
        {
          title: "Uraditi header i footer.",
          description: "Mora biti zavrseno u sto kracem roku.",
          projectId: "1",
          projectName: "Softver za upravljanje projektima",
          companyName: "DARDI d.o.o.",
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
          description: "Mora biti zavrseno u sto kracem roku.",
          projectId: "1",
          projectName: "Softver za upravljanje projektima",
          companyName: "DARDI d.o.o.",
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
          description: "Mora biti zavrseno u sto kracem roku.",
          projectId: "1",
          projectName: "Softver za upravljanje projektima",
          companyName: "DARDI d.o.o.",
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
          description: "Mora biti zavrseno u sto kracem roku.",
          projectId: "1",
          projectName: "Softver za upravljanje projektima",
          companyName: "DARDI d.o.o.",
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
          description: "Mora biti zavrseno u sto kracem roku.",
          projectId: "1",
          projectName: "Softver za upravljanje projektima",
          companyName: "DARDI d.o.o.",
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
  },
  props: ['status']
}
</script>

<style scoped>
.card {
  /*background: rgb(99, 98, 98);*/
  background: rgb(255, 142, 142);
}

.task-title {
  font-size: 18px;
}

.task {
  background: #dddddd;
  padding: 10px;
  border-radius: 5px;
  color: black;
  font-size: 18px;
  cursor: pointer;
}
</style>