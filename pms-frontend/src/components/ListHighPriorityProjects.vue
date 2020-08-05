<template>
  <div>
    <div class="container-fluid">
      <ul>
        <h2 class="mt-5 mb-4 text-center font-weight-bold text-monospace">
          <p class="subtitle">HIGH priority projects</p>
        </h2>
        <li v-for="(project,index) in projects" v-bind:key="index">
          <div class="col mt-3">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-5">
                    <!--	PROJECT TITLE	-->
                    <h5 class="card-title" onclick="openJobPage()">
                      <strong>{{ project.title }}</strong>
                    </h5>
                    <h6
                      class="card-subtitle mb-2 text-danger font-weight-bold"
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
</template>

<script>
export default {
  name: "ListDeadlineProjects",
  data () {
    return {

      projects: [
        {
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
  }

}
</script>

<style scoped>
.pagination-div {
  width: 100%;
  padding-right: 14px;
}
.pagination {
  float: right;
}
.subtitle {
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
}
.card {
  width: 100%;
  /*background: #d9dce0;*/
  background: #009b6080;
  z-index: -1;
}

.card-title:hover {
  cursor: pointer;
}

.job-detail-text {
  font-size: 15px;
  font-weight: bold;
}

.company-title {
  font-size: 20px;
  font-weight: bold;
}

.company-title:hover {
  cursor: pointer;
}

.apply-btn {
  width: 90%;
}

.company-title-div {
  display: inline-block;
  margin-right: 10%;
  vertical-align: top;
}

.company-star-rate-div {
  display: inline-block;
  vertical-align: top;
}

#header-icon {
  font-size: 3em;
  color: white;
}

#header-title {
  font-size: 32px;
}

#log-icon {
  font-size: 2em;
}
</style>