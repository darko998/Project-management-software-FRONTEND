<template>
  <div class="main-div">
    <div class="title text-center">
      <h2>Company overview</h2>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="company-title">{{ this.company.title }}</div>

        <!--	EDIT ICON	-->
        <div class="edit-icon">
          <i class="ion-ios-brush" @click="redirectToCompanyEditPage()" />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <section id="tabs">
            <div class="container-fluid">
              <!--	COMPANY TITLE	-->
              <h6 class="section-title h1"></h6>
              <div class="row">
                <div class="col-md-12 px-5 tabs-col">
                  <nav>
                    <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                      <!--  TAB PROJECT DETAILS  -->
                      <a
                        class="nav-item nav-link active"
                        id="nav-preview-tab"
                        data-toggle="tab"
                        href="#nav-preview"
                        role="tabpanel"
                        aria-labelledby="nav-preview-tab"
                      >Company details</a>

                      <!--  TAB PROJECTS (LIST)  -->
                      <a
                        class="nav-item nav-link"
                        id="nav-projects-tab"
                        data-toggle="tab"
                        href="#nav-projects-list"
                        role="tab"
                        aria-controls="nav-projects-list"
                        aria-selected="false"
                      >Projects</a>
                    </div>
                  </nav>
                  <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                    <!--	PROJECT DETAILS  -->
                    <div class="tab-pane fade show active" id="nav-preview" role="tabpanel">
                      <!-- FOR MOBILE VERSION <div class="company-details">
                        <p class="company-detail-content">{{ this.company.companyActivity }}</p>
                        <p class="company-detail-content">{{ this.company.numOfEmployees }}</p>
                        <p class="company-detail-content"
                        >Registred on our platform: {{ this.company.created }}</p>
                        <p class="company-detail-content">{{ this.company.companyActivity }}</p>
                      </div>
                      -->

                      <div class="container-fluid company-details">
                        <div class="row">
                          <!--	COMPANY DESCRIPTION	-->
                          <div class="col company-desc">{{ company.description }}</div>
                        </div>

                        <br />
                        <br />

                        <div class="row">
                          <!--	COMPANY ACTIVTY	-->
                          <div class="col text-center">
                            Activity
                            <hr class="hr-project-details" />
                            <p>
                              <strong>{{ company.companyActivity }}</strong>
                            </p>
                          </div>

                          <!--	COMPANY SIZE	-->
                          <div class="col text-center">
                            Size
                            <hr class="hr-project-details" />
                            <p>
                              <strong>{{ company.numOfEmployees }}</strong>
                            </p>
                          </div>

                          <!--	COMPANY REGISTRED ON PLATFORM	-->
                          <div class="col text-center">
                            Registred on our platform
                            <hr class="hr-project-details" />
                            <p>
                              <strong>{{ company.created }}</strong>
                            </p>
                          </div>

                          <!--	COMPANY ADDRESS	-->
                          <div class="col text-center">
                            Address
                            <hr class="hr-project-details" />
                            <p>
                              <strong>{{ company.address.street + " " + company.address.number }}</strong>
                              <br />
                              <strong>{{ company.address.city + ", " + company.address.country }}</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!--	PROJECTS LIST	-->
                    <div
                      class="tab-pane fade"
                      id="nav-projects-list"
                      role="tabpanel"
                      aria-labelledby="nav-projects-tab"
                    >
                      <list-simplify-projects />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListSimplifyProjects from './ListSimplifyProjects.vue'

export default {
  name: 'CompanyOverview',
  components: {
    'list-simplify-projects': ListSimplifyProjects
  },
  props: ['companyId'],
  data () {
    return {
      company: {
        title: "DARDI d.o.o.",
        description: "We are Enterprise Information Management and Card Solutions Experts",
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
  },
  methods: {
    loadCompany () {

    },
    redirectToCompanyEditPage () {
      this.$router.push({ name: "editCompany" })
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

.edit-icon {
  float: right;
  font-size: 35px;
  cursor: pointer;
}

.edit-icon:hover {
  /*transform: translateY(-3px);*/
  color: white;
}

.company-desc {
  text-align: center;
  margin-bottom: 30px;
}
.company-detail-content {
  font-size: 22px;
}

.company-details {
  margin-top: 90px;
  float: left;
  font-size: 18px;
}

.hr-project-details {
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #333;
}

.company-title {
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-size: 30px;
  background: #333;
  color: white;
  border-radius: 25px;
  padding: 10px;
  width: 50%;
  margin: 0 auto;
}

hr {
  width: 80%;
  margin: 0 auto;
}

section {
  padding: 60px 0;
}

section .section-title {
  text-align: center;
  color: #007b5e;
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
</style>