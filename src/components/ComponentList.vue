<template>
  <div>
    <h3 ref="h3ref">组件选择</h3>
    <div class="item-list" ref="haha">
      <div
        v-for="item in list"
        :key="item.id"
        class="item"
        @click="newSomething(item.id)"
      >
        <img :src="item.icon" :alt="item.title" class="item-img" />
        <p>{{ item.title }}</p>
        <input v-if="showInput" type="text">
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, defineProps,computed } from "vue";

export default {
  name: "ComponentList",
  data() {
    return {
      list: [
        { id: 1, title: "盒子", icon: require("../assets/" + "hezi.png") },
        { id: 2, title: "文字", icon: require("../assets/" + "wenzi.png") },
        { id: 3, title: "图片", icon: require("../assets/" + "tupian.png") },
        { id: 4, title: "按钮", icon: require("../assets/" + "chukong.png") },
        { id: 5, title: "表单", icon: require("../assets/" + "biaodan.png") },
      ],
    };
  },
  props: {
  },
  setup(props) {
    let showInput = computed(() => {
      return item.id===3
    });
    let write;
    onMounted(() => {
      write = document.getElementsByClassName("write")[0];
      console.log(write);
    });
    const newSomething = (id) => {
        switch (id) {
          case 1:
            console.log(write);
            if (write) {
             write.appendChild(newBox());
            }
            break;
          case 2:
            console.log("文字");
            if(write){
              write.appendChild(newWord());
            }
            break;
          case 3:
            console.log("图片");
            break;
          case 4:
            console.log("按钮");
            break;
          case 5:
            console.log("表单");
            break;
        }
      };
      
     // 创建盒子
     const newBox = () => {
       const div = document.createElement("div");
       div.style.width = "200px";
       div.style.height = "200px";
       div.style.position = "relative";
       div.style.display = "block";
       div.style.top = "50%";
       div.style.left = "50%";
       div.style.transform = "translate(-50%,-50%)";
       div.style.border = "1px solid #000";
       return div;
     };
     // 创建文字
    const newWord = () => {
      const p = document.createElement('p');
      p.style.margin = "0px";
      p.style.height = "50px";
      p.style.lineHeight = "50px";
      p.style.width = "200px";
      p.style.paddingLeft = "10px";
      p.style.display = "block";
      p.style.position = "relative";
      p.style.top = "50%";
      p.style.left = "50%";
      p.style.transform="translate(-50%,-50%)";
      p.style.border = "1px solid #000";
      p.innerHTML = "请输入文字";
      p.style.fontSize = "28px";
      return p;
     }
     // 创建图片
     const newPic=()=>{}
     // 创建按钮
     const newBtn=()=>{}
     // 创建表单
     const newExe=()=>{}
    return {
      newSomething,
      props,
    };
  },
};
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
    &:nth-child(2n + 1) {
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
