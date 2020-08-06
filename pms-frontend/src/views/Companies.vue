<template>
  <div class="main-div">
    <div class="container-fluid">
      <!--<div class="title text-center">
        <h2>All companies</h2>
      </div>-->
      <div class="row">
        <!--	 LIST OF COMPANIES	-->
        <div class="col-md-4">
          <list-companies :companies="companies" />
        </div>

        <!--	LIST OF PROJECTS WHICH BELONGS SELECTED COMPANY	-->
        <div class="col">
          <company-overview />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListCompanies from '../components/ListCompanies.vue'
import CompanyOverview from '../components/CompanyOverview.vue'

export default {
  name: 'Companies',
  components: {
    'list-companies': ListCompanies,
    'company-overview': CompanyOverview
  },
  data () {
    return {
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
          title: "SALTA d.o.o.",
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
          title: "ATLAS d.o.o.",
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
          title: "Vizija d.o.o.",
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
      ]
    }
  }

}
</script>

<style scoped>
.title {
  text-transform: uppercase;
  font-weight: bolder;
  margin-bottom: 70px;
  color: white;
}

.main-div {
  background: #007b5e;
  padding-top: 40px;
}
</style>