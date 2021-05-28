<template>
  <div class="detail-main">
    <!-- <h4 class="detail-title">상세페이지</h4> -->
    <img class="img" :src="hotelContent[$route.params.id].image" />
    <h5 class="detail-title-shop">
      {{ hotelContent[$route.params.id].title }}
    </h5>
    <p>{{ hotelContent[$route.params.id].content }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "detail",
  props: {
    hotelContent: Array,
  },
};
</script>

<style>
.detail-main {
  margin: 30px;
  padding: 10px;
}

.detail-title {
  margin-top: 10px;
  margin-bottom: 80px;
  font-size: 40px;
}

.detail-title-shop {
  margin: 40px;
  font-weight: bold;
  font-size: 25px;
  color: rgb(253, 123, 173);
}
</style>
