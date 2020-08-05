<template>
  <div>
    <div class="container-fluid">
      <div class="row main">
        <div class="col">
          <!--  COLLAPSE FOR TASKS DEPENDING ON DEADILINE  -->
          <div class="accordion" id="accordionExample">
            <!--  TODAY  -->
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <p class="collapsed-title">Tasks that must be finished today</p>
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <!--  TODAY TASKS  -->
                <div class="card-body">
                  <!--  LIST TASKS WITH A CERTAIN TASKS  -->
                  <list-tasks :tasks="tasks" />
                </div>
              </div>
            </div>

            <!--  NEXT THREE DAYS  -->
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <p class="collapsed-title">Tasks that must be finished in three days</p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <!--  NEXT THREE DAYS TASKS  -->
                <div class="card-body">
                  <!--  LIST TASKS WITH A CERTAIN TASKS  -->
                  <list-tasks :tasks="tasks" />
                </div>
              </div>
            </div>

            <!--  UPCOMING  -->
            <div class="card">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <p class="collapsed-title">Upcoming tasks</p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <!--  UPCOMING TASKS  -->
                <div class="card-body">
                  <!--  LIST TASKS WITH A CERTAIN TASKS  -->
                  <list-tasks :tasks="tasks" />
                </div>
              </div>
            </div>

            <!--  ALL  -->
            <div class="card">
              <div class="card-header" id="headingFour">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <p class="collapsed-title">All tasks</p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <!--  ALL TASKS  -->
                <div class="card-body">
                  <!--	SEARCH BOX	-->
                  <div class="input-group mb-5 pl-3 pr-3 searchbox-div">
                    <div class="input-group-prepend">
                      <span class="input-group-text searchbox-icon">
                        <i class="ion-ios-search" height="40px" width="40px" />
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control searchbox"
                      placeholder="Search tasks by Name, Description or Workers"
                    />
                  </div>
                  <!--  LIST TASKS WITH A CERTAIN TASKS  -->
                  <list-tasks :tasks="tasks" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListTasks from '../components/ListTasks.vue'

export default {
  name: "TasksListedCollapse",
  components: {
    'list-tasks': ListTasks
  },
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
  }

}
</script>

<style scoped>
.main {
  padding-top: 50px;
}

.card-body {
  color: black !important;
}

ul {
  list-style-type: none;
}

.collapsed-title {
  color: green;
  font-size: 22px;
}

.searchbox {
  border: 1px solid;
  height: 60px;
  margin-top: 40px;
}

.searchbox-icon {
  border: 1px solid;
  height: 60px;
  margin-left: 25px;
  margin-top: 40px;
}
</style>