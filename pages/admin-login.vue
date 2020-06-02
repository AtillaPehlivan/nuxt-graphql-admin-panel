
<template>
  <section class="login-content">
    <div class="cover bg-gradient" />
    <div class="mg-b-50 text-center">
      <img src="~/assets/images/logo.png" width="50%" alt>
    </div>

    <div
      class="login-box"
      style="height:250px;min-height:auto;"
    >
      <form class="login-form" @submit.prevent="login">
        <h3 class="login-head">
          <i class="fa fa-lg fa-fw fa-user" />Giriş Yap
        </h3>
        <div class="form-group">
          <label class="control-label">SECRET</label>
          <input
            v-model="secret"
            class="form-control"
            type="password"
            placeholder="Şifrenizi Giriniz"
          >
        </div>
        <div class="form-group btn-container">
          <button class="btn btn-primary btn-block">
            <i class="fa fa-sign-in fa-lg fa-fw" />GİRİŞ YAP
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import fetchUsers from '~/apollo/queries/fetchUsers.gql'

export default {
  layout: 'guest',
  fetch () {
    console.log('fetch')
  },
  asyncData (context) {
    console.log('asyncData')
  },
  data: () => ({
    users: null,
    secret: ''
  }),
  // apollo: {
  //   users: {
  //     prefetch: true,
  //     query: fetchUsers
  //   }
  // },
  methods: {

    login () {
      if (this.secret.length <= 0) { return null }
      this.$apollo
        .query({
          query: fetchUsers,
          variables: {
            // var1: 'this is a variable'
          },
          context: {
            headers: {
              'X-Hasura-Admin-Secret': this.secret
            }
          }
        })
        .then(({ data }) => {
          this.makeToastSuccess()
          this.$store.commit('setXhasuraAdminSecret', this.secret)
          this.$router.push({ path: '/' })
        }).catch((err) => {
          this.makeToastError(err)
        })
    },
    makeToastError (err = null) {
      this.$bvToast.toast('Lütfen Tekrar Deneyiniz', {
        title: 'Hatalı Şifre',
        solid: true,
        variant: 'danger'
      })
    },
    makeToastSuccess (err = null) {
      this.$bvToast.toast('Yönlendiriliyorsunuz.....', {
        title: 'Başarılı',
        solid: true,
        variant: 'success'
      })
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
