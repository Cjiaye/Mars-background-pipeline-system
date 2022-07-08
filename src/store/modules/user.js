import UserApi from '../../api/user'
export default{
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
    SET_TOKEN(state,token){
      state.token=token
    }
  },
  actions: {
    async login({commit},payload){
      const response=await UserApi.login(payload)
      return response
    }
  }
}