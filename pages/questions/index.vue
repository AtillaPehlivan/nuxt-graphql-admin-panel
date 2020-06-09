<template>
  <main class="app-content">
    <div class="app-title">
      <div>
        <h1>
          <i class="fa fa-dashboard" /> Soru Yönetimi
        </h1>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item">
          <i class="fa fa-home fa-lg" />
        </li>
        <li class="breadcrumb-item">
          <a href="#">Soru Yönetimi</a>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="widget-small danger coloured-icon">
          <i class="icon fa fa-star fa-3x" />
          <div class="info">
            <h4>Aktif Soru Sayısı</h4>
            <p>
              <b>{{ questions.length }}</b>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="widget-small primary coloured-icon">
          <i class="icon fa fa-users fa-3x" />
          <div class="info">
            <h4>Pasif Soru Sayısı</h4>
            <p>
              <b>{{ questions.length -1 }}</b>
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
                    <th>Resim</th>
                    <th>Başlık</th>
                    <th>İsim</th>
                    <th>İşlem</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(question,key) in questions" :key="key">
                    <td>{{ question.id }}</td>
                    <td>
                      <b-img
                        thumbnail
                        fluid
                        :src="question.image"
                        height="150"
                        width="150"
                        alt="Image 1"
                      />
                    </td>

                    <td>{{ question.title }}</td>
                    <td>{{ question.name }}</td>

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
import fetchQuesitons from '~/apollo/queries/fetchQuestions.gql'

export default {
  middleware: 'auth',
  data () {
    return {
      questions: [],
      imageProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' }
    }
  },
  computed: mapState(['xHasuraAdminSecret']),
  apollo: {
    questions: {
      prefetch: false,
      query: fetchQuesitons,
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
