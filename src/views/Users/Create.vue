<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <div class="mb-6">
      <h1 class="text-xl font-semibold">Criar usuário</h1>
    </div>
    <form @submit.prevent="onSubmit">
      <form-input type="email" label="E-mail" v-model="form.email" required />
      <form-input type="password" label="Password" v-model="form.password" required />
      <form-input type="text" label="Nome" v-model="form.name" required />
      <form-input type="number" label="Telefone" v-model="form.phone" required />

      <div class="mb-3">
        <label
          for="permission"
          class="block mb-1 text-sm font-medium text-gray-900"
        >
          Permissão
          <select
            id="permission"
            class="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
            v-model="form.permission"
          >
            <option value="admin">Admin</option>
            <option value="standerd">Standerd</option>
          </select>
        </label>
      </div>

      <button
        type="submit"
        class="w-full py-2.5 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
      >Criar</button>
    </form>

    <router-link
      to="/"
      class="underline text-blue-500 hover:text-blue-600 mt-4"
    >Voltar</router-link>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification';

import usersService from '@/services/users.service';

export default {
  name: 'UsersCreate',
  data: () => ({
    form: {
      name: '',
      password: '',
      email: '',
      phone: '',
      permission: 'standerd',
    },
  }),
  setup() {
    const toast = useToast();

    return { toast };
  },
  methods: {
    async onSubmit() {
      try {
        await usersService.create(this.form);

        this.toast.success('Usuário criado com sucesso');
      } catch (error) {
        if (typeof error.response.data.message === 'object') {
          error.response.data.message.forEach((m) => {
            this.toast.error(m);
          });
        }
      }
    },
  },
};
</script>

<style>

</style>
