<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <!--	5 MOST ACTIVE COMPANIES	-->
        <ul>
          <li v-for="(company, index) in companies" v-bind:key="index">{{ company.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MostActiveCompanies",
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
      ]
    }
  }

}
</script>

<style scoped>
ul {
  list-style-type: none;
  display: inline-block;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
  font-size: 24px;
  font-style: bold !important;
  cursor: pointer;
  margin-right: 80px;
}

li:hover {
  color: black;
}
</style>