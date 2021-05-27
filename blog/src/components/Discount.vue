<template>
  <div class="discount">
    <h4>지금 결제하면 {{ downDiscount }}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: "Discount",

  data() {
    return {
      downDiscount: 30,
    };
  },

  mounted() {
    var timer = setInterval(() => {
      this.downDiscount--;
      if (this.downDiscount == 20) {
        clearInterval(timer);
      }
    }, 1000);
  },
};
</script>

<style>
.discount {
  background: #eee;
  margin: 20px;
  padding: 30px;
}
</style>
