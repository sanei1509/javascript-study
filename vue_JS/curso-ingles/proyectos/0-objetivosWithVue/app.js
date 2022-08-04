const app = Vue.createApp({
  data() {
    return {
      goal: "",
      objetivos: [],
    };
  },
  methods: {
    addGoal() {
      if (this.goal != "" && this.goal.length >= 4)
        this.objetivos.push(this.goal);
      this.goal = "";
    },
  },
}).mount("#app");
