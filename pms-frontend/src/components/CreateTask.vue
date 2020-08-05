<template>
  <div>
    <div class="container-fluid">
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
        </div>

        <div class="col mt-5">
          <!--  INPUT PRIORITY  -->
          <div class="div-priority input-component-width">
            <p class="subtitle text-center">Priority</p>
            <select class="form-control" v-model="priorities[0]">
              <option v-for="(priority, index) in priorities" v-bind:key="index">{{ priority }}</option>
            </select>
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
          <input type="submit" class="btn btn-dark btn-submit" value="Save task" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateTask',
  data () {
    return {
      priorities: ['Low', 'Medium', 'High', 'Urgent'],
      workers: ["Darko Dimitrijevic", "Pera Peric", "Marko Markovic"],
      selectedWorkers: null

    }
  }


}
</script>

<style scoped>
.title {
  max-width: 90%;
  margin: 0 auto;
}

.subtitle {
  font-size: 20px;
  font-weight: bold;
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
}
</style>