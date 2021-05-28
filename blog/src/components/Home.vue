<template>
  <div class="container mt-4">
    <h5 class="home-title">우리 멍멍이들을 위한 모든 숙소 댕텔</h5>
    <img
      @click="$router.push('/list')"
      class="img-main"
      src="../assets/img/main11.jpg"
      alt=""
    />
    <h3 class="h3-clickMe" @click="$router.push('/call')">{{ callText }}</h3>
    <pre>
    항상 옆에 있어줄 수 없어서 미안한 아가들..
    그래서 준비했습니다 !
    우리 아가들을 마음편히 맡길 수 있도록 
    인증된 업체만을 선별했습니다 !
    </pre>
  </div>

  <div>
    <img src="../assets/img/진료2.jpg" alt="" />
    <h4>호텔에서 지내는 동안 진료도 받으세요.</h4>
  </div>

  <div>
    <img src="../assets/img/images.jpg" alt="" />
    <h4>잘 다녀왔습니다 ~</h4>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      callText: "진료상담",
    };
  },
  methods: {
    // scrollSticky() {
    //   if () {
    //     this.homeImgText;
    //     sc
    //   }
    // },
  },
};
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
img {
  width: 100%;
  border-radius: 10px;
  transition: all 0.5s;
}

pre {
  font-weight: bold;
  color: rgb(250, 250, 250);
  font-size: 15px;
}

.img-main {
  cursor: pointer;
}

.h3-clickMe {
  position: fixed;
  color: rgb(153, 226, 43);
  cursor: pointer;
  top: 93%;
  left: 3%;
}

.container {
  border-radius: 10px;
  background: rgb(245, 163, 194);
}
.home-title {
  margin: 10px;
  padding: 10px;
  font-weight: bold;
  color: rgb(250, 250, 250);
}
</style>
