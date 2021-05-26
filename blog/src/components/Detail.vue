<template>
  <h4>상세페이지</h4>
  <h5>{{ blogContent[$route.params.id].title }}</h5>
  <p>{{ blogContent[$route.params.id].content }}</p>
</template>

<script>
export default {
  name: "detail",
  props: {
    blogContent: Array,
  },
};
</script>

<style></style>
