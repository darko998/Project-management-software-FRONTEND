<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <!--	WAITING STATUS	-->
        <div class="col mr-5 waiting">
          <div class="card waiting">
            <div class="card-body">
              <div class="card-title title-waiting text-center">WAITING</div>
              <br />

              <!--  LIST TASKS WITH WAITING STATUS  -->
              <list-simplify-tasks status="waiting" />
            </div>
          </div>
        </div>

        <!--	PLANNING STATUS	-->
        <div class="col mr-5 planning">
          <div class="card planning">
            <div class="card-body">
              <div class="card-title title-planning text-center">PLANNING</div>
              <br />

              <!--  LIST TASKS WITH PLANNING STATUS  -->
              <list-simplify-tasks status="planning" />
            </div>
          </div>
        </div>

        <!--	ACTIVE STATUS	-->
        <div class="col mr-5 active">
          <div class="card active">
            <div class="card-body">
              <div class="card-title title-active text-center">ACTIVE</div>
              <br />

              <!--  LIST TASKS WITH ACTIVE STATUS  -->
              <list-simplify-tasks status="active" />
            </div>
          </div>
        </div>

        <!--	DONE STATUS	-->
        <div class="col done">
          <div class="card done">
            <div class="card-body">
              <div class="card-title title-done text-center">DONE</div>
              <br />

              <!--  LIST TASKS WITH DONE STATUS  -->
              <list-simplify-tasks status="done" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListSimplifyTasks from '../components/ListSimplifyTasks.vue'

export default {
  name: "TasksListedByCategory",
  components: {
    'list-simplify-tasks': ListSimplifyTasks
  }


}
</script>

<style scoped>
.waiting {
  background: #333;
  border-radius: 25px;

  min-height: 310px;
}

.planning {
  background: #333;
  border-radius: 25px;
}

.active {
  background: #333;
  border-radius: 25px;
}

.done {
  background: #333;
  border-radius: 25px;
}

.row {
  padding-top: 50px;
}

.card-title {
  color: black;
  font-weight: bold;
  border-radius: 25px;
  font-size: 19px;
}

.title-waiting {
  background: rgb(255, 131, 131);
}

.title-planning {
  background: rgb(86, 198, 250);
}

.title-active {
  background: rgb(82, 255, 140);
}

.title-done {
  background: white;
}

.card {
  border: none;
}
</style>