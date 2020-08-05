<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <!--	FILTER DIV	-->
        <div class="col-md-1 mt-5 filter-div">
          <form>
            <!-- DROPDOWN FOR PROJECT STATUS-->
            <div>
              <label for="project-status">
                <strong>Status</strong>
              </label>
              <select class="form-control status" id="project-status" v-model="priorities[0]">
                <option v-for="(priority, index) in priorities" v-bind:key="index">{{ priority }}</option>
              </select>
            </div>

            <br />
            <br />

            <!--	DROPDOWN FOR PROJECT PRIORITY	-->
            <div>
              <label for="project-priority">
                <strong>Priority</strong>
              </label>
              <select class="form-control priority" id="project-priority" v-model="statuses[0]">
                <option v-for="(status, index) in statuses" v-bind:key="index">{{ status }}</option>
              </select>
            </div>

            <br />
            <br />

            <!--	DEADLINE DATETIME PICKER	-->
            <div>
              <label for="deadline-date">
                <strong>Deadline</strong>
              </label>
              <input type="datetime-local" class="form-control" placeholder="Deadline" />
            </div>

            <br />
            <br />

            <!--	PROJECT BUDGET	-->
            <div>
              <label for="budget-from">
                <strong>Budget</strong>
              </label>
              <select class="form-control currency" id="project-currency" v-model="currency[0]">
                <option
                  v-for="(currencyItem, index) in currency"
                  v-bind:key="index"
                >{{ currencyItem }}</option>
              </select>
              <input type="text" class="form-control mt-2" placeholder="From" />
              <input type="text" class="form-control mt-2" placeholder="To" />
            </div>

            <br />
            <br />

            <!--	TIME SPENT SO FAR	-->
            <div>
              <label for="time-spent-from">
                <strong>Time spent so far</strong>
              </label>
              <input type="text" id="time-spent-from" class="form-control mt-2" placeholder="From" />
              <input type="text" class="form-control mt-2" placeholder="To" />
            </div>

            <button type="submit" class="btn btn-success mt-5 ml-3 btn-submit">Filter</button>
          </form>
        </div>

        <!--	LIST OF PROJECTS	-->
        <div class="col">
          <ul>
            <h2 class="subtitle mt-5 mb-4 text-center font-weight-bold text-monospace">
              <p class="subtitle">All projects</p>
            </h2>

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
                placeholder="Search projects by Name, Description or Company"
              />
            </div>
            <li v-for="(project,index) in projects" v-bind:key="index">
              <div class="col mt-3">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-5">
                        <!--	PROJECT TITLE	-->
                        <h5 class="card-title" @click="openSingleProjectPage(project.id)">
                          <strong>{{ project.title }}</strong>
                        </h5>
                        <h6
                          class="card-subtitle mb-2"
                        >Priority: {{ project.priority.toUpperCase() }}</h6>

                        <!--	PROJECT DESC	-->
                        <p class="card-text">{{ project.description }}</p>
                      </div>

                      <!--	PROJECT CREATED	-->
                      <div class="col text-center">
                        Created:
                        <hr />
                        <p>
                          <strong>{{ project.created }}</strong>
                        </p>
                      </div>

                      <!--	PROJECT DEADILINE	-->
                      <div class="col text-center">
                        Deadline:
                        <hr />
                        <p>
                          <strong>{{ project.deadline }}</strong>
                        </p>
                      </div>

                      <!--	PROJECT DONE IN PERCENTAGE	-->
                      <div class="col text-center">
                        Done:
                        <hr />
                        <p>
                          <strong>{{ project.done }}</strong>
                        </p>
                      </div>

                      <!--	PROJECT TIME SPENT SO FAR	-->
                      <div class="col text-center">
                        Time spent so far:
                        <hr />
                        <p>
                          <strong>{{ project.timeSpent }}</strong>
                        </p>
                      </div>

                      <!--	PROJECT BUDGET	-->
                      <div class="col text-center">
                        Budget:
                        <hr />
                        <p>
                          <strong>{{ project.budget }}</strong>
                        </p>
                      </div>

                      <!--	COMPANY DETAILS	-->
                      <div class="col text-center">
                        <!--	COMPANY TITLE	-->
                        <div class="company">
                          Company:
                          <hr />
                          <p
                            class="company-title"
                            onclick="redirectToCompanyPage()"
                          >{{ project.company.title }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <!--	PAGINATION	-->
            <div class="pagination-div">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#">Previous</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListDeadlineProjects",
  data () {
    return {
      statuses: ['All', 'Waiting', 'Planning', 'Active', 'Done'],
      priorities: ['All', 'Low', 'Medium', 'High', 'Urgent'],
      currency: ['EUR', 'RSD', 'USD'],
      projects: [
        {
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

        },
        {
          id: "2",
          title: "Softver za upravljanje projektima",
          description: "Potrebno napraviti softver za upravljanje projektima. Specifikacija zahteva je sledeca...",
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

        },
        {
          id: "3",
          title: "Softver za upravljanje projektima",
          description: "Potrebno napraviti softver za upravljanje projektima. Specifikacija zahteva je sledeca...",
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

        },
        {
          id: "4",
          title: "Softver za upravljanje projektima",
          description: "Potrebno napraviti softver za upravljanje projektima. Specifikacija zahteva je sledeca...",
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

        },
        {
          id: "5",
          title: "Softver za upravljanje projektima",
          description: "Potrebno napraviti softver za upravljanje projektima. Specifikacija zahteva je sledeca...",
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
      ]
    }
  },
  methods: {
    openSingleProjectPage (id) {
      console.log('fdsafsda')
      this.$router.push({ name: 'singleProject', params: { id: id } })
    }
  }

}
</script>

<style scoped>
.searchbox {
  border: 1px solid;
  height: 60px;
  max-width: 100%;
}

.searchbox-icon {
  border: 1px solid;
  height: 60px;
}

.btn-submit {
  width: 100%;
}
.form-control {
  width: 100%;
}

.filter-div {
  padding-top: 60px;
  z-index: 1;
}
.pagination-div {
  width: 100%;
  padding-right: 14px;
}

.pagination {
  float: right;
}

.subtitle {
  z-index: -1;
  font-size: 28px;
}

.hr-red {
  border: 1px solid red;
}

ul {
  list-style-type: none;
}

.container-fluid {
  width: 100%;
  padding-left: 20px;
}
.card {
  width: 100%;
  /*background: #d9dce0;*/
  background: #009b6080;
}

.card-title:hover {
  cursor: pointer;
}

.company-title {
  font-size: 20px;
  font-weight: bold;
}

.company-title:hover {
  cursor: pointer;
}

.company-title-div {
  display: inline-block;
  margin-right: 10%;
  vertical-align: top;
}

#header-icon {
  font-size: 3em;
  color: white;
}

#header-title {
  font-size: 32px;
}

.card-subtitle {
  font-style: bold;
}

@media screen and (max-width: 759px) {
  .filter-div {
    padding-left: 80px;
  }
}

@media screen and (min-width: 1600px) {
  .form-control {
    min-width: 200px;
  }
}
</style>