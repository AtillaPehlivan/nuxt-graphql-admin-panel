<template>
  <div>
    <header-bar />
    <nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderBar from '@/components/layouts/header'
export default {
  components: {
    HeaderBar
  },
  data: () => ({
    sidebarToggled: ['app', 'sidebar-mini', 'pace-done'],
    sidebarNotToggled: ['app', 'sidebar-mini', 'pace-done', 'sidenav-toggled']
  }),
  computed: mapState(['sidebar']),
  head () {
    return {
      title: 'Ana Sayfa - İngilizce Soru Cevap',
      bodyAttrs: {
        class: this.sidebar ? this.sidebarToggled : this.sidebarNotToggled
      }
    }
  }
}
</script>

<style>

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
