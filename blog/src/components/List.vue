<template>
  <div v-for="(a, i) in hotelContent.length" :key="a">
    <img class="img" :src="hotelContent[i].image" alt="1" />
    <h4 class="list-title" @click="$router.push('/detail/' + i + '')">
      {{ hotelContent[i].title }}
    </h4>
    <h5 class="list-content">{{ hotelContent[i].content }}</h5>
    <p>{{ hotelContent[i].date }}</p>
  </div>
</template>

<script>
export default {
  name: "List",

  data() {
    return {};
  },
  props: {
    hotelContent: Array,
  },
  methods: {
    src() {},
  },
};
</script>

<style>
div {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
p {
  font-size: 12px;
}

.img {
  width: 100%;
}
/* .img:hover {
  transform: scale(1.2);
  transition: all 0.3s;
} */

.list-title {
  margin: 10px;
  cursor: pointer;
  color: rgb(0, 0, 0);
}
.list-title:hover {
  color: rgb(235, 175, 175);
  transform: scale(1.2);
  transition: all 0.3s;
}

.list-content {
  font-size: 20px;
}
</style>
