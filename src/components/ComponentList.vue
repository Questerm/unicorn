<template>
  <div>
    <h3>组件选择</h3>
    <div class="item-list">
      <div v-for="item in list" :key="item.id" class="item">
         <img :src=" item.icon " :alt="item.title" class="item-img">
         <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentList',
  data() {
    return {
      list: [
        { id: 1, title: '盒子', icon: require('../assets/' + 'hezi.png')},
        { id: 2, title: '文字', icon: require('../assets/' + 'wenzi.png')},
        { id: 3, title: '图片', icon: require('../assets/' + 'tupian.png')},
        { id: 4, title: '按钮', icon: require('../assets/' + 'chukong.png')},
        { id: 5, title: '表单', icon: require('../assets/' + 'biaodan.png')},
      ]
    }
  }
}
</script>

<style lang="less" scoped>
    h3 {
    margin-left: 27px;
    margin-top: 8px;
    font-weight: 700;
    font-size: 22px;
    }
  .item-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0 25px;
    .item {
    width: 105px;
    height: 105px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    border: 2px solid rgb(189, 188, 188); 
    border-radius: 8px;
    cursor: pointer;
    &:nth-child(2n+1) {
      margin-right: 26px;
    }
    img {
      width: 28px;
      height: 28px;
    }
    p {
      font-size: 16px;
      font-weight: 700;
      margin-top: 5px;
      line-height: 16px;
    }
    }
  }
</style>