<template>
  <table class="border-collapse border table-auto w-full">
    <thead class="bg-slate-50">
      <tr>
        <th class="border p-4">Nome</th>
        <th class="border p-4">E-mail</th>
        <th class="border p-4">Telefone</th>
        <th class="border p-4">Opções</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td class="border p-4">{{user.name}}</td>
        <td class="border p-4">{{user.email}}</td>
        <td class="border p-4">{{user.phone}}</td>
        <td class="border p-4">
          <router-link
            :to="`/users/${user.id}`"
            class="underline text-blue-500 hover:text-blue-600"
          >Editar</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ListUsers',
  props: {
    users: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>

</style>
