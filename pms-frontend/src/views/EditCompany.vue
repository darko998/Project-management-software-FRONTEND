<template>
  <div class="main-div">
    <div class="container-fluid">
      <!--  PAGE TITLE  -->
      <p class="page-title text-center">Edit company</p>

      <!--  INPUT TITLE  -->
      <div class="title">
        <label for="title" class="label-title">Name</label>
        <input
          type="text"
          class="form-control input-title"
          id="title"
          placeholder="Enter company name"
        />
      </div>

      <!--  INPUT DESCRIPTION  -->
      <div class="desc">
        <label for="desc" class="label-desc">Company description</label>
        <textarea
          type="text"
          class="form-control input-desc"
          id="desc"
          placeholder="Enter company description"
        />
      </div>

      <!--  INPUT ACTIVITY  -->
      <div class="activity">
        <label for="activity" class="label-activity">Company activity</label>
        <input
          type="text"
          class="form-control input-activity"
          id="activity"
          placeholder="Enter company activity"
        />
      </div>

      <!--  INPUT COMPANY SIZE (NUM OF EMPLOYEES)  -->
      <div class="size">
        <label for="size" class="label-size">Company size (number of employees)</label>
        <input
          type="text"
          class="form-control input-size"
          id="size"
          placeholder="Enter number of empolyees"
        />
      </div>

      <!--  INPUT ADDRESS  -->
      <div class="address">
        <label for="street" class="label-address">Address</label>
        <div class="row">
          <!--  STREET  -->
          <div class="col-md-10">
            <input type="text" class="form-control" id="street" placeholder="Enter street" />
          </div>

          <!--  STREET NUMBER  -->
          <div class="col-md-2">
            <input
              type="text"
              class="form-control"
              id="street-num"
              placeholder="Enter street number"
            />
          </div>
        </div>

        <div class="row mt-3">
          <!--  CITY  -->
          <div class="col">
            <input type="text" class="form-control" placeholder="Enter city" />
          </div>

          <!--  COUNTRY  -->
          <div class="col">
            <input type="text" class="form-control" placeholder="Enter country" />
          </div>
        </div>
      </div>

      <div class="btn-submit-div mt-5 text-center">
        <input type="submit" class="btn btn-dark btn-submit" value="Save changes" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditCompany'

}
</script>

<style scoped>
.main-div {
  background: #007b5e;
  padding-top: 50px;
  padding-bottom: 100px;
}

.title {
  text-align: center;
}

.input-title {
  width: 60%;
  margin: 0 auto;
}

.label-title {
  margin-bottom: 10px;
  font-size: 18px;
  color: white;
  text-transform: uppercase;
}

.page-title {
  font-size: 34px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 80px;
}

.desc {
  text-align: center;
  margin-top: 50px;
}

.input-desc {
  margin: 0 auto;
  width: 60%;
  min-height: 130px;
}

.label-desc {
  margin-bottom: 10px;
  font-size: 18px;
  color: white;
  text-transform: uppercase;
}

.activity {
  text-align: center;
  margin-top: 50px;
}

.input-activity {
  margin: 0 auto;
  width: 60%;
}

.label-activity {
  margin-bottom: 10px;
  font-size: 18px;
  color: white;
  text-transform: uppercase;
}

.size {
  text-align: center;
  margin-top: 50px;
}

.input-size {
  margin: 0 auto;
  width: 60%;
}

.label-size {
  margin-bottom: 10px;
  font-size: 18px;
  color: white;
  text-transform: uppercase;
}

.address {
  text-align: center;
  width: 60%;
  margin: 0 auto;
}

.input-street {
}

.label-address {
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 18px;
  color: white;
  text-transform: uppercase;
}

.btn-submit {
  width: 10%;
  height: 50px;
  margin: 0 auto;
  text-transform: uppercase;
  font-weight: bold;
}
</style>