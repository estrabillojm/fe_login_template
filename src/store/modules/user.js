import axios from 'axios'
import router from '@/router/index'

const user = {
    namespaced: true, 
    state: {
        error: ''
    },
    mutations: {
        LOGIN: (state)=>{
           state.error = ''
        },
        ERROR_HANDLING: (state, error)=>{
            state.error = error
        }
    },
    actions: {
        login: ({ commit }, data)=>{
            
            axios.post('/login', {
                username: data.username,
                password: data.password
            }).then(res=>{
                // router.push('Home')
                commit('LOGIN')
                console.log(res, data)
            }).catch(err=>{
                commit('ERROR_HANDLING', err.response.data.error)
            })
        },
        register: (data)=>{
            axios.post('/register', data).then(res=>{
                router.push('Home')
                console.log(res)
            })
        }
    },
}

export default user