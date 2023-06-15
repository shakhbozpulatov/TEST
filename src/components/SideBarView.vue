<template>
  <div class="aside flex flex-col justify-between">
    <div class="flex flex-col justify-between">
      <div class="logo">
        <router-link to="/">
          <div class="logo-wrap flex">
            <img src="../assets/images/logo.svg" alt="" />
            <h3 class="logo__title">Logo</h3>
          </div>
        </router-link>
      </div>
      <div class="menu">
        <ul class="menu-list">
          <div class="main-menus">
            <div v-for="(elem, index) in sidebarMenu" :key="index">
              <li
                class="main-menus__item"
                @click="changeActive(index)"
                :class="num == index ? 'activeMenu' : ''"
              >
                <router-link
                  v-if="elem.check"
                  :to="`/${elem.link}`"
                  class="link flex items-center"
                >
                  <v-icon color="#fff" :icon="elem.icon"></v-icon>
                  <p class="title-text">{{ elem.nameMenu }}</p>
                </router-link>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
    <div class="logout-btn flex items-center mb-2">
      <v-icon>mdi-logout</v-icon>
      <p class="logout-text mb-0">Logout</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const num = ref(null);
const sidebarMenu = ref([
  {
    link: "",
    check: true,
    icon: "mdi-account-group",
    nameMenu: "Mijozlar",
  },
  {
    link: "orders",
    check: true,
    icon: "mdi-order-bool-descending-variant",
    nameMenu: "Buyurtmalar",
  },
]);

const changeActive = function (t) {
  num.value = t;
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
ul {
  margin: 0;
  padding: 0;
  li {
    list-style-type: none;
  }
}
.aside {
  background: linear-gradient(
    180deg,
    rgba(2, 25, 59, 1) 0%,
    rgba(5, 37, 69, 1) 30%,
    rgba(14, 68, 116, 1) 66%,
    rgba(11, 108, 176, 1) 100%
  );
  width: 255px;
  height: 100vh !important;
  position: sticky;
  top: 0;
  .logout-btn {
    padding: 12px 36px;
    color: #fff;
    border: 3px solid transparent;
    cursor: pointer;
    transition: all 0.35s;
    .logout-text {
      font-size: 17px;
      line-height: 20px;
      letter-spacing: 0.2px;
      color: #fff;
      margin-left: 14px;
    }
  }
  .logout-btn:hover {
    background: #021128;
    border-left: 3px solid #fff;
  }
  .logo {
    padding: 32px 20px 32px 32px;
    margin-bottom: 10px;
    &-wrap {
      gap: 12px;
      .logo__title {
        font-family: Mulish, sans-serif;
        margin: 0;
        font-weight: bold;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0.4px;
        color: #d8d8e0;
        opacity: 0.7;
      }
    }
  }
  .menu {
    .bottom-menu-list {
      padding: 0;
      position: absolute;
      bottom: 5px;
      width: 100%;
      .bottom-menus {
        overflow-y: auto;
        &__item {
          transition: all 0.35s;
          opacity: 0.5;
          border: 3px solid #363740;
          .link {
            padding: 12px 32px;
            .title-text {
              margin: 0;
              font-size: 17px;
              line-height: 20px;
              letter-spacing: 0.2px;
              color: #fff;
              margin-left: 24px;
            }
          }
          .activeMenu {
            background: #474747;
            opacity: 1;
            border-left: 3px solid #fff;
            cursor: pointer;
            .title-text {
              color: #fff;
            }
          }
        }
        .activeMenu {
          background: #474747;
          opacity: 1;
          border-left: 3px solid #fff;
          cursor: pointer;
          .title-text {
            color: #fff;
          }
        }
        &__item:hover {
          background: #474747;
          opacity: 1;
          border-left: 3px solid #fff;
          cursor: pointer;
          .title-text {
            color: #fff;
          }
        }
      }
    }
    &-list {
      padding: 0;
      height: 65vh;
      .main-menus {
        height: 100%;
        overflow-y: auto;
        &::-webkit-scrollbar {
          width: 6px;
        }
        &::-webkit-scrollbar-thumb {
          background: rgba(136, 134, 134, 0.562);
          border-radius: 100px;
        }
        &::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px rgba(61, 60, 60, 0.705);
          border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb:hover {
          background: rgba(85, 85, 85, 0.527);
        }
        &__item {
          transition: all 0.35s;
          border: 3px solid transparent;
          .link {
            padding: 12px 32px;
            .title-text {
              margin: 0;
              font-size: 17px;
              line-height: 20px;
              letter-spacing: 0.2px;
              color: #fff;
              margin-left: 24px;
            }
          }
          .activeMenu {
            background: #08254d;
            opacity: 1;
            border-left: 3px solid #fff;
            cursor: pointer;
            .title-text {
              color: #ffffff;
            }
          }
        }
        .activeMenu {
          background: #021128; // manaaa
          opacity: 1;
          border-left: 3px solid #fff;
          cursor: pointer;
          .title-text {
            color: #eef1fd;
          }
        }

        &__item:hover {
          background: #021128; // manaa
          opacity: 1;
          border-left: 3px solid #fff;
          cursor: pointer;
          .title-text {
            color: #eef1fd;
          }
        }
      }
    }
  }
}
</style>
