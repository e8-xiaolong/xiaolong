<template>
  <div class="input_div">
    <label>
      <div>{{ title }}</div>
      <textarea
        v-bind:rows="rows"
        v-model="content"
        v-on:input="$emit('update:modelValue', $event.target.value)"
      ></textarea>
    </label>
  </div>
</template>

<script>
export default {
  props: ["title", "modelValue", "rows"],
  emits: ["update:modelValue"],
  inject: ["webname"],
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
textarea {
  border: 2px solid #ddd;
  padding: 5px 10px;
  color: #666;
}
</style>
