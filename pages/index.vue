<template>
  <main class="app-content">
    <div class="app-title">
      <div>
        <h1><i class="fa fa-dashboard" /> Anasayfa</h1>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item">
          <i class="fa fa-home fa-lg" />
        </li>
        <li class="breadcrumb-item">
          <a href="#">Anasayfa</a>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="widget-small primary coloured-icon">
          <i class="icon fa fa-users fa-3x" />
          <div class="info">
            <h4>Öğrenci</h4>
            <p><b>{{ users_aggregate }}</b></p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="widget-small info coloured-icon">
          <i class="icon fa fa-thumbs-o-up fa-3x" />
          <div class="info">
            <h4>Öğretmen</h4>
            <p><b>{{ users_aggregate_teacher }}</b></p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="widget-small warning coloured-icon">
          <i class="icon fa fa-files-o fa-3x" />
          <div class="info">
            <h4>Toplam Soru</h4>
            <p><b>{{ questions_aggregate }}</b></p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="widget-small danger coloured-icon">
          <i class="icon fa fa-star fa-3x" />
          <div class="info">
            <h4>Toplam Sorulan Soru</h4>
            <p><b>{{ user_question_aggregate }}</b></p>
          </div>
        </div>
      </div>
    </div>
    <div class="app-title" style="margin-top:5px;">
      <div>
        <h1><i class="fa fa-list" /> Son 10 Soru</h1>
      </div>
    </div>
    <div class="row">
      <div v-for="(question,index) in lastTenQuestions" :key="index" class="col-md-6">
        <div class="tile">
          <div class="tile-title-w-btn">
            <h3 class="title">
              {{ question.title }}
            </h3>
            <div class="btn-group">
              <a class="btn btn-primary" href="#"><i class="fa fa-lg fa-plus" /></a><a class="btn btn-primary" href="#"><i class="fa fa-lg fa-edit" /></a><a class="btn btn-primary" href="#"><i class="fa fa-lg fa-trash" /></a>
            </div>
          </div>
          <div class="tile-body">
            {{ question.name }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import { mapState } from 'vuex'
import userCount from '~/apollo/queries/dashboard/userCount.gql'
import teacherCount from '~/apollo/queries/dashboard/teacherCount.gql'
import questionCount from '~/apollo/queries/dashboard/questionCount.gql'
import askedQuestionCount from '~/apollo/queries/dashboard/askedQuestionCount.gql'
import lastTenQuestions from '~/apollo/queries/dashboard/lastTenQuestion.gql'

export default {
  middleware: 'auth',
  loading: {
    color: 'blue',
    height: '5px'
  },
  components: {

  },
  data () {
    return {
      users_aggregate: 0,
      users_aggregate_teacher: 0,
      questions_aggregate: 0,
      user_question_aggregate: 0,
      lastTenQuestions: []
    }
  },
  computed: mapState(['xHasuraAdminSecret']),
  apollo: {
    users_aggregate: {
      prefetch: false,
      query: userCount,
      context () {
        return {
          headers: {
            'X-Hasura-Admin-Secret': this.xHasuraAdminSecret
          }
        }
      },
      update (data) {
        return data.users_aggregate.aggregate.count
      }
    },
    users_aggregate_teacher: {
      prefetch: false,
      query: teacherCount,
      context () {
        return {
          headers: {
            'X-Hasura-Admin-Secret': this.xHasuraAdminSecret
          }
        }
      },
      update (data) {
        return data.users_aggregate.aggregate.count
      }
    },
    questions_aggregate: {
      prefetch: false,
      query: questionCount,
      context () {
        return {
          headers: {
            'X-Hasura-Admin-Secret': this.xHasuraAdminSecret
          }
        }
      },
      update (data) {
        return data.questions_aggregate.aggregate.count
      }
    },
    user_question_aggregate: {
      prefetch: false,
      query: askedQuestionCount,
      context () {
        return {
          headers: {
            'X-Hasura-Admin-Secret': this.xHasuraAdminSecret
          }
        }
      },
      update (data) {
        return data.user_question_aggregate.aggregate.count
      }
    },
    lastTenQuestions: {
      prefetch: false,
      query: lastTenQuestions,
      context () {
        return {
          headers: {
            'X-Hasura-Admin-Secret': this.xHasuraAdminSecret
          }
        }
      },
      update (data) {
        return data.questions
      }
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>
