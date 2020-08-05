<template>
  <div class="main-div mb-5">
    <div class="container-fluid mb-5">
      <div class="row">
        <div class="col-md-11">
          <!--	PROJECT DESCRIPTION	-->
          <div class="desc text-center">
            <p>{{ project.description }}</p>
          </div>
        </div>
        <div class="col-md-1">
          <i class="ion-ios-brush edit-icon" />
        </div>
      </div>
    </div>

    <br />
    <br />

    <div class="container-fluid project-details">
      <div class="row">
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
            <p class="company-title" onclick="redirectToCompanyPage()">
              <strong>{{ project.company.title }}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectPreview',
  props: ['project']
}
</script>

<style scoped>
.col {
  font-size: 20px;
}

.desc {
  font-size: 20px;
}

.edit-icon {
  font-size: 30px;
  cursor: pointer;
}

.edit-icon:hover {
  color: #007b5e;
}

hr {
  border: 1px solid #333;
}

.main-div {
  background: white;
  color: #333;
  border-radius: 25px;
  padding: 20px;
  margin-top: 100px;
}
</style>