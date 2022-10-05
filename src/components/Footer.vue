<template>
  <section class="footer-sec">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="footer-logo">
            <img src="@/assets/Footer-logo.png" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="footer-links">
            <ul>
              <li><a href="/" class="active">Home</a></li>
              <li><a href="#about-sec">About Us</a></li>
              <li><a href="#contact-sec">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="footer-copyright">
            <p>
              Copyright © 2022
              <span><a href="#">Memory Lane Gems.</a></span> All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer-sec {
  background: #36311e;
  padding: 120px 0 70px;
}
.footer-logo {
  display: flex;
  justify-content: center;
}
.footer-links {
  border-top: 1px solid #ffffff33;
  border-bottom: 1px solid #ffffff33;
  padding: 50px 100px;
  margin: 40px 0;
}
.footer-links ul {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-links li a {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  color: #ffffff;
  padding: 0 20px;
}
.footer-links li a.active {
  color: #bf6f8c;
}
.footer-copyright p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
}
.footer-copyright span a {
  font-weight: 600;
  color: #bf6f8c;
}
</style>
