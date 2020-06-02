export const state = () => ({
  sidebar: true,
  sidebarUserNotifications: false,
  sidebarUserSettings: false
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
  }
}
