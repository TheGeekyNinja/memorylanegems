<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
@font-face {
  font-family: "Cerebri Sans";
  src: url("@/assets/Fonts/CerebriSans-SemiBold.eot");
  src: url("@/assets/Fonts/CerebriSans-SemiBold.eot?#iefix")
      format("embedded-opentype"),
    url("@/assets/Fonts/CerebriSans-SemiBold.woff2") format("woff2"),
    url("@/assets/Fonts/CerebriSans-SemiBold.woff") format("woff"),
    url("@/assets/Fonts/CerebriSans-SemiBold.ttf") format("truetype"),
    url("@/assets/Fonts/CerebriSans-SemiBold.svg#CerebriSans-SemiBold")
      format("svg");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Cerebri Sans";
  src: url("@/assets/Fonts/CerebriSans-Bold.eot");
  src: url("@/assets/Fonts/CerebriSans-Bold.eot?#iefix")
      format("embedded-opentype"),
    url("@/assets/Fonts/CerebriSans-Bold.woff2") format("woff2"),
    url("@/assets/Fonts/CerebriSans-Bold.woff") format("woff"),
    url("@/assets/Fonts/CerebriSans-Bold.ttf") format("truetype"),
    url("@/assets/Fonts/CerebriSans-Bold.svg#CerebriSans-Bold") format("svg");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Cerebri Sans";
  src: url("@/assets/Fonts/CerebriSans-Medium.eot");
  src: url("@/assets/Fonts/CerebriSans-Medium.eot?#iefix")
      format("embedded-opentype"),
    url("@/assets/Fonts/CerebriSans-Medium.woff2") format("woff2"),
    url("@/assets/Fonts/CerebriSans-Medium.woff") format("woff"),
    url("@/assets/Fonts/CerebriSans-Medium.ttf") format("truetype"),
    url("@/assets/Fonts/CerebriSans-Medium.svg#CerebriSans-Medium")
      format("svg");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Cerebri Sans";
  src: url("@/assets/Fonts/CerebriSans-Regular.eot");
  src: url("@/assets/Fonts/CerebriSans-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("@/assets/Fonts/CerebriSans-Regular.woff2") format("woff2"),
    url("@/assets/Fonts/CerebriSans-Regular.woff") format("woff"),
    url("@/assets/Fonts/CerebriSans-Regular.ttf") format("truetype"),
    url("@/assets/Fonts/CerebriSans-Regular.svg#CerebriSans-Regular")
      format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
</style>
