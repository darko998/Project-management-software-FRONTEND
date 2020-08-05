<template>
  <div id="app">
    <app-header :nav-links="navLinks" :imagePath="require('./assets/logo.png')" />
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
  data () {
    return {
      navLinks: [
        {
          text: "Home",
          path: '/',
          icon: 'ion-ios-home'
        },
        {
          text: "Projects",
          path: '/projects',
          icon: 'ion-ios-list'
        },
        {
          text: "Companies",
          path: '/companies',
          icon: 'ion-ios-cube'
        },
        {
          text: "Create project",
          path: '/projects/create',
          icon: 'ion-ios-add-circle-outline add-icon'
        }
      ]
    }
  }
}
</script>

<style>
@import "https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css";

figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 10px;
  margin-inline-end: 0;
}
</style>
