<template>
  <Header />
  <!-- Banner Section -->
  <section class="banner-sec">
    <div class="sec-container">
      <div class="banner-sec-main">
        <div class="banner-sec-inner">
          <div class="banner-sec-left">
            <h1>Lorem ipsum <br /><span> dolor sit amet</span></h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
              nisi tincidunt, iaculis velit ac, suscipit elit. Vestibulum
              tincidunt vel metus sit amet condimentum...
            </p>
          </div>
          <div class="banner-sec-right">
            <div class="banner-sec-img">
              <img src="@/assets/banner-img.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Us Section -->
  <section class="about-sec" id="about-sec">
    <div class="container">
      <div class="about-sec-main">
        <div class="about-sec-inner">
          <div class="about-sec-img">
            <img src="@/assets/about-us.png" class="img-fluid" alt="" />
            <div class="about-us-button">
              <button type="button">SINCE 2011</button>
            </div>
          </div>
          <div class="about-us-content">
            <div class="about-us-head">
              <h2>About <span>Us</span></h2>
            </div>
            <div class="about-us-content-inner">
              <p>
                Memory Lane Gems was started by Lynn Rinker
                <span>12 years</span> ago in Coeur d’ Alene, Idaho. Lynn was a
                practicing labor and delivery nurse at Kootenai Medical center
                and she started making and repurposing jewelry as a hobby on
                days her husband golfed. The hobby grew into people buying and
                requesting pieces and soon it grew to having booths is several
                venues and doing shows. Lynn decided to go all in on the jewelry
                and vintage store in <span>2011</span> and started Memory Lane
                in the Silver Lake Mall. A few years later, a space came open
                downtown in the Coeur d’ Alene Plaza Shops. The space had been
                vacant for a year and a half but she is always up for a
                challenge. The business has grown enormously with the support of
                wonderful customers and ever changing inventory.
              </p>
              <p>
                In <span>May 2022</span> the store relocated back to the Silver
                Lake Mall to downsize and make it easier to focus on jewelry,
                rocks and minerals. The local clientele are thrilled and the out
                of town customers have been visiting us daily.
              </p>
            </div>
          </div>
        </div>
        <div class="about-us-details">
          <p>
            It has been an absolute joy to live and own a business in our
            community. Even the staff remarks that we have the best customers in
            the world and we want to bring joy to them through sales and
            friendship.
          </p>
          <p>
            We work very hard to bring unique items and one of a kind keepsake
            pieces at affordable prices. With the new costs and shortages it is
            a challenge but doing business is always challenging.
          </p>
          <p class="highlighter">
            Please come in and see what so many are talking about.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Us Section -->
  <section class="contact-sec" id="contact-sec">
    <div class="container">
      <div class="contact-inner">
        <div class="contact-title">
          <h2>Contact <span>Us</span></h2>
        </div>
        <div class="contact-row">
          <div class="contact-column">
            <div class="contact-details-area">
              <div class="contact-details-item">
                <div class="contact-deta-icon">
                  <img src="@/assets/contact-ic-1.svg" />
                </div>
                <div class="contact-deta-con">
                  <p>
                    200 W Hanley Ave, Coeur d'Alene, ID 83815, United States
                  </p>
                </div>
              </div>

              <div class="contact-details-item">
                <div class="contact-deta-icon">
                  <img src="@/assets/contact-ic-3.svg" />
                </div>
                <div class="contact-deta-con">
                  <p>+12087775999</p>
                </div>
              </div>

              <div class="contact-details-item">
                <div class="contact-deta-icon">
                  <img src="@/assets/contact-ic-4.svg" />
                </div>
                <div class="contact-deta-con">
                  <p>Monday to Saturday 10am–6pm</p>
                  <p>Sunday 11am–5pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <Footer />
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import("@/Pages/LandingPageResponsive.css");
export default {
  name: "LandingPage",
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
/* Banner Section CSS Start */
.banner-sec {
  background: #e6c4c5;
  padding: 100px 0 250px 0;
  position: relative;
  z-index: 1;
}
.banner-sec:after {
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: url("@/assets/banner-bg-rose.png") no-repeat;
  background-size: cover;
  z-index: -1;
}
.banner-sec-left h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 80px;
  line-height: 85px;
  color: #000;
  padding: 0 0 30px 0;
}
.banner-sec-left h1 span {
  font-weight: 700;
}
.banner-sec-left p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #636363;
  max-width: 749px;
  width: 100%;
  padding: 0 20px 0 0;
}
.banner-sec-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/* Banner Section CSS End */

/* About Us Section CSS Start */
.about-sec {
  position: relative;
  z-index: 9;
}
.about-sec .about-sec-inner {
  display: flex;
}
.about-sec .about-sec-main {
  width: 100%;
  padding: 60px;
  background: #ffffff;
  box-shadow: 0px 20px 80px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin: -150px auto 0 auto;
}
.about-sec .about-us-head h2 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 50px;
  line-height: 50px;
  color: #000000;
  padding: 25px 0 40px;
}
.about-sec .about-us-head h2 span {
  font-weight: 700;
}
.about-sec .about-us-content-inner p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 190%;
  color: #636363;
}
.about-sec .about-us-content-inner p:first-child {
  margin: 0 0 45px 0;
}
.about-sec .about-us-content {
  margin: 0 0 0 60px;
}
.about-sec .about-us-content-inner p span {
  color: #bf6f8c;
  font-weight: 700;
}
.about-sec .about-us-details p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 190%;
  color: #636363;
  margin: 0 0 45px 0;
}
.about-sec .about-us-details p:first-child {
  margin-top: 30px;
}
.about-sec .about-us-details p.highlighter {
  font-weight: 700;
  font-size: 25px;
  color: #bf6f8c;
  margin: 0;
}
.about-sec .about-sec-img {
  position: relative;
  flex: 0 0 50%;
  max-width: 50%;
}
.about-sec .about-sec-img img {
  width: 100%;
  object-fit: cover;
  height: 100%;
  border-radius: 10px;
}
.about-sec .about-us-button {
  position: absolute;
  bottom: 30px;
  left: 17px;
  width: 100%;
}
.about-sec .about-us-button button {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 31px;
  line-height: 190%;
  text-align: center;
  background: #bf6f8c;
  border-radius: 5px;
  letter-spacing: 0.48em;
  text-transform: uppercase;
  color: #ffffff;
  width: calc(100% - 34px);
  cursor: pointer;
}
/* About Us Section CSS End */

/* Contact Section CSS Start */
section.contact-sec {
  padding: 150px 0px 50px;
  position: relative;
}
.contact-title {
  margin-bottom: 30px;
}
.contact-title h2 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 50px;
  line-height: 60px;
  color: #000000;
  text-align: center;
}
.contact-title h2 span {
  font-weight: 700;
}
.contact-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.contact-column {
  flex: 0 0 50%;
  max-width: 50%;
}
@media screen and (max-width: 991px) {
  .contact-column {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.contact-form-area {
  padding-right: 33px;
}
.contact-form-area h3 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #121212;
  margin-bottom: 21px;
}
.contact-form-area form.contact-form .form-field {
  margin-bottom: 15px;
}
.contact-form-area form.contact-form .form-field input,
.contact-form-area form.contact-form .form-field textarea {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #868686;
  background: #f9f9f9;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 19px 20px;
  width: 100%;
}
.contact-form-area form.contact-form .form-field input:focus,
.contact-form-area form.contact-form .form-field textarea:focus {
  outline: none;
}
.contact-form-area form.contact-form .form-field textarea {
  height: 116px;
}
.contact-form-area form.contact-form .form-field button.send-btn {
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
  color: #ffffff;
  background: #bf6f8c;
  border-radius: 5px;
  padding: 26px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-form-area form.contact-form .form-field button.send-btn svg {
  margin-left: 20px;
  width: 19px;
  height: 14px;
}
.contact-details-area {
  padding-left: 33px;
}
.contact-details-item {
  display: flex;
  align-items: center;
  padding: 20px;
  background: transparent;
  border: 2px solid transparent;
  border-radius: 5px;
  margin: 0px 0px 20px;
  transition: all 0.3s linear;
}
.contact-details-item:hover {
  background: rgba(191, 111, 140, 0.1);
  border-color: #bf6f8c;
}
.contact-deta-icon {
  min-width: 60px;
  width: 60px;
  height: 60px;
  background: #bf6f8c;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
}
.contact-deta-icon img {
  width: max-content;
  height: max-content;
  object-fit: contain;
}
.contact-deta-con p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #868686;
  transition: all 0.3s linear;
}
.contact-details-item:hover .contact-deta-con p {
  color: #1a1a1a;
}
/* Contact Section CSS End */
</style>
