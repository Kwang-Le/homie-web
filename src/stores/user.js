import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({ users: null, currentUser: null, currenRole: null}),
    getters: {
      isAuthenticated: (state) => state.currentUser != null,
    },
    actions: {
      setAllUsersData(data) {
        this.users = data
        console.log(this.users)
      },
      authenticate(role, email, password) {
        this.currentUser = this.users.find((user) =>{
          console.log(user)
          console.log(email)
          return (user.username == email && user.password == password)
        })
        console.log("current User" + this.currentUser)
      }
    },
  })