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
      <Attribute></Attribute>
    </div>
    <div class="animation" v-show="!isAttributeShow">
      <Animation></Animation>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Animation from './Animation.vue'
import Attribute from './childComponents/Box/Attribute.vue';

export default defineComponent({
  name: 'Setting',
  components: { Animation,  Attribute },
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