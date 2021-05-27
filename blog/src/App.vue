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
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/list" class="nav-link" href="#"
              >Contents</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">2 </a>
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
              <li><a class="dropdown-item" href="#">A</a></li>
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
  <Discount v-if="showDiscount == true" />
  <home-view></home-view>

  <!-- 블로그 글 리스트  -->
  <router-view :hotelContent="hotelContent"></router-view>

  <!-- <List :blogContent="blogContent" /> -->
</template>

<script>
// import List from "./components/List";
import hotelContent from "./assets/hotel";
import Discount from "./components/Discount";

export default {
  name: "App",
  data() {
    return {
      hotelContent: hotelContent,
      showDiscount: true,
    };
  },
  components: {
    Discount,
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
</style>
