<template>
  <div id="app">
    <VueTimeline :events="events" order="asc" />
  </div>
</template>

<script>
import VueTimeline from "./VueTimeline.vue";

export default {
  name: "App",
  components: {
    VueTimeline,
  },
  data() {
    return {
      events: [
        {
          timestamp: 1466708139,
          icon: "home",
          color: "#3199fa",
          iconColor: "#ffffff",
          title: "Title Text",
          content: [
            "Full URL: https://google.com/something-idk",
            "Page Title: Homepage",
          ],
        },
        {
          timestamp: 1566708139,
          icon: "eye",
          color: "#3199fa",
          iconColor: "#ffffff",
          title: "Title Text",
        },
        {
          timestamp: 1626708239,
          icon: "eye",
          color: "#3199fa",
          iconColor: "#ffffff",
          title: "Title Text",
          content: "Full URL: https://google.com/something-else",
        },
        {
          timestamp: 1636718339,
          icon: "eye",
          color: "#3199fa",
          iconColor: "#ffffff",
          title: "Title Text",
          content: [
            "Full URL: https://google.com/yo-hey-wow-yay",
            "Page Title: Homepage",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
