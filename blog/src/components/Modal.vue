<template>
  <div class="black-bg" v-if="modalOpen == true">
    <div class="white-bg">
      <img class="img-modal-coupon" src="../assets/img/giftBox.gif" alt="22" />
      <h4 class="coupon-title">할인 받고, 우리 댕댕이덜 호캉스 보내세요!</h4>
      <button class="btn-modal" @click="alertCoupon(), (counter += 1)">
        쿠폰받기
      </button>
      <button class="btn-modal" @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      counter: 0,
    };
  },
  props: {
    hotelContent: Array,
    modalOpen: Boolean,
  },
  methods: {
    alertCoupon() {
      if (this.counter < 1) {
        alert("쿠폰확인은 마이페이지에서 하실 수 있습니다.");
      } else {
        alert("더 이상 쿠폰을 받을 수 없습니다.");
      }
    },
  },
};
</script>

<style>
.coupon-title {
  margin: 20px;
  margin-top: 30px;
  font-size: 19px;
  font-weight: bold;
  color: rgb(235, 175, 175);
}

.btn-modal {
  margin: 7px;
  margin-top: 30px;
  align-content: center;
  justify-items: center;
  border-radius: 5px;
  background: rgb(245, 163, 194);
  outline: none;
  border: none;
  color: rgb(247, 240, 240);
}
</style>
