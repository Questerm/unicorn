<template>
  <div class="editorPlate" ref="editorPlate" @mousedown="changeRectShow">
    <!-- 矩形 -->
    <div
      v-for="(p, index) of els[0]"
      :key="p.id"
      :class="p.class"
      :style="{
        ...styleFormat({ ...p.style }),
      }"
      @mousedown.stop="move($event, p, [0, index])"
    ></div>
    <!-- 文本 -->
    <div
      v-for="(p, index) of els[1]"
      :key="p.id"
      :class="p.class"
      :style="{
        ...styleFormat({ ...p.style }),
      }"
      :contenteditable="p.isEditable"
      @mousedown.stop="move($event, p, [1, index])"
      @input="changeText($event, p)"
    >
      {{ p.content }}
    </div>
    <!-- 图片 -->
    <!-- <img src="" alt=""> -->
    <img 
      v-for="(p,index) of els[2]"
      :key="p.id"
      :class="p.class"
      :src="p.url"
      :style="{
        ...styleFormat({...p.style})
      }"
      @mousedown.stop="move($event,p,[2,index])">
    <!-- 按钮 -->
    <button
      v-for="(p, index) of els[3]"
      :key="p.id"
      :class="p.class"
      :style="{
        ...styleFormat({ ...p.style }, 'btn'),
      }"
      @mousedown.stop="move($event, p, [3, index])"
    >
      <a :href="p.href">{{ p.content }}</a>
    </button>
    <!-- 表单 -->
      <input
      v-for="(p, index) of els[4]"
      :key="p.id"
      :class="p.class"
      :style="{
        ...styleFormat({ ...p.style }),
      }"
      @mousedown.stop="move($event, p, [4, index])"
        :type="p.type"
        v-model="p.content"
        :placeholder="p.tip"
      />
    <!-- 矩形选择框 -->
    <div
      class="rect"
      ref="rect"
      @mousedown.stop="changeSize"
      v-show="rectIsShow"
    >
      <span class="l"></span>
      <span class="b"></span>
      <span class="t"></span>
      <span class="r"></span>
      <span class="lt"></span>
      <span class="lb"></span>
      <span class="rb"></span>
      <span class="rt"></span>
      <span class="rotate" @mousedown.stop="changeRotate"></span>
    </div>
    <!-- 辅助线 -->
    <div
      class="subline"
      v-for="p of sublines"
      :key="p.id"
      :style="{
        left: p.left + 'px',
        top: p.top + 'px',
        width: p.width + 'px',
        height: p.height + 'px',
      }"
    ></div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import UseMove from "../hooks/UseMove";
import UseChangeSize from "../hooks/UseChangeSize";
import UseRotate from "../hooks/UseRotate";
import elStore from "@/store/elStore.js";
export default {
  name: "EditorPlate",
  setup() {
    const useElStore = elStore();
    const editorPlate = ref(null);
    const rect = ref(null);

    //选择矩形框现在的位置
    let elsIdx = useElStore.elsIdx;
    //获取store里面的el
    let els = useElStore.els;
    //矩形选择框是否出现
    let rectIsShow = ref(false);

    //辅助线属性数组
    let sublines = reactive([]);

    //改变大小
    function changeSize(e) {
      e.preventDefault();
      UseChangeSize(
        e,
        els[elsIdx[0]][elsIdx[1]],
        editorPlate.value,
        rect.value,
        elsIdx[1]
      );
    }

    // 定时器 为了判断是双击还是单击
    let timer = null;
    let num = 0;

    //移动代码
    function move(e, p, idx) {
      if (p.class == "img") {
        e.preventDefault();
      }
      num++;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        num = 0;
      }, 300);

      if (
        elsIdx[0] != undefined &&
        { ...p }.toString() != { ...els[elsIdx[0]][elsIdx[1]] }.toString()
      ) {
        if (els[elsIdx[0]][0].class == "text")
          els[elsIdx[0]][elsIdx[1]].isEditable = false;
        num = 0;
      }
      elsIdx[0] = idx[0];
      elsIdx[1] = idx[1];
      useElStore.elsIdx = elsIdx;

      if (p.class == "text" && num >= 2) {
        p.isEditable = true;
        clearTimeout(timer);
      } else
        UseMove(
          e,
          p,
          editorPlate.value,
          rect.value,
          rectIsShow,
          els,
          elsIdx,
          sublines
        );
    }

    //改变文本时也改变内容 改变矩形选择框高度
    function changeText(e, p) {
      e.preventDefault();
      p.content = e.target.innerHTML;
      rect.value.style.height = e.target.offsetHeight + "px";
    }

    //旋转
    function changeRotate(e) {
      e.preventDefault();
      UseRotate(els[elsIdx[0]][elsIdx[1]], rect.value, editorPlate.value);
    }

    //改变矩形选择框展示状态
    function changeRectShow() {
      num = 0;
      if (elsIdx[0] != undefined && els[elsIdx[0]][0].class == "text")
        els[elsIdx[0]][elsIdx[1]].isEditable = false;
      rectIsShow.value = false;
    }

    //样式格式化
    function styleFormat(obj, type) {
      for (let key in obj) {
        if (typeof obj[key] == "number" && key != "rotate")
          obj[key] = obj[key].toString() + "px";
      }
      obj.transform = `rotate(${obj.rotate}deg)`;
      delete obj.rotate;
      if (type == "btn") obj.lineHeight = obj.height;
      return obj;
    }

    return {
      editorPlate,
      rect,
      rectIsShow,
      move,
      els,
      changeText,
      changeSize,
      changeRotate,
      sublines,
      changeRectShow,
      styleFormat,
    };
  },
};
</script>

<style lang="less" scoped>
.editorPlate {
  position: relative;
  width: 100%;
  height: calc(100% - 61px);
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.4);
  div {
    position: absolute;
    width: 100px;
    word-wrap: break-word;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  a {
    pointer-events: none;
    color: #333;
  }
  input,button {
    position: absolute;
    box-sizing: border-box;
  }
  img{
    position: absolute;
  }
  .button {
    text-align: center;
  }
  .el {
    top: 40px;
    left: 200px;
    height: 100px;
    background-color: pink;
  }
  .text {
    padding: 10px;
    box-sizing: border-box;
  }
  .rect {
    position: absolute;
    width: 100px;
    height: 100px;
    border: 1px solid #65a6fa;
    box-sizing: border-box;
    /* 点击上层元素可以穿透 触发下层元素 */
    pointer-events: none;
    span {
      position: absolute;
      display: inline-block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.2);
      background-color: #fff;
      pointer-events: auto;
    }
    span:nth-of-type(-n + 4) {
      width: 12px;
      height: 12px;
      border-radius: 0;
      cursor: default;
    }
    .l {
      top: 50%;
      left: -7px;
      transform: translateY(-50%);
      cursor: w-resize;
    }
    .r {
      top: 50%;
      right: -7px;
      transform: translateY(-50%);
      cursor: e-resize;
    }
    .t {
      top: -7px;
      left: 50%;
      transform: translateX(-50%);
      cursor: n-resize;
    }
    .b {
      bottom: -7px;
      left: 50%;
      transform: translateX(-50%);
      cursor: s-resize;
    }

    .lt {
      top: -7px;
      left: -7px;
      cursor: nw-resize;
    }

    .lb {
      bottom: -7px;
      left: -7px;
      cursor: sw-resize;
    }

    .rt {
      top: -7px;
      right: -7px;
      cursor: ne-resize;
    }

    .rb {
      bottom: -7px;
      right: -7px;
      cursor: se-resize;
    }

    .rotate {
      width: 25px;
      height: 25px;
      left: 50%;
      transform: translateX(-50%);
      bottom: -50px;
      border: none;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      background: #fff url(~@/assets/rotate.svg) no-repeat center center;
      background-size: 16px 16px;
    }
  }
  .subline {
    position: absolute;
    background-color: #fb5127;
  }
}
</style>