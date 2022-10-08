<script>
export default {
  name: "Header",
  data() {
    return {
      mobileActive: false,
    };
  },
};
</script>

<template>
  <!-- Header Section Start -->
  <section class="header-sec">
    <div class="sec-container">
      <div class="header-main">
        <div class="header-logo">
          <img src="@/assets/Memory-Lane-Gems-logo.svg" alt="" srcset="" />
        </div>
        <div class="header-links" v-bind:class="{ mobileActive: mobileActive }">
          <ul>
            <li>
              <a href="/" class="active">Home</a>
            </li>
            <li>
              <a href="#about-sec">About Us</a>
            </li>
            <li>
              <a href="#contact-sec">Contact</a>
            </li>
          </ul>
        </div>
        <div class="mobile-header-link">
          <button type="button" v-on:click="mobileActive = !mobileActive">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Header Section */
section.header-sec {
  position: relative;
}
.header-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-logo {
  width: 50%;
}
.header-logo img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.header-links ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}
.mobile-header-link {
  display: none;
}
.sec-container {
  max-width: 88%;
  margin: 0 auto;
  width: 100%;
}
.header-links ul li a {
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  color: #636363;
}
.header-links li {
  margin: 0 40px;
  padding: 47px 0;
}
.header-links ul li a.active {
  color: #bf6f8c;
}
</style>
