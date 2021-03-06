import { InMemoryCache } from 'apollo-cache-inmemory'
export default function (context) {
  // let header = {}
  // console.log(context.store.state.xHasuraAdminSecret)
  // if (context.store.state.xHasuraAdminSecret) {
  //   header = { 'X-hasura-admin-secret': context.store.xHasuraAdminSecret }
  // }

  return {
    httpLinkOptions: {
      uri: 'https://ingilizce-soru-cevap.herokuapp.com/v1/graphql',
      credentials: 'same-origin'
      // headers: header
    },
    cache: new InMemoryCache(),
    wsEndpoint: 'wss://ingilizce-soru-cevap.herokuapp.com/v1/graphql'
  }
}
