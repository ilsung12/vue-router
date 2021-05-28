<template>
  <nav
    class="navbar navbar-expand-lg navbar-light "
    style="background-color: rgb(245, 163, 194);"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">댕텔</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link active"
              aria-current="page"
              href="#"
              >홈으로</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/list" class="nav-link" href="#"
              >애견호텔 둘러보기</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/mypage" class="nav-link">마이페이지</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              더보기
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="/call" class="dropdown-item-call"
                  >진료상담</router-link
                >
              </li>

              <li><a class="dropdown-item" href="#">B</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">C</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-info" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <div class="main-app">
    <Modal
      @closeModal="modalOpen = false"
      :modalOpen="modalOpen"
      :hotelContent="hotelContent"
    />
    <Discount @openModal="modalOpen = true" v-if="showDiscount == true" />
    <home-view></home-view>

    <!-- 블로그 글 리스트  -->
    <router-view :hotelContent="hotelContent"></router-view>

    <!-- <List :blogContent="blogContent" /> -->
  </div>
  <div class="main-app-right"></div>
</template>

<script>
// import List from "./components/List";
import hotelContent from "./assets/hotel";
import Discount from "./components/Discount";
import Modal from "./components/Modal";

export default {
  name: "App",
  data() {
    return {
      hotelContent: hotelContent,
      showDiscount: true,
      modalOpen: false,
    };
  },
  components: {
    Discount,
    Modal,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: rgb(247, 240, 240);
  padding: 20px;
}

.dropdown-item-call {
  text-decoration: none;
  color: black;
  padding: 2%;
}
</style>
