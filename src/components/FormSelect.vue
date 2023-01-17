<template>
  <div class="mb-3">
    <label
      v-if="label"
      :for="id"
      class="block mb-1 text-sm font-medium text-gray-900"
    >
      {{label}}
      <select
        :id="id"
        class="bg-gray-50 border border-gray-300 rounded-lg w-full p-2.5"
        :placeholder="placeholder"
        :required="required"
        :value="modelValue"
        @input="onInput"
      >
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.value"
        >{{option.text}}</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: 'FormSelect',
  props: {
    options: {
      type: Array,
      required: false,
      default: () => [],
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    id: String,
    placeholder: String,
    modelValue: String,
    label: String,
  },
  emits: ['update:modelValue'],
  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style>

</style>
