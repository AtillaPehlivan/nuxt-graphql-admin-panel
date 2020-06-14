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
              <div class="row">
                <div class="col-md-6">
                  <b-form-group id="input-group-1" label="Name" label-for="input-1">
                    <b-form-input
                      id="input-1"
                      v-model="questions_by_pk.name"
                      type="text"
                      required
                      placeholder="Enter Name"
                    />
                  </b-form-group>
                  <b-form-group id="input-group-2" label="Title" label-for="input-2">
                    <b-form-input
                      v-model="questions_by_pk.title"
                      required
                      placeholder="Enter title"
                    />
                  </b-form-group>

                  <b-form-group id="input-group-2" label="Doğru Cevap" label-for="input-2">
                    <b-form-radio-group
                      v-model="questions_by_pk.true_option"
                      :options="options"
                      class="mb-4"
                      value-field="value"
                      text-field="name"
                      disabled-field="notEnabled"
                    />
                  </b-form-group>
                </div>
                <div class="col-md-6">
                  <b-form-group id="input-group-2" label="Resim" label-for="input-2">
                    <b-img center :src="questions_by_pk.image" alt="Center image" />
                  </b-form-group>
                  <b-form-group id="input-group-2" label="Etiketler" label-for="input-2">
                    <b-button v-for="(tags,key) in questions_by_pk.question_tags" :key="key" variant="outline-primary">
                      {{ tags.tag.name }}
                    </b-button>
                  </b-form-group>
                </div>
              </div>

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
import fetchQuestionOne from '~/apollo/queries/fetchQuestionOne.gql'
import updateQuestionOne from '~/apollo/mutations/updateQuestion.gql'

export default {
  middleware: 'auth',
  loading: true,
  data () {
    return {
      questions_by_pk: [],
      options: [{ name: 'A', value: 0 }, { name: 'B', value: 1 }, { name: 'C', value: 2 }, { name: 'D', value: 3 }, { name: 'E', value: 4 }],
      tags: [{ name: 'YÖKDİL', value: 1 }, { name: 'YDS', value: 2 }, { name: 'TOEFL', value: 3 }, { name: 'TÜM DERSLER', value: 4 }]
    }
  },
  computed: mapState(['xHasuraAdminSecret']),
  apollo: {
    questions_by_pk: {
      prefetch: false,
      query: fetchQuestionOne,
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

      this.$apollo
        .mutate({
          mutation: updateQuestionOne,
          variables: {
            id: this.questions_by_pk.id,
            name: this.questions_by_pk.name,
            title: this.questions_by_pk.title,
            true_option: this.questions_by_pk.true_option
          },
          context: {
            headers: {
              'X-Hasura-Admin-Secret': this.xHasuraAdminSecret
            }
          }
        })
        .then((res) => {
          this.updateAlert()
        })
    },

    updateAlert () {
      this.$bvToast.toast('Verileriniz Güncellendi', {
        title: 'Güncellendi',
        variant: 'success',
        solid: true
      })
    }
  }
}
</script>
