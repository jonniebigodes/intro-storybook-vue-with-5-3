<!-- initial code
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
@import "./index.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->
<!--updated code per data section
<template>
  <div id="app">
    <task-list />
  </div>
</template>

<script>
import store from "./store";
import TaskList from "./components/TaskList.vue";

export default {
  name: "app",
  store,
  components: {
    TaskList
  }
};
</script>
<style>
@import "./index.css";
</style>-->

<!--updated per screen section-->
<template>
  <div id="app">
    <inbox-screen />
  </div>
</template>

<script>
import store from "./store";
import InboxScreen from "./components/InboxScreen.vue";
export default {
  name: "app",
  store,
  components: {
    InboxScreen
  }
};
</script>
<style>
@import "./index.css";
</style>
