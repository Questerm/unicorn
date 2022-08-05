<template>
  <div class="container">
    <!-- 头部部分 -->
    <Header></Header>
    <!-- 主体部分 -->
    <div class="main">
      <!-- 左侧组件部分 -->
      <div class="left">
        <component-list></component-list>
      </div>
      <!-- 中间画布部分 -->
      <div class="middle">
        <operation></operation>
        <div ref="write" class="write"></div>
      </div>
      <!-- 右边组件部分 -->
      <div class="right">
        <setting></setting>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import ComponentList from "./components/ComponentList.vue";
import Operation from "./components/Operation.vue";
import Setting from "./components/Setting.vue";
import { ref, onMounted } from 'vue';

export default {
  name: "Home",
  components: { Header, ComponentList, Operation, Setting },
  setup() {
    const write = ref(null);
    onMounted(() => {
    });
    return {
      write,
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  height: 753px;
  background-color: #eeecf0;
  background-size: cover;
}
.main {
  display: flex;
  justify-content: center;
  padding: 0 15px;
  overflow: hidden;
  .left {
    position: fixed;
    top: 0px;
    left: 15px;
    margin-top: 65px;
    width: 290px;
    height: 673px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
  }
  .middle {
    margin-top: 65px;
    width: 876px;
    height: 673px;
    border-radius: 6px;
    background-color: #fff;
    .write {
      width: 876px;
      height: 623px;
      position: absolute;
      background-color: pink;
      overflow: scroll;
    }
  }
  .right {
    position: fixed;
    top: 0px;
    right: 15px;
    margin-top: 65px;
    padding-bottom: 30px;
    width: 290px;
    height: 673px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    overflow-y: auto;
  }
}
</style>