<template>
  <div>
    <!--  LIST PROJECTS  -->
    <div class="container-fluid">
      <div class="col-md-10 projects">
        <list-deadline-projects />
        <br />
        <br />
        <list-high-priority-projects />
      </div>

      <!--  LIST TASKS  -->
      <div class="col-md-2 tasks text-center text-white">
        <h1 class="subtitle-tasks">Tasks that must be completed today</h1>
        <hr class="hr-white" />
        <div>
          <list-today-tasks class="list-tasks" />
        </div>
      </div>
    </div>

    <!--  MOST ACTIVE COMPANIES   -->
    <div class="container-fluid companies">
      <div class="companies text-center text-bold text-muted">
        <br />
        <br />
        <br />
        <p class="subtitle-most-active-companies">
          <strong>Most active companies</strong>
        </p>
        <hr />
        <most-active-companies />
      </div>
    </div>

    <br />
    <br />
    <br />
  </div>
</template>

<script>
import ListDeadlineProjects from '../components/ListDeadLineProjects.vue'
import ListHighPriorityProjectsVue from '../components/ListHighPriorityProjects.vue'
import ListTodayTasks from '../components/ListTodayTasks.vue'
import MostActiveCompanies from '../components/MostActiveCompanies'

export default {
  name: "Home",
  components: {
    'list-deadline-projects': ListDeadlineProjects,
    'list-high-priority-projects': ListHighPriorityProjectsVue,
    'list-today-tasks': ListTodayTasks,
    'most-active-companies': MostActiveCompanies
  }

}
</script>

<style scoped>
.subtitle-most-active-companies {
  font-size: 18px;
}
.tasks {
  background: #333;
  border-radius: 25px;
  padding: 20px;
  margin-top: 107px;
  display: inline-block;
  vertical-align: top;
}

.projects {
  display: inline-block;
}

.main {
  padding-right: 40px;
}

.hr-white {
  border: 1px solid white;
}

.subtitle-tasks {
  font-size: 22px;
}

.list-tasks {
  font-size: 18px;
  text-align: start !important;
}

@media screen and (max-width: 759px) {
  .main {
    padding-left: 40px;
  }
}
</style>