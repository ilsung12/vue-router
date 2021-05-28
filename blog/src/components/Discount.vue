<template>
  <div class="discount">
    <h4 class="modalText" @click="$emit('openModal')">
      {{ downDiscount }}% 할인 쿠폰 지급 !
    </h4>
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
  props: {
    hotelContent: Array,
    // openModal: Boolean,
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
.modalText {
  cursor: pointer;
}
</style>
