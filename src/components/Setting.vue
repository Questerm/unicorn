<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
<<<<<<< HEAD
    <a-menu-item key="mail" @click="attributeShow">
      组件属性
    </a-menu-item>
    <a-menu-item key="alipay" @click="animationShow">
=======
    <a-menu-item key="mail" @click="isAttributeShow=true">
      组件属性
    </a-menu-item>
    <a-menu-item key="alipay" @click="isAttributeShow=false">
>>>>>>> 60f1bbb (编辑页面)
      组件动画
    </a-menu-item>
  </a-menu>
  <div class="contain">
<<<<<<< HEAD
    <div class="attribute" ref="attribute">
      <component :is="'attribute'"></component>
    </div>
    <div class="animation" ref="animation">
      <animation></animation>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined
  },
  setup() {
    const current = ref<string[]>(['mail']);
    const attribute = ref<HTMLElement | null>(null);
    const animation = ref<HTMLElement | null>(null);
    const attributeShow = () => {
        (animation.value as HTMLElement).style.display = 'none';
        (attribute.value as HTMLElement).style.display = 'block';
    }
    const animationShow = () => {
        (animation.value as HTMLElement).style.display = 'block';
        (attribute.value as HTMLElement).style.display = 'none';
    }
    return {
      current,
      attributeShow,
      attribute,
      animationShow,
      animation
=======
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
  components: {Animation},
  setup() {
    const current = ref(['mail']);
    const isAttributeShow = ref(true);
    return {
      current,
      isAttributeShow
>>>>>>> 60f1bbb (编辑页面)
    };
  },
});
</script>

<style lang="less" scoped>
<<<<<<< HEAD
  .animation {
    display: none;
  }
</style>

=======
</style>
>>>>>>> 60f1bbb (编辑页面)
