<template>
  <div class="ant-btns">
    <a-button>添加动画</a-button>
    <a-button>预览动画</a-button>
  </div>
</template>

<script>
export default {
    name: 'Animation'
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
</style>