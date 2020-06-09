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
      <div class="col-md-12">
        <div class="tile">
          <div class="tile-body">
            <b-form @submit="onSubmit">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="users_by_pk.email"
                  type="email"
                  required
                  placeholder="Enter email"
                />
              </b-form-group>

              <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input

                  v-model="users_by_pk.name"
                  required
                  placeholder="Enter name"
                />
              </b-form-group>

              <b-form-group id="input-group-2" label="UID:" label-for="input-2">
                <b-form-input

                  v-model="users_by_pk.uid"
                  required
                />
              </b-form-group>

              <b-form-group id="input-group-2" label="Created At:" label-for="input-2">
                <b-form-input

                  v-model="users_by_pk.created_at"
                  required
                />
              </b-form-group>

              <b-button type="submit" variant="primary">
                Güncelle
              </b-button>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { mapState } from 'vuex'
import fetchUserOne from '~/apollo/queries/fetchUserOne.gql'

export default {
  middleware: 'auth',
  loading: true,
  data () {
    return {
      users_by_pk: []
    }
  },
  computed: mapState(['xHasuraAdminSecret']),
  apollo: {
    users_by_pk: {
      prefetch: false,
      query: fetchUserOne,
      variables () {
        return {
          id: this.$route.params.id
        }
      },
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
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.user))
    }
  }
}
</script>
