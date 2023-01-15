<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <form @submit.prevent="onSubmit">
      <form-input type="email" label="E-mail" v-model="message" required />
      <form-input type="password" label="Password" v-model="message" required />

      <button
        type="submit"
        class="w-full py-2.5 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
      >
        Entrar
      </button>
    </form>
  </div>
</template>

<script>
import FormInput from '@/components/FormInput.vue';

export default {
  name: 'LoginPage',
  data: () => ({
    form: {
      email: '',
      password: '',
    },
  }),
  components: {
    FormInput,
  },
  methods: {
    onSubmit() {
      this.$router.push('/');
    },
  },
};
</script>

<style>

</style>
