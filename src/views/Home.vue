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

    <list-users :users="users"/>
  </div>
</template>

<script>
import ListUsers from '@/components/ListUsers.vue';

import usersService from '@/services/users.service';
import { useToast } from 'vue-toastification';

export default {
  name: 'HomePage',
  data: () => ({
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
        const response = await usersService.getAll();

        this.users = response.data;
      } catch (error) {
        this.toast.error('Erro ao buscar listagem de usuários');
      }
    },
  },
};
</script>

<style>

</style>
