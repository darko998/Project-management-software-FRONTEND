<template>
  <ul>
    <li v-for="(task, index) in tasks" v-bind:key="index">
      <div class="card mb-2 task-card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-3">
              <!--  TASK TITLE  -->
              <div class="card-title font-weight-bold">{{ task.title }}</div>

              <!--  TAST DESCRIPTION  -->
              <div class="card-subtitle ml-3 text-muted">{{ task.description }}</div>
            </div>

            <!--  PROJECT TO WHICH THIS TASK BELONGS  -->
            <div class="col task-owner">
              <p>Project (owner of this task):</p>
              <hr />
              <strong>{{ task.projectName }}</strong>
            </div>

            <!--  COMPANY  -->
            <div class="col task-company">
              <p>Company:</p>
              <hr />
              <strong>{{ task.companyName }}</strong>
            </div>

            <!--  DONE IN PERCENTAGE  -->
            <div class="col task-done">
              <p>Done:</p>
              <hr />
              <strong>{{ task.done }}</strong>
            </div>

            <!--  PRIORITY  -->
            <div class="col task-priority">
              <p>Priority:</p>
              <hr />
              <strong>{{ task.priority.toUpperCase() }}</strong>
            </div>

            <!--  WORKERS ON THIS TASK  -->
            <div class="col task-workers">
              <p>Workers:</p>
              <ul>
                <li v-for="(worker, index) in task.workers" v-bind:key="index">
                  <strong>{{ worker.name }}</strong>
                </li>
              </ul>
            </div>

            <div class="col">
              <!--  MARK AS COMPLETED BUTTON  -->
              <button class="btn btn-success btn-completed">Mark as completed</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListTasks",
  props: ['tasks']

}
</script>

<style scoped>
.main {
  padding-top: 50px;
}

.card-body {
  color: black !important;
}

ul {
  list-style-type: none;
}

.card-title {
  font-size: 18px;
}

.task-owner {
  text-align: center;
}

.task-company {
  text-align: center;
}

.task-done {
  text-align: center;
}

.task-priority {
  text-align: center;
}

.task-card {
  background: #d9dce0;
}

.btn-completed {
  width: 80%;
  height: 90%;
  display: inline-block;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #3e8e41;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.btn-completed:hover {
  background-color: #4caf50;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  cursor: pointer;
}

.collapsed-title {
  font-size: 20px;
  font-style: bold;
}
</style>