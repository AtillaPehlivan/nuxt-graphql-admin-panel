export default (context) => {
//   const token = context.store.state.xHasuraAdminSecret
  const client = context.app
  console.log(client)
//   client.networkInterface.use([{
//     applyMiddleware (req, next) {
//       if (!req.options.headers) { req.options.headers = {} }
//       req.options.headers['x-hasura-admin-secret'] = token
//       next()
//     }
//   }])
}
