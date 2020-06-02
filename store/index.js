export const state = () => ({

  // panel view
  sidebar: true,
  sidebarUserNotifications: false,
  sidebarUserSettings: false,

  // user
  user: null,
  authStatus: false,
  xHasuraAdminSecret: null

})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  toggleSidebarUserNotifications (state) {
    state.sidebarUserNotifications = !state.sidebarUserNotifications
  },
  toggleSidebarUserSettings (state) {
    state.sidebarUserSettings = !state.sidebarUserSettings
  },
  setAuthStatus (state, payload) {
    console.log(payload.token)
    if (payload.token !== null) {
      state.authStatus = true
    }
  },
  setXhasuraAdminSecret (state, secret) {
    state.xHasuraAdminSecret = secret
    state.authStatus = true
  }
}

export const actions = {
  nuxtClientInit (context, payload) {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : null
    context.commit('setAuthStatus', { token })
  }
}
