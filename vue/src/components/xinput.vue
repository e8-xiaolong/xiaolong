<template>
  <div class="input_div">
    <label>
      <div>{{ title }}</div>
      <input
        type="text"
        v-model="content"
        v-on:input="$emit('update:modelValue', $event.target.value)"
      />
      {{ webname }}
    </label>
  </div>
</template>

<script>
export default {
  props: ["title", "modelValue"],
  emits: ["update:modelValue"],
  inject: ['webname'],
  data() {
    return {
      content: this.modelValue,
    };
  },
};
</script>

<style scoped>
.input_div label {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.input_div label div {
  color: #666;
  font-size: 16px;
  margin-right: 10px;
  width: 100px;
}
input {
  border: 2px solid #ddd;
  padding: 5px 10px;
  color: #666;
}
</style>
