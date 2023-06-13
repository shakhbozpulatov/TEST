<template>
  <div class="home p-4">
    <div class="search-bar flex justify-between">
      <SearchBar />
    </div>
    <div class="flex justify-between gap-3 mb-4">
      <div
        class="area-card-wrap"
        v-for="(elem, index) in cardItem"
        :key="index"
      >
        <div class="area-card">
          <div class="card-item flex items-center">
            <div>
              <img :src="elem.img" alt="" />
            </div>
            <div>
              <h4 class="card-item__title">{{ elem.title }}</h4>
              <number
                class="title-number"
                ref="number1"
                :from="1"
                :to="elem.num"
                :duration="5"
                :delay="2"
                easing="Power1.easeOutQuad"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import SearchBar from "../components/SearchBar.vue";

const cardItem = reactive([
  {
    img: new URL("../assets/images/header1.svg", import.meta.url),
    title: "Clients",
    link: "staffs",
    num: 213,
  },
  {
    img: new URL("../assets/images/header2.svg", import.meta.url),
    title: "Buyurtmalar",
    link: "subjects",
    num: 12,
  },
]);
</script>

<style lang="scss" scoped>
.home {
  .area-card-wrap {
    max-width: 1000px;
    width: 100%;
    .area-card {
      min-width: 120px;
      width: 100%;
      z-index: 2;
      margin: 20px 0;
      cursor: pointer;
      transition: all 0.3s;
      border-width: 0;
      border-left: 8px solid #fff;
      border-radius: 8px;
      .card-item {
        height: 110px;
        border-radius: 0 8px 8px 0;
        padding: 12px;
        background: #ffffff;
        box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
        img {
          transition: ease-in-out 0.3s;
          margin-right: 24px;
        }
        .card-item__title {
          font-family: Mulish, sans-serif;
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.1px;
          color: #25282b;
          margin-bottom: 4px;
        }
        .title-number {
          font-family: Mulish, sans-serif;
          font-size: 20px;
          font-weight: bold;
          line-height: 24px;
          letter-spacing: 0.1px;
          color: #336cfb;
          margin: 0;
        }
      }
    }
    .area-card:hover {
      box-shadow: 0px 12px 26px rgba(16, 29, 115, 0.13);
      border-left: 8px solid #336cfb;
      border-radius: 8px;
      img {
        transform: scale(1.3);
      }
    }
    .area-card:active {
      box-shadow: 0px 12px 26px rgba(16, 29, 115, 0.63);
    }
  }
}
</style>
