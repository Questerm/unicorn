<template>
  <!-- <div class="ant-btns">
    <a-button ref="addBtn">添加动画</a-button>
    <a-button ref="lookBtn">预览动画</a-button>
  </div> -->
  <div class="anift">
    <div v-for="item in list" :key="item.id" class="ani" @click="clickAnimation(item.title)">
        <p class="itemP">{{item.title}}</p>
    </div>
    <div class="cancleAni" @click="cancleAnimation">取消动画</div>
  </div>
</template>

<script>
import elStore from '@/store/elStore.js';

export default {
  name: 'Animation',
    setup() { 
        let useElStore = elStore();
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
                if (useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class.match(/animation1/) == null) {
                    useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class += ' animation1';
                } else {
                    let reg = new RegExp(/ animation1/);
                    useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class=useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class.replace(reg, '');
                }
                break;
            case '缩小':
                if (useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class.match(/animation2/) == null) {
                    useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class += ' animation2';
                } else {
                    let reg = new RegExp(/ animation2/);
                    useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class=useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class.replace(reg, '');
                }
                break;
            case '抖动':
                if (useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class.match(/animation3/) == null) {
                    useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class += ' animation3';
                } else {
                    let reg = new RegExp(/ animation3/);
                    useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class=useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class.replace(reg, '');
                }
                break;
            case '上下移动':
                if (useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class.match(/animation4/) == null) {
                    useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class += ' animation4';
                } else {
                    let reg = new RegExp(/ animation4/);
                    useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class=useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class.replace(reg, '');
                }
                break;
            case '左右移动':
                if (useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class.match(/animation5/) == null) {
                    useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class += ' animation5';
                } else {
                    let reg = new RegExp(/ animation5/);
                    useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class=useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class.replace(reg, '');
                }
                break;
        }
        }
        // 取消动画
        const cancleAnimation = () => {
            let reg1 = new RegExp(/ animation1/);
            let reg2 = new RegExp(/ animation2/);
            let reg3 = new RegExp(/ animation3/);
            let reg4 = new RegExp(/ animation4/);
            let reg5 = new RegExp(/ animation5/);
            useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class = useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class.replace(reg1, '');

            useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class = useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class.replace(reg2, '');

            useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class = useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class.replace(reg3, '');

            useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class = useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class.replace(reg4, '');

            useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class = useElStore.els[useElStore.elsIdx[0]][useElStore.elsIdx[1]].class.replace(reg5, '');
    }
    return {
        list,
        clickAnimation,
        cancleAnimation
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
    .anift{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        flex-direction:row;
        font-size: 16px;
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
        .cancleAni{
            position: absolute;
            bottom: 20px;
            width: 200px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background-color: rgb(232, 58, 58);
            color: #fff;
            border-radius: 8px;
            cursor: pointer;
        }
    }
</style>