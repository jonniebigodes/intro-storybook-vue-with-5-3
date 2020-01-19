<!--initial code 
<template>
  <div class="list-item">
    <input type="text" :readonly="true" :value="this.task.title" />
  </div>
</template>

<script>
export default {
  name: "task",
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
};
</script>-->
<!-- updated code simple section
<template>
  <div :class="taskClass">
    <label class="checkbox">
      <input
        type="checkbox"
        :checked="isChecked"
        :disabled="true"
        name="checked"
      />
      <span class="checkbox-custom" @click="$emit('archiveTask', task.id)" />
    </label>
    <div class="title">
      <input
        type="text"
        :readonly="true"
        :value="this.task.title"
        placeholder="Input title"
      />
    </div>
    <div class="actions">
      <a @click="$emit('pinTask', task.id)" v-if="!isChecked">
        <span class="icon-star" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "task",
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({
        id: "",
        state: "",
        title: ""
      })
    }
  },
  computed: {
    taskClass() {
      return `list-item ${this.task.state}`;
    },
    isChecked() {
      return this.task.state === "TASK_ARCHIVED";
    }
  }
};
</script>-->

<!--updated code for using addons-->
<template>
  <div :class="taskClass">
    <label class="checkbox">
      <input
        type="checkbox"
        :checked="isChecked"
        :disabled="true"
        name="checked"
      />
      <span class="checkbox-custom" @click="$emit('archiveTask', task.id)" />
    </label>
    <div class="title">
      <input
        type="text"
        :readonly="true"
        :value="this.task.title"
        placeholder="Input title"
        style="text-overflow: ellipsis;"
      />
    </div>
    <div class="actions">
      <a @click="$emit('pinTask', task.id)" v-if="!isChecked">
        <span class="icon-star" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "task",
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({
        id: "",
        state: "",
        title: ""
      })
    }
  },
  computed: {
    taskClass() {
      return `list-item ${this.task.state}`;
    },
    isChecked() {
      return this.task.state === "TASK_ARCHIVED";
    }
  }
};
</script>
