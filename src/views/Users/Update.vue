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

      <form-select label="Permissão" v-model="form.permission" :options="permissions" required />

      <button
        type="submit"
        class="w-full py-2.5 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
      >Atualizar</button>
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
    permissions: [
      {
        value: 'admin',
        text: 'Admin',
      },
      {
        value: 'standerd',
        text: 'Standerd',
      },
    ],
  }),
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  setup() {
    const toast = useToast();

    return { toast };
  },
  mounted() {
    this.initialize();
  },
  methods: {
    async onSubmit() {
      try {
        await usersService.update(this.id, this.form);

        this.toast.success('Usuário atualizado com sucesso');
        this.$router.push('/');
      } catch (error) {
        if (typeof error.response.data.message === 'object') {
          error.response.data.message.forEach((m) => {
            this.toast.error(m);
          });
        }
      }
    },
    async initialize() {
      try {
        const response = await usersService.findOne(this.id);

        this.form = response.data;
      } catch (error) {
        this.toast.error('Erro ao buscar usuários');
        this.$router.push('/');
      }
    },
  },
};
</script>

<style>

</style>
