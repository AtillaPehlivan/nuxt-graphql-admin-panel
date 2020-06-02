
<template>
  <section class="login-content">
    <div class="cover bg-gradient" />
    <div class="mg-b-50 text-center">
      <img src="~/assets/images/logo.png" width="50%" alt="">
    </div>
    <div class="login-box" :class="{flipped :showRegisterWidget }">
      <form class="login-form" action="index.html">
        <h3 class="login-head">
          <i class="fa fa-lg fa-fw fa-user" />Giriş Yap
        </h3>
        <div class="form-group">
          <label class="control-label">E-POSTA</label>
          <input class="form-control" type="text" placeholder="E-Postanızı Giriniz" autofocus>
        </div>
        <div class="form-group">
          <label class="control-label">ŞİFRE</label>
          <input class="form-control" type="password" placeholder="Şifrenizi Giriniz">
        </div>
        <div class="form-group">
          <div class="utility">
            <div class="animated-checkbox">
              <label>
                <input type="checkbox"><span class="label-text">Beni Hatırla</span>
              </label>
            </div>
            <p class="semibold-text mb-2">
              <a href="#" @click="toggleWidget">Şifrenizi mi unuttunuz?</a>
            </p>
          </div>
        </div>
        <div class="form-group btn-container">
          <button class="btn btn-primary btn-block">
            <i class="fa fa-sign-in fa-lg fa-fw" />GİRİŞ YAP
          </button>
        </div>
      </form>
      <form class="forget-form" action="index.html">
        <h3 class="login-head">
          <i class="fa fa-lg fa-fw fa-lock" /><br>Şifrenizi Sıfırlayın
        </h3>
        <div class="form-group">
          <label class="control-label">E-POSTA</label>
          <input class="form-control" type="text" placeholder="E-Postanızı Giriniz">
        </div>
        <div class="form-group btn-container">
          <button class="btn btn-primary btn-block">
            <i class="fa fa-unlock fa-lg fa-fw" />SIFIRLA
          </button>
        </div>
        <div class="form-group mt-3">
          <p class="semibold-text mb-0">
            <a href="#" @click="toggleWidget"><i class="fa fa-angle-left fa-fw" />Girişe Dön</a>
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'guest',
  fetch () {
    console.log('fetch')
    // The `fetch` method is used to fill the store before rendering the page
  },
  asyncData (context) {
    console.log('asyncData')
    return { name: 'World' }
  },
  data: () => ({
    showRegisterWidget: false
  }),
  methods: {
    toggleWidget () {
      this.showRegisterWidget = !this.showRegisterWidget
    }
  },
  head () {
    // Set Meta Tags for this Page
  }

  // and more functionality to discover
}
</script>

<style>

</style>
