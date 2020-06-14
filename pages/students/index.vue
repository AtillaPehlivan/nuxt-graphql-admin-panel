<template>
  <main class="app-content">
    <div class="app-title">
      <div>
        <h1>
          <i class="fa fa-dashboard" /> Öğrenci Yönetimi
        </h1>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item">
          <i class="fa fa-home fa-lg" />
        </li>
        <li class="breadcrumb-item">
          <a href="#">Öğrenci Yönetimi</a>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="widget-small danger coloured-icon">
          <i class="icon fa fa-star fa-3x" />
          <div class="info">
            <h4>Aktif Öğrenci Sayısı</h4>
            <p>
              <b>{{ users.length -1 }}</b>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="widget-small primary coloured-icon">
          <i class="icon fa fa-users fa-3x" />
          <div class="info">
            <h4>Pasif Öğrenci Sayısı</h4>
            <p>
              <b>10</b>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="tile">
          <div class="tile-body">
            <div class="table-responsive">
              <table id="sampleTable" class="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Adı</th>
                    <th>E-Posta</th>
                    <th>Rol</th>
                    <th>İşlem</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user,key) in users" :key="key">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role }}</td>

                    <td>
                      <b-dropdown
                        id="btn btn-primary wd-100p"
                        variant="primary"
                        text="İşlem Yap"
                        type="button"
                      >
                        <b-dropdown-item>
                          <nuxt-link :to="'/students/'+user.id" exact>
                            Düzenle
                          </nuxt-link>
                        </b-dropdown-item>
                        <b-dropdown-item @click="deleteById(user.id)">
                          Sil
                        </b-dropdown-item>
                      </b-dropdown>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { mapState } from 'vuex'
import fetchUsers from '~/apollo/queries/fetchUsers.gql'

export default {
  middleware: 'auth',
  loading: true,
  data () {
    return {
      users: []
    }
  },
  computed: mapState(['xHasuraAdminSecret']),
  apollo: {
    users: {
      prefetch: false,
      query: fetchUsers,
      context () {
        return {
          headers: {
            'X-Hasura-Admin-Secret': this.xHasuraAdminSecret
          }
        }
      }
    }
  },
  mounted () {},
  methods: {
    deleteById (id) {
      this.$bvModal.msgBoxConfirm('Veriler Silinmek Üzere ?', {
        title: 'Onaylama Ekranı',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'EVET',
        cancelTitle: 'HAYIR',

        hideHeaderClose: false,
        centered: true
      })
        .then((value) => {
          console.log(value)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
