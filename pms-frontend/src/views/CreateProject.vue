<template>
  <div class="main-div">
    <div class="container-fluid">
      <h3 class="page-title text-center">
        <strong>Create project</strong>
      </h3>
      <div class="row">
        <div class="col mt-5">
          <!--  INPUT TITLE  -->
          <div class="div-title">
            <p class="subtitle text-center">Title</p>
            <input type="text" class="form-control title" placeholder="Enter title" />
          </div>

          <br />
          <br />

          <!--  INPUT DESCRIPTION  -->
          <div class="div-desc">
            <p class="subtitle text-center">Description</p>
            <textarea class="form-control desc" placeholder="Enter task description"></textarea>
          </div>

          <!--  INPUT DEADLINE  -->
          <div class="div-deadline ml-5 mt-5">
            <p class="subtitle text-center">Deadline</p>
            <input type="datetime-local" class="form-control" placeholder="Deadline" />
          </div>

          <!--  INPUT COMPANY  -->
          <div class="div-deadline ml-5 mt-5">
            <p class="subtitle text-center">Company</p>
            <select class="form-control" v-model="selectedCompany">
              <option v-for="(company, index) in companies" v-bind:key="index">{{ company.title }}</option>
            </select>
          </div>
        </div>

        <div class="col mt-5">
          <!--  INPUT PRIORITY  -->
          <div class="div-priority input-component-width">
            <p class="subtitle text-center">Priority</p>
            <select class="form-control" v-model="priorities[0]">
              <option v-for="(priority, index) in priorities" v-bind:key="index">{{ priority }}</option>
            </select>
          </div>

          <!--  INPUT STATUS  -->
          <div class="div-status input-component-width mt-5">
            <p class="subtitle text-center">Status</p>
            <select class="form-control" v-model="statuses[0]">
              <option v-for="(status, index) in statuses" v-bind:key="index">{{ status }}</option>
            </select>
          </div>

          <!--  INPUT BUDGET  -->
          <div class="div-budget input-component-width mt-5">
            <p class="subtitle text-center">Budget</p>
            <div class="row">
              <div class="col-md-10">
                <input type="text" class="form-control" placeholder="Enter budget" />
              </div>
              <div class="col-md-2">
                <select class="form-control" v-model="currency[0]">
                  <option v-for="(currency, index) in currency" v-bind:key="index">{{ currency }}</option>
                </select>
              </div>
            </div>
          </div>

          <!--  CHOOSE WORKERS  -->
          <div class="div-priority input-component-width mt-5">
            <p class="subtitle text-center">Workers</p>
            <!--  MULTISELECT FOR ADDING WORKER  -->
            <multiselect
              class="multiselect"
              v-model="selectedWorkers"
              :options="workers"
              :multiple="true"
              placeholder="Select workers"
            ></multiselect>
          </div>

          <!--  DONE IN PERCENTAGE  -->
          <div class="div-done input-component-width mt-5">
            <p class="subtitle text-center">Done in percentage</p>
            <input
              type="text"
              class="form-control percentage"
              placeholder="Enter done percentage"
              value="0 %"
              disabled
            />
          </div>

          <!--  TIME SPENT SO FAR (IN HOURS)  -->
          <div class="div-done input-component-width mt-5">
            <p class="subtitle text-center">Time spent so far (in hours)</p>
            <input
              type="text"
              class="form-control percentage"
              placeholder="Enter time spent so far on this task (in hours)"
              value="0 hours"
              disabled
            />
          </div>
        </div>
      </div>

      <br />

      <div class="row mt-5 button-row">
        <div class="col text-center">
          <input type="submit" class="btn btn-dark btn-submit" value="Save project" />
        </div>
      </div>
    </div>

    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: 'CreateTask',
  data () {
    return {
      priorities: ['Low', 'Medium', 'High', 'Urgent'],
      statuses: ['Waiting', 'Planning', 'Active', 'Done'],
      workers: ["Darko Dimitrijevic", "Pera Peric", "Marko Markovic"],
      currency: ['EUR', 'RSD', 'USD'],
      companies: [
        {
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
        },
        {
          title: "PIS d.o.o.",
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
        },
        {
          title: "DELTA HOLDING d.o.o.",
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
        },
        {
          title: "VIZIJA d.o.o.",
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
        },
        {
          title: "DAREX HOLDING d.o.o.",
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
      ],
      selectedWorkers: null,
      selectedCompany: null

    }
  }


}
</script>

<style scoped>
.page-title {
  font-size: 30px;
  color: white;
  text-transform: uppercase;
  margin-bottom: 80px;
}

.main-div {
  background: #007b5e;
  color: white;
  padding-top: 30px;
}

.title {
  max-width: 90%;
  margin: 0 auto;
}

.subtitle {
  margin-bottom: 10px;
  font-size: 18px;
  color: white;
  text-transform: uppercase;
}

.desc {
  max-width: 90%;
  margin: 0 auto;
  min-height: 150px;
}

.ion-ios-add-circle-outline {
  font-size: 50px;
  cursor: pointer;
}

.ion-ios-add-circle-outline:hover {
  transform: translateY(3px);
}

.add-icon-div {
  text-align: center;
}

.input-component-width {
  width: 80%;
  margin: 0 auto;
}

.div-deadline {
  width: 50%;
}

.btn-submit {
  width: 10%;
  height: 50px;
  text-transform: uppercase;
  font-weight: bold;
}
</style>