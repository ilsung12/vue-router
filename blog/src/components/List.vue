<template>
  <div>
    <h5 @click="$emit('detailPage')">{{ blogContent[0].title }}</h5>
    <p>{{ blogContent[0].date }}</p>
  </div>
  <div>
    <h5>{{ blogContent[1].title }}</h5>
    <p>{{ blogContent[1].date }}</p>
  </div>
  <div>
    <h5>{{ blogContent[2].title }}</h5>
    <p>{{ blogContent[2].date }}</p>
  </div>
</template>

<script>
export default {
  name: "List",

  props: {
    blogContent: Array,
  },
};
</script>

<style></style>
