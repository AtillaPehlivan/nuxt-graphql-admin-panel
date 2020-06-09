<template>
  <main class="app-content">
    <div class="app-title">
      <div>
        <h1>
          <i class="fa fa-dashboard" /> Öğretmen Yönetimi
        </h1>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item">
          <i class="fa fa-home fa-lg" />
        </li>
        <li class="breadcrumb-item">
          <a href="#">Öğretmen Yönetimi</a>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="widget-small danger coloured-icon">
          <i class="icon fa fa-star fa-3x" />
          <div class="info">
            <h4>Aktif Öğretmen Sayısı</h4>
            <p>
              <b>{{ users.length }}</b>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="widget-small primary coloured-icon">
          <i class="icon fa fa-users fa-3x" />
          <div class="info">
            <h4>Pasif Öğretmen Sayısı</h4>
            <p>
              <b>{{ users.length -1 }}</b>
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
                      <button class="btn btn-primary wd-100p" type="button">
                        İşlem Yap
                      </button>
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
import fetchTeachers from '~/apollo/queries/fetchTeachers.gql'

export default {
  middleware: 'auth',
  data () {
    return {
      users: []
    }
  },
  computed: mapState(['xHasuraAdminSecret']),
  apollo: {
    users: {
      prefetch: false,
      query: fetchTeachers,
      context () {
        return {
          headers: {
            'X-Hasura-Admin-Secret': this.xHasuraAdminSecret
          }
        }
      }
    }
  },
  mounted () {

  }
}
</script>
