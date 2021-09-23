<template>
  <div class="login-parent">
      <Form id="login-form" @submit="loginUser()" :validation-schema="schema" v-slot="{ errors }">
          <div class="form-group">
              <label for="" :class="{'is-invalid-label': errors.username  || backError}">Username</label>
              <Field
                name="username"
                as="input"
                :class="{'is-invalid': errors.username  || backError}"
                :value="username"
                v-model="username"
                />
              <span class="text-red-500 font-bold">{{ errors.username }}</span>
              <span class="text-red-500 font-bold" v-if="!errors.username && !errors.password ">{{ backError }}</span>
          </div>
          <div class="form-group">
              <label for="" :class="{'is-invalid-label': errors.password || backError}">Password</label>
              <Field
              name="password"
              type="password"
              :class="{'is-invalid': errors.password || backError }"
              as="input"
              :value="password"
              v-model="password"
              />
              <span class="text-red-500 font-bold">{{ errors.password }}</span>
          </div>
          <div class="form-group flex justify-end">
              <v-btn cls="btn blue" id="login-btn" name="Login"/>
          </div>
      </Form>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from '@vue/reactivity'
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'

export default {
    components:{
        Form, Field
    },

    setup(){
        const store = useStore()

        const data = reactive({
            username: '',
            password: ''
        })

        const backError = computed(()=> store.state.user.error)

        const schema = yup.object().shape({
            username: yup.string().required("Username is required"),
            password: yup.string()
            // .test('len', 'Password must have a minimum of 8 characters', val => val.length > 7)
            .required("Password is required"),
        })

        const loginUser = async ()=>{
            console.log(data)
            store.dispatch('user/login', data)
        }

        return {
            ...toRefs(data),
            backError,
            loginUser,
            schema
           
        }
    }
}
</script>

<style>
    .is-invalid{
        outline:none;
        border:1px solid red;
    }

    .is-invalid-label{
        color:red;
    }
    .login-parent{
        max-width:760px;
        margin:0 auto;
        height:100vh;
        display:flex;
        align-items:center;
    }

    #login-form{
        @apply border py-20 px-10 w-full bg-white rounded-md shadow-md;
    }

    .form-group{
        @apply w-full mb-3;
    }

    .form-group input{
        padding: 3px 0;
        @apply w-full border rounded-md pl-3;
    }

</style>