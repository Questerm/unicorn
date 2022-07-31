<template>
  <div class="operation">
    <div class="o-left">
        <img src="../assets/left.png" alt="撤销">
        <span>撤销</span>
    </div>
    <div class="text-alignment">
        <div v-for="item in AlignList" :key="item.id" class="item">
            <img :src=" item.img " :alt="item.title" class="item-img">
            <p> {{ item.title }} </p>
        </div>
    </div>
    <div class="o-right">
        <span>重做</span>
        <img src="../assets/right.png" alt="重做">
    </div>
  </div>
</template>

<script>
export default {
    name: 'Operation',
    data() {
        return {
            AlignList: [
                { id: 1, title: '居左对齐', img: require('../assets/' + 'align-left.png') },
                { id: 2, title: '居中对齐', img: require('../assets/' + 'align-center.png') },
                { id: 3, title: '居中对齐', img: require('../assets/' + 'align-right.png') },
                { id: 4, title: '两端对齐', img: require('../assets/' + 'full-justified.png') },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .operation {
        border-bottom: 1px solid rgb(211, 209, 209);
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;
        .o-left,
        .o-right {
            cursor: pointer;
            img {
            width: 40px;
            height: 40px;
            margin-right: 10px;
            vertical-align: middle
            }
            span {
                font-size: 16px;
                line-height: 40px;
                font-weight: 700;
                vertical-align: middle
            }
        }
        .o-right {
            img {
            margin-right: 0;
            margin-left: 10px;
            }
        }
        .text-alignment {
            display: flex;
            cursor: pointer;
            .item {
                width: 90px;
                height: 40px;
                display: flex;
                flex-direction: column;
                align-items: center;
                .item-img {
                    width: 25px;
                    height: 25px;
                }
                p {
                    margin-top: 3px;
                    font-size: 12px;
                }
            }
        }
    }
</style>