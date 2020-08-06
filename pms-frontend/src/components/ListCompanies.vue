<template>
  <div>
    <div class="row">
      <div class="title text-center">
        <h2>All companies</h2>
      </div>

      <!--	CREATE COMPANY ICON	-->
      <div class="create-company-div">
        <i
          class="ion-ios-add-circle-outline create-company-icon"
          @click="redirectToCreateCompanyPage()"
        />
        <p class="icon-text">Create company</p>
      </div>
    </div>
    <ul>
      <!--	SEARCH BOX	-->
      <div class="input-group mb-5 searchbox-div">
        <div class="input-group-prepend">
          <span class="input-group-text searchbox-icon">
            <i class="ion-ios-search" height="40px" width="40px" />
          </span>
        </div>
        <input type="text" class="form-control searchbox" placeholder="Search companies by Name" />
      </div>

      <!--	LIST	-->
      <li v-for="(company, index) in companies" v-bind:key="index">
        <div class="card mb-3" @click="paintCard($event.currentTarget)">
          <div class="card-body">
            <div class="card-title text-muted">{{ company.title }}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListCompanies',
  props: ['companies'],
  date () {
    return {
      lastClickedCompany: null
    }
  },
  methods: {
    paintCard (element) {
      /** Previous element we need to paint back in white, because
       * we don't want to have more than one element painted in black.
       * Black color means that element is selected.
       */

      if (this.lastClickedCompany != null || this.lastClickedCompany != undefined) {
        this.lastClickedCompany.style.background = 'white';
      }
      this.lastClickedCompany = element;
      this.lastClickedCompany.style.background = '#333';
    },
    redirectToCreateCompanyPage () {
      this.$router.push({ name: 'createCompany' })
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
  margin: 50px auto;
}

ul {
  list-style-type: none;
}

li {
  text-align: center;
  vertical-align: middle;
  font-size: 24px;
  font-weight: bold;
  background: #007b5e9a;
}

.searchbox-div {
  min-height: 40px;
}

.searchbox {
  min-height: 40px;
  background: #333;
  color: white;
  border-radius: 25px;
}

.searchbox:focus {
  min-height: 40px;
  background: #333;
  color: white;
}

.searchbox-icon {
  background: #333;
  color: white;
  border-radius: 25px;
}

.card {
  cursor: pointer;
}

.create-company-icon {
  font-size: 45px;
}

.create-company-icon:hover {
  color: white;
}

.create-company-div {
  text-align: center;
}

.icon-text {
  font-weight: bold;
  margin-top: -10px;
}
</style>