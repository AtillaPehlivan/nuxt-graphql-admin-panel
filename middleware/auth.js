export default function ({ store, redirect, route }) {
  if (!store.state.authStatus) {
    return redirect('/login')
  }
}

// function isAdminRoute (route) {
//   if (route.matched.some(record => record.path === '/admin')) {
//     return true
//   }
// }
