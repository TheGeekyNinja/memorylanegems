<template>
  <Header />
  <!-- Banner Section -->
  <section class="banner-sec">
    <div class="sec-container">
      <div class="banner-sec-main">
        <div class="banner-sec-inner">
          <div class="banner-sec-left">
            <h1>Our <span>Gallery</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="banner-sec-right">
            <div class="banner-sec-img">
              <img src="@/assets/gallery-img.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Gallery Section -->
  <section class="gallery-sec">
    <div class="sec-container">
      <div class="heading-section">
        <h2>Our <span>Gallery</span></h2>
      </div>
      <div class="gallery-content-sec">
        <div class="gallery-content-sec-inner">
          <div class="gallery-item-row">
            <div class="gallery-item-6">
              <div class="gallery-img-block">
                <img src="@/assets/gallery-1.png" class="img-fluid" alt="" />
              </div>
            </div>
            <div class="gallery-item-6">
              <div class="gallery-img-block">
                <img src="@/assets/gallery-2.png" class="img-fluid" alt="" />
              </div>
            </div>
            <div class="gallery-item-8">
              <div class="gallery-img-block">
                <img src="@/assets/gallery-3.png" class="img-fluid" alt="" />
              </div>
            </div>
            <div class="gallery-item-4">
              <div class="gallery-img-block">
                <img src="@/assets/gallery-4.png" class="img-fluid" alt="" />
              </div>
              <div class="gallery-img-block">
                <img src="@/assets/gallery-5.png" class="img-fluid" alt="" />
              </div>
            </div>
            <div class="gallery-item-6">
              <div class="gallery-img-block">
                <img src="@/assets/gallery-6.png" class="img-fluid" alt="" />
              </div>
            </div>
            <div class="gallery-item-6">
              <div class="gallery-img-block">
                <img src="@/assets/gallery-7.png" class="img-fluid" alt="" />
              </div>
            </div>
            <div class="gallery-item-4">
              <div class="gallery-img-block">
                <img src="@/assets/gallery-8.png" class="img-fluid" alt="" />
              </div>
              <div class="gallery-img-block">
                <img src="@/assets/gallery-9.png" class="img-fluid" alt="" />
              </div>
            </div>
            <div class="gallery-item-8">
              <div class="gallery-img-block">
                <img src="@/assets/gallery-10.png" class="img-fluid" alt="" />
              </div>
            </div>
            <div class="gallery-item-6">
              <div class="gallery-img-block">
                <img src="@/assets/gallery-11.png" class="img-fluid" alt="" />
              </div>
            </div>
            <div class="gallery-item-6">
              <div class="gallery-img-block">
                <img src="@/assets/gallery-12.png" class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "GalleryPage",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.gallery-sec {
  margin: 0px;
  padding: 150px 0;
}
.heading-section {
  margin: 0px;
  padding: 0px;
  text-align: center;
}
.heading-section h2 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 50px;
  line-height: 50px;
  color: #000;
}
.heading-section h2 span {
  font-weight: 700;
}
.gallery-content-sec {
  margin: 35px 0 0 0;
  padding: 0px;
}
.gallery-content-sec-inner {
  margin: 0px auto;
  padding: 0px;
  max-width: 60%;
}
.gallery-item-row {
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
}
.gallery-item-8 {
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
}
.gallery-item-6 {
  flex: 0 0 50%;
  max-width: 50%;
}
.gallery-item-4 {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}
.gallery-img-block {
  padding: 17px;
  display: flex;
}
.gallery-img-block img {
  width: 100%;
  display: block;
}
</style>
