<template>
  <div>
    <h3 ref="h3ref">组件选择</h3>
    <div class="item-list" ref="haha">
      <div
        v-for="item in list"
        :key="item.id"
        class="item"
        @click="newSomething(item.id-1)"
      >
        <img :src="item.icon" :alt="item.title" class="item-img" />
        <p>{{ item.title }}</p>
        <input type="file" v-if="item.id === 3" class="imgInput" />
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import elStore from "@/store/elStore";
import { reactive } from '@vue/reactivity';

export default {
  name: "ComponentList",
  setup() {
    let useElStore = elStore();
    //组件列表
    const list = [
      { id: 1, title: "盒子", icon: require("../assets/" + "hezi.png") },
      { id: 2, title: "文字", icon: require("../assets/" + "wenzi.png") },
      { id: 3, title: "图片", icon: require("../assets/" + "tupian.png") },
      { id: 4, title: "按钮", icon: require("../assets/" + "chukong.png") },
      { id: 5, title: "表单", icon: require("../assets/" + "biaodan.png") },
    ];

    let els = reactive( Array.from(new Array(list.length), () => []));
    useElStore.els = els;
    const newSomething = (id) => {
      let t = createEl[id];
      t.id = uuidv4();
      els[id].push(t);
    };

    const createEl = [
      //创建盒子
      {
        class: "box",
        style: {
          width: 200,
          height: 200,
          top: 200,
          left: 200,
          rotate: 0,
          borderRadius: 0,
          borderStyle: "solid",
          borderColor: "#000",
          borderWidth: 2,
          backgroundColor: "#fff",
          backgroundImg: "",
        },
      },
      // 创建文字
      {
        class: "text",
        isEditable: false, //是否处于编辑状态
        content: "双击可编辑文字",
        style: {
          width: 200,
          top: 200,
          left: 200,
          rotate: 0,
          fontSize: 16,
          borderRadius: 0,
          borderStyle: "solid",
          borderColor: "#000",
          borderWidth: 2,
          backgroundColor: "#fff",
          backgroundImg: "",
        },
      },
      //创建图片
      {},
      //创建按钮
      {
        class: "button",
        content: "按钮",
        href: 'javascript:;',
        style: {
          width: 100,
          height: 50,
          top: 200,
          left: 200,
          rotate: 0,
          borderRadius: 0,
          borderStyle: "solid",
          borderColor: "#000",
          borderWidth: 2,
          backgroundColor: "#fff",
          backgroundImg: "",
        },
      },
      //创建表单
      {
        class: "input",
        tip: "请输入……",
        type: "text",
        content: '',//内容
        style: {
          width: 300,
          top: 200,
          left: 200,
          height: 50,
          rotate: 0,
          borderRadius: 2,
          borderStyle: "solid",
          borderColor: "#000",
          borderWidth: 2,
          backgroundColor: "#fff",
          backgroundImg: "",
        },
      },
    ];

    // 创建图片
    /*const newPic = () => {
      let image = "";
      let reader = new FileReader();
      reader.readAsDataURL(inputObj.files[0]);
      reader.onload = () => {
        console.log(reader.result);
      };
    };
    const selectImage = (file) => {
      if (!file.files || !file.files[0]) {
        return;
      }
      var reader = new FileReader();
      reader.onload = function (evt) {
        image = evt.target.result;
        console.log(1);
      };
      reader.readAsDataURL(file.files[0]);
    };*/
    return {
      newSomething,
      list,
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

    .imgInput {
      display: none;
    }
  }
}
</style>