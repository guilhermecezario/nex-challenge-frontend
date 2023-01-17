<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <form @submit.prevent="onSubmit">
      <form-input type="email" label="E-mail" v-model="form.email" required />
      <form-input type="password" label="Password" v-model="form.password" required />

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
import authService from '@/services/auth.service';

import { useToast } from 'vue-toastification';

export default {
  name: 'LoginPage',
  data: () => ({
    form: {
      email: '',
      password: '',
    },
  }),
  setup() {
    const toast = useToast();

    return { toast };
  },
  methods: {
    async onSubmit() {
      try {
        this.form.email = this.form.email.toLowerCase();

        const response = await authService.session(this.form);

        this.$store.dispatch('user/login', response.data);
        this.$router.push('/');
      } catch (error) {
        this.toast.error('E-mail ou senha incorreta');
      }
    },
  },
};
</script>

<style>

</style>
