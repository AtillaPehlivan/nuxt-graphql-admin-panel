<template>
  <div class="div">
    <header class="app-header">
      <a class="app-header__logo" href="index.html">
        <img src="~/assets/images/logoFullWhite.png" width="70%" alt>
      </a>
      <!-- Sidebar toggle button-->
      <a
        class="app-sidebar__toggle"
        href="#"
        data-toggle="sidebar"
        aria-label="Hide Sidebar"
        @click="toggleSidebar"
      />
      <!-- Navbar Right Menu-->
      <ul class="app-nav">
        <li class="app-search">
          <input class="app-search__input" type="search" placeholder="Arama">
          <button class="app-search__button">
            <i class="fa fa-search" />
          </button>
        </li>
        <!--Notification Menu-->
        <li class="dropdown" :class="{'show':sidebarUserNotifications}">
          <a
            class="app-nav__item"
            href="#"
            data-toggle="dropdown"
            aria-label="Show notifications"
            @click="showSidebarUserNotification"
          >
            <i class="fa fa-bell-o fa-lg" />
          </a>
          <ul
            class="app-notification dropdown-menu dropdown-menu-right"
            :class="{'show':sidebarUserNotifications}"
          >
            <li class="app-notification__title">
              You have 4 new notifications.
            </li>
            <div class="app-notification__content">
              <li>
                <a class="app-notification__item" href="javascript:;">
                  <span class="app-notification__icon">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x text-primary" />
                      <i class="fa fa-envelope fa-stack-1x fa-inverse" />
                    </span>
                  </span>
                  <div>
                    <p class="app-notification__message">Lisa sent you a mail</p>
                    <p class="app-notification__meta">2 min ago</p>
                  </div>
                </a>
              </li>
              <li>
                <a class="app-notification__item" href="javascript:;">
                  <span class="app-notification__icon">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x text-danger" />
                      <i class="fa fa-hdd-o fa-stack-1x fa-inverse" />
                    </span>
                  </span>
                  <div>
                    <p class="app-notification__message">Mail server not working</p>
                    <p class="app-notification__meta">5 min ago</p>
                  </div>
                </a>
              </li>
              <li>
                <a class="app-notification__item" href="javascript:;">
                  <span class="app-notification__icon">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x text-success" />
                      <i class="fa fa-money fa-stack-1x fa-inverse" />
                    </span>
                  </span>
                  <div>
                    <p class="app-notification__message">Transaction complete</p>
                    <p class="app-notification__meta">2 days ago</p>
                  </div>
                </a>
              </li>
              <div class="app-notification__content">
                <li>
                  <a class="app-notification__item" href="javascript:;">
                    <span class="app-notification__icon">
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x text-primary" />
                        <i class="fa fa-envelope fa-stack-1x fa-inverse" />
                      </span>
                    </span>
                    <div>
                      <p class="app-notification__message">Lisa sent you a mail</p>
                      <p class="app-notification__meta">2 min ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="app-notification__item" href="javascript:;">
                    <span class="app-notification__icon">
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x text-danger" />
                        <i class="fa fa-hdd-o fa-stack-1x fa-inverse" />
                      </span>
                    </span>
                    <div>
                      <p class="app-notification__message">Mail server not working</p>
                      <p class="app-notification__meta">5 min ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="app-notification__item" href="javascript:;">
                    <span class="app-notification__icon">
                      <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x text-success" />
                        <i class="fa fa-money fa-stack-1x fa-inverse" />
                      </span>
                    </span>
                    <div>
                      <p class="app-notification__message">Transaction complete</p>
                      <p class="app-notification__meta">2 days ago</p>
                    </div>
                  </a>
                </li>
              </div>
            </div>
            <li class="app-notification__footer">
              <a href="#">Tümünü Gör</a>
            </li>
          </ul>
        </li>
        <!-- User Menu-->
        <li class="dropdown" :class="{show:sidebarUserSettings}">
          <a
            class="app-nav__item"
            href="#"
            data-toggle="dropdown"
            aria-label="Open Profile Menu"
            @click="showSidebarUserSettings"
          >
            <i class="fa fa-user fa-lg" />
          </a>
          <ul
            class="dropdown-menu settings-menu dropdown-menu-right"
            :class="{show:sidebarUserSettings}"
          >
            <li>
              <a class="dropdown-item" href="page-user.html">
                <i class="fa fa-cog fa-lg" /> Ayarlar
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="page-login.html">
                <i class="fa fa-sign-out fa-lg" /> Çıkış Yap
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
    <aside class="app-sidebar">
      <div class="app-sidebar__user">
        <img
          class="app-sidebar__user-avatar"
          src="~/assets/images/default_user.png"
          width="50px"
          height="50px"
          alt="User Image"
        >
        <div>
          <p class="app-sidebar__user-name">
            Hidayet Arasan
          </p>
          <p class="app-sidebar__user-designation">
            Yönetici
          </p>
        </div>
      </div>
      <ul class="app-menu">
        <li>
          <nuxt-link to="/" exact class="app-menu__item">
            <i class="app-menu__icon fa fa-home" />
            <span class="app-menu__label">Anasayfa</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/students" class="app-menu__item">
            <i class="app-menu__icon fa fa-users" />
            <span class="app-menu__label">Öğrenciler</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/teachers" class="app-menu__item">
            <i class="app-menu__icon fa fa-edit" />
            <span class="app-menu__label">Eğitmenler</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/questions" class="app-menu__item">
            <i class="app-menu__icon fa fa-file" />
            <span class="app-menu__label">Sorular</span>
          </nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  methods: {
    toggleSidebar () {
      this.$store.commit('toggleSidebar')
    },
    showSidebarUserSettings () {
      this.$store.commit('toggleSidebarUserSettings')
    },
    showSidebarUserNotification () {
      this.$store.commit('toggleSidebarUserNotifications')
    }
  },
  computed: mapState([
    'sidebar',
    'sidebarUserSettings',
    'sidebarUserNotifications'
  ])
}
</script>
