<template>
  <div class="container">
    <!-- 头部部分 -->
    <Header></Header>
    <!-- 主体部分 -->
    <div class="main">
      <!-- 左侧组件部分 -->
      <div class="left">
        <Component-list></Component-list>
      </div>
      <!-- 中间画布部分 -->
      <div class="middle">
        <Operation></Operation>
        <EditorPlate></EditorPlate>
      </div>
      <!-- 右边组件部分 -->
      <div class="right">
        <Setting></Setting>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ComponentList from "../components/ComponentList.vue";
import Operation from "../components/Operation.vue";
import Setting from "../components/Setting.vue";
import EditorPlate from "../components/EditorPlate.vue";
export default {
  name: "Home",
  components: { Header, ComponentList, Operation, Setting, EditorPlate },
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