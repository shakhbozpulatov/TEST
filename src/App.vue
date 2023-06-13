<template>
  <v-app>
    <v-navigation-drawer permanent class="sidebar" app>
      <SidebarView />
    </v-navigation-drawer>

    <v-main class="">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import SidebarView from "./components/SideBarView.vue";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
p,
h3,
h4,
a,
th,
td {
  font-family: "Poppins", sans-serif;
}
.v-main {
  user-select: none;
  background: #deeaff;
  padding: 24px 32px;
}
</style>
