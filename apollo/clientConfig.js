import { InMemoryCache } from 'apollo-cache-inmemory'
export default function (context) {
  return {
    httpLinkOptions: {
      uri: 'http://ingilizce-soru-cevap.herokuapp.com/v1/graphql',
      credentials: 'same-origin'
      // headers: {
      //   'X-hasura-admin-secret': '19051992'
      // }
    },
    cache: new InMemoryCache(),
    wsEndpoint: 'ws://ingilizce-soru-cevap.herokuapp.com/v1/graphql'
  }
}
