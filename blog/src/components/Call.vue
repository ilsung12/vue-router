<template>
  <img class="dc-img" :src="this.srcMung" alt="" />
  <h4 class="dc-text">{{ doctorText }}</h4>
</template>

<script>
export default {
  name: "Call",
  data() {
    return {
      srcMung: "",
      doctorText: "삐 이 이 익",
    };
  },
  mounted() {
    setTimeout(() => {
      this.srcMung = require("../assets/img/doctorMung.png");
      this.doctorText = "";
    }, 1500);
  },
};
</script>

<style>
.dc-text {
  position: absolute;
  top: 45%;
  left: 35%;
  font-size: 50px;
}
</style>
