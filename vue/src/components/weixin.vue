<template>
  <div>
    <card>
      <template v-slot:header> 微信支付 </template>
      <template v-slot:main>
        <xinput title="微信号" v-model="appName"></xinput>
        <xinput title="秘钥" v-model="key"></xinput>
        <tzt title="保险箱" v-model="key" v-bind:rows="4"></tzt>
      </template>
    </card>
  </div>
</template>

<script>
import card from "./card.vue";
import Xinput from "./xinput.vue";
export default {
  components: { card, Xinput },
  data() {
    return {
      appName: "向军大叔",
      key: "this is for you ",
    };
  },
};
</script>

<style lang="sass" scoped></style>
