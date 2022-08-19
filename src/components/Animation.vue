<template>
  <!-- <div class="ant-btns">
    <a-button ref="addBtn">添加动画</a-button>
    <a-button ref="lookBtn">预览动画</a-button>
  </div> -->
  <div class="anift">
    <div v-for="item in list" :key="item.id" class="ani" @click="clickAnimation(item.title)">
        <p class="itemP">{{item.title}}</p>
    </div>
  </div>
</template>

<script>
import { toggleClassName } from '@/hooks/AnimationAttr';
import elStore from '@/store/elStore.js';
// import snapshot from '@/store/snapshot.js';

export default {
  name: 'Animation',
    setup() { 
    let useElStore = elStore()
        // let useSnapshot = snapshot();
        // let els = useElStore.els;
        // let elsIdx = useElStore.elsIdx;
    // 动画列表
    const list = [
      {id:1,title:'放大'},
      {id:2,title:'缩小'},
      {id:3,title:'抖动'},
      {id:4,title:'上下移动'},
      {id:5,title:'左右移动'}
    ];
        const clickAnimation = (title) => {
        switch (title){
            case '放大':
                toggleClassName(document.querySelectorAll('.editorPlate .'+useElStore.els[useElStore.elsIdx[0]][0].class)[useElStore.elsIdx[1]], 'animation1');   
                console.log(1);
                break;
            case '缩小':
                toggleClassName(document.querySelectorAll('.editorPlate .'+useElStore.els[useElStore.elsIdx[0]][0].class)[useElStore.elsIdx[1]], 'animation2');
                console.log(2);
                break;
            case '抖动':
                toggleClassName(document.querySelectorAll('.editorPlate .'+useElStore.els[useElStore.elsIdx[0]][0].class)[useElStore.elsIdx[1]], 'animation3');
                console.log(3);
                break;
            case '上下移动':
                toggleClassName(document.querySelectorAll('.editorPlate .'+useElStore.els[useElStore.elsIdx[0]][0].class)[useElStore.elsIdx[1]], 'animation4');
                console.log(4);
                break;
            case '左右移动':
                toggleClassName(document.querySelectorAll('.editorPlate .'+useElStore.els[useElStore.elsIdx[0]][0].class)[useElStore.elsIdx[1]], 'animation5');
                console.log(5);
                break;
        }
    }
    return {
        list,
      clickAnimation
    }
  }
}
</script>

<style lang="less">
    .ant-btns {
        text-align: center;
        margin-top: 20px;
        .ant-btn:nth-child(1) {
            margin-right: 20px;
        }
    }
    // .ani{
    //   width: 120px;
    //   height: 50px;
    //   line-height: 50px;
    //   box-sizing: border-box;
    //   border: 1px solid #000;
    //   margin: 0 auto;
    //   margin-bottom: 40px;
    //   margin-top: 40px;
    //   letter-spacing: 2px;
    //   border-radius: 10px;
    //   .itemP{
    //     display: inline-block;
    //     width: 120px;
    //     text-align: center;
    //     font-size: 16px;
    //   }
    // }
    .anift{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        flex-direction:row;
        .ani{
            width: 120px;
            height: 50px;
            margin: 20px 0px;
            line-height: 50px;
            border:1px solid #000;
            text-align: center;
            border-radius: 8px;
            background-color: rgb(74, 157, 235);
            color: aliceblue;
            cursor: pointer;
        }
    }
    /* 放大 */
        
        .animation1 {
            animation: animation1 1s ease-in-out infinite;
        }
        /* 缩小 */
        
        .animation2 {
            animation: animation2 1s ease-in-out infinite;
        }
        /* 左右摆动 */
        
        .animation3 {
            animation: animation3 1s ease-in-out infinite;
        }
        /* 上下移动 */
        
        .animation4 {
            animation: animation4 1s ease infinite;
        }
        /* 左右移动 */
        
        .animation5 {
            animation: animation5 1s ease infinite;
        }
        /* 不断放大 */
        
        @keyframes animation1 {
            0% {}
            50% {
                transform: scale(1.5);
            }
            100% {
                transform: scale(1);
            }
        }
        /* 不断缩小 */
        
        @keyframes animation2 {
            0% {}
            50% {
                transform: scale(0.5);
            }
            100% {
                transform: scale(1);
            }
        }
        /* 左右摆动 */
        
        @keyframes animation3 {
            0% {}
            25% {
                transform: rotate(25deg);
            }
            50% {
                transform: rotate(0deg);
            }
            75% {
                transform: rotate(-25deg);
            }
            100% {
                transform: rotate(0deg);
            }
        }
        /* 上下移动 */
        
        @keyframes animation4 {
            0% {}
            25% {
                transform: translateY(20px);
            }
            50% {
                transform: translateY(0px);
            }
            75% {
                transform: translateY(-20px);
            }
            100% {
                transform: translateY(0px);
            }
        }
        /* 左右移动 */
        
        @keyframes animation5 {
            0% {}
            25% {
                transform: translateX(20px);
            }
            50% {
                transform: translateX(0px);
            }
            75% {
                transform: translateX(-20px);
            }
            100% {
                transform: translateX(0px);
            }
        }
</style>