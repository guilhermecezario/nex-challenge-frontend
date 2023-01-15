<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <form @submit.prevent="onSubmit">
      <Input type="email" label="E-mail" v-model="message" required />
      <Input type="password" label="Password" v-model="message" required />

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
import Input from "@/components/FormInput.vue"

export default {
  name: "HomePage",
  data: () => ({
    form: {
      email: "",
      password: "",
    }
  }),
  components: {
    Input
  },
  methods: {
    onSubmit() {
      console.log("opa");
      this.$router.push("/")
    }
  }
}
</script>

<style>

</style>