<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <div class="mb-6">
      <h1 class="text-xl font-semibold">Atualizar usuário</h1>
    </div>
    <form @submit.prevent="onSubmit">
      <form-input type="email" label="E-mail" v-model="form.email" required />
      <form-input type="password" label="Password" v-model="form.password" required />
      <form-input type="text" label="Nome" v-model="form.name" required />
      <form-input type="number" label="Telefone" v-model="form.phone" required />

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
export default {
  name: 'UsersUpdate',
  data: () => ({
    form: {
      name: '',
      password: '',
      email: '',
      phone: '',
    },
  }),
};
</script>

<style>

</style>
