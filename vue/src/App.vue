<template>
  <div class="main">
    <div
      v-for="(item, index) in components"
      :key="index"
      v-on:click="currentCompinents = item.name"
      v-bind:class="{ active: item.name == currentCompinents }"
    >
      {{ item.title }}
    </div>

    <!-- 这里的作用就是告诉使用者当前使用的事哪一个组件使用这个就可以实现一个类似于tab切换的效果 -->
  </div>
  <component :is="currentCompinents"></component>
  <!-- 当前使用的是哪一个组件 -->
</template>

<script>
import weixin from "./components/weixin.vue";
import site from "./components/site.vue";
import { computed } from "vue";
import config from "./config";
export default {
  components: { weixin, site },
  provide() {
    return {
      webname: computed(() => {
        return this.teacher;
      }),
      config,
    };
  },
  data() {
    return {
      teacher: "向军老师",
      currentCompinents: "weixin",
      components: [
        { title: "微信管理", name: "weixin" },
        { title: "网站信息", name: "site" },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  display: flex;
}
.main div {
  border: 1px solid #ddd;
  padding: 10px;
  margin-right: 20px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: 0.5s;
}
.active {
  background: #badc58;
  color: #fff;
}
</style>
