// initial code
/* import PureInboxScreen from "./PureInboxScreen.vue";
export default {
  title: "PureInboxScreen"
};

// inbox screen default state
export const Default = () => ({
  components: { PureInboxScreen },
  template: `<pure-inbox-screen/>`
});

// inbox screen error state
export const error = () => ({
  components: { PureInboxScreen },
  template: `<pure-inbox-screen :error="true"/>`
}); */

// updated code for screen section
import Vue from "vue";
import Vuex from "vuex";
import PureInboxScreen from "./PureInboxScreen.vue";
import { action } from "@storybook/addon-actions";
import { defaultTasksData } from "./PureTaskList.stories";
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    tasks: defaultTasksData
  },
  actions: {
    pinTask(_, id) {
      action("pinTask")(id);
    },
    archiveTask(_, id) {
      action("archiveTask")(id);
    }
  }
});
export default {
  title: "PureInboxScreen",
  excludeStories: /.*store$/
};
export const Default = () => ({
  components: { PureInboxScreen },
  template: `<pure-inbox-screen/>`,
  store
});
// tasklist with pinned tasks
export const error = () => ({
  components: { PureInboxScreen },
  template: `<pure-inbox-screen :error="true"/>`
});
