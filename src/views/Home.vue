<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-xl font-semibold">Listagem de usuários</h1>

      <router-link
        to="/users"
        class="px-5 py-2.5 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
      >
        Criar usuário
      </router-link>
    </div>

    <form @submit.prevent="initialize" class="flex justify-end gap-x-1 items-center mb-6">
      <form-input type="text" label="E-mail" v-model="form.email" />
      <form-input type="text" label="Nome" v-model="form.name" />

      <button
        type="submit"
        class="px-4 py-2.5 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
      >
        Buscar
      </button>
    </form>

    <list-users :users="users"/>

    <div class="h-full flex justify-end mt-3">
      <button
        type="button"
        class="px-4 py-2.5 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 text-end"
        @click="logout"
      >
        Sair
      </button>
    </div>

  </div>
</template>

<script>
import ListUsers from '@/components/ListUsers.vue';

import usersService from '@/services/users.service';
import { useToast } from 'vue-toastification';

export default {
  name: 'HomePage',
  data: () => ({
    form: {
      name: '',
      email: '',
    },
    users: [],
  }),
  components: {
    ListUsers,
  },
  setup() {
    const toast = useToast();

    return { toast };
  },
  mounted() {
    this.initialize();
  },
  methods: {
    async initialize() {
      try {
        const response = await usersService.getAll(this.form.name, this.form.email);

        this.users = response.data;
      } catch (error) {
        this.toast.error('Erro ao buscar listagem de usuários');
      }
    },
    logout() {
      this.$store.commit('user/logout');
      this.$router.push('/login');
    },
  },
};
</script>

<style>

</style>
