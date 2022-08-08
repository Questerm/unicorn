<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="mail" @click="isAttributeShow = true">
      组件属性
    </a-menu-item>
    <a-menu-item key="alipay" @click="isAttributeShow = false">
      组件动画
    </a-menu-item>
  </a-menu>
  <div class="content">
    <div class="attribute" v-show="isAttributeShow">
      <component :is="'attribute'"></component>
    </div>
    <div class="animation" v-show="!isAttributeShow">
      <Animation></Animation>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Animation from './Animation.vue'

export default defineComponent({
  name: 'Setting',
  components: { Animation },
  setup() {
    const current = ref(['mail']);
    const isAttributeShow = ref(true);
    return {
      current,
      isAttributeShow
    };
  },
});
</script>
<style>
</style>