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

export default {
  name: 'HomePage',
  data: () => ({
    users: [
      {
        id: '1',
        name: 'Guilherme',
        email: 'guilherme.cezario@nextar.com.br',
        phone: '011955551234',
      },
      {
        id: '1',
        name: 'Joao',
        email: 'joao.pedro@nextar.com',
        phone: '011955551234',
      },
    ],
  }),
  components: {
    ListUsers,
  },
};
</script>

<style>

</style>
