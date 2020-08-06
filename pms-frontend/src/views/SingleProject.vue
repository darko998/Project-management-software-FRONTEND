<template>
  <div class="main-div">
    <!--	TABS	-->
    <section id="tabs">
      <div class="container-fluid">
        <!--	PROJECT TITLE	-->
        <h6 class="section-title h1">{{ this.project.title }}</h6>
        <div class="row">
          <div class="col-md-12 px-5 tabs-col">
            <nav>
              <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                <!--  TAB PROJECT PREVIEW  -->
                <a
                  class="nav-item nav-link active"
                  id="nav-preview-tab"
                  data-toggle="tab"
                  href="#nav-preview"
                  role="tabpanel"
                  aria-labelledby="nav-preview-tab"
                >Project preview</a>

                <!--  TAB TASKS (LIST)  -->
                <a
                  class="nav-item nav-link"
                  id="nav-tasks-list-tab"
                  data-toggle="tab"
                  href="#nav-tasks-list"
                  role="tab"
                  aria-controls="nav-tasks-list"
                  aria-selected="false"
                >Tasks (List)</a>

                <!--  TAB TASKS LISTED BY CATEGORY  -->
                <a
                  class="nav-item nav-link"
                  id="nav-tasks-category-tab"
                  data-toggle="tab"
                  href="#nav-tasks-category"
                  role="tab"
                  aria-controls="nav-tasks-category"
                  aria-selected="false"
                >Tasks (By categories)</a>

                <!--  TAB NEW TASK  -->
                <a
                  class="nav-item nav-link"
                  id="nav-new-task-tab"
                  data-toggle="tab"
                  href="#nav-new-task"
                  role="tab"
                  aria-controls="nav-new-task"
                  aria-selected="false"
                >New task</a>
              </div>
            </nav>
            <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
              <!--	PROJECT PREVIEW COMPONENT	-->
              <div class="tab-pane fade show active" id="nav-preview" role="tabpanel">
                <project-preview :project="this.project" />
              </div>

              <!--	TASKS LIST	-->
              <div
                class="tab-pane fade"
                id="nav-tasks-list"
                role="tabpanel"
                aria-labelledby="nav-tasks-list-tab"
              >
                <tasks-listed-collapse />
              </div>

              <!--  TASKS LISTED BY CATEGORY  -->
              <div
                class="tab-pane fade"
                id="nav-tasks-category"
                role="tabpanel"
                aria-labelledby="nav-tasks-category-tab"
              >
                <tasks-listed-by-category />
              </div>

              <!--  NEW TASK  -->
              <div
                class="tab-pane fade"
                id="nav-new-task"
                role="tabpanel"
                aria-labelledby="nav-new-task-tab"
              >
                <create-task />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectPreview from '../components/ProjectPreview.vue'
import TasksListedCollapse from '../components/TasksListedCollapse.vue'
import TasksListedByCategories from '../components/TasksListedByCategory.vue'
import CreateTask from '../components/CreateTask.vue'

export default {
  name: 'SingleProject',
  components: {
    'project-preview': ProjectPreview,
    'tasks-listed-collapse': TasksListedCollapse,
    'tasks-listed-by-category': TasksListedByCategories,
    'create-task': CreateTask
  },
  data () {
    return {
      projectId: this.$route.params.id,
      project: {
        id: "1",
        title: "Softver za upravljanje projektima",
        description: "Potrebno napraviti softver za upravljanje projektima.",
        created: "3.8.2020.",
        deadline: "12.10.2020.",
        status: "active",
        priority: "high",
        done: "66%",
        timeSpent: "103 hours",
        owner: "Darko Dimitrijevic",
        budget: "3000 $",
        company: {
          title: "DARDI d.o.o.",
          rate: "4.9",
          companyActivity: "Outsourced Marketing",
          numOfEmployees: "11-50 Employees",
          created: "1.1.2015.",
          address: {
            street: "St. Georgie",
            number: "19",
            city: "London",
            country: "England"

          }
        }

      }
    }
  },
  methods: {
    loadProject () {
      //TODO
    }
  },
  created () {
    this.loadProject(this.projectId);
  }
}
</script>

<style scoped>
section {
  padding: 60px 0;
}

section .section-title {
  text-align: center;
  color: #007b5e;
  margin-bottom: 50px;
  text-transform: uppercase;
}
#tabs {
  background: #007b5e;
  color: #eee;
}
#tabs h6.section-title {
  color: #eee;
}

#tabs .nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #f3f3f3;
  background-color: transparent;
  border-color: transparent transparent #f3f3f3;
  border-bottom: 4px solid !important;
  font-size: 20px;
  font-weight: bold;
}
#tabs .nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  color: #eee;
  font-size: 20px;
}

.container-fluid {
  padding-right: 30px;
}

.tabs-col {
  min-height: 400px;
}

/*
#nav-tab {
  background: #333;
  padding: 10px;
  border-radius: 25px;
}
*/
</style>