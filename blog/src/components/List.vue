<template>
  <div v-for="(a, i) in blogContent.length" :key="a">
    <h5 @click="$router.push('/detail/' + i + '')">
      {{ blogContent[i].title }}
    </h5>
    <p>{{ blogContent[i].date }}</p>
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
