<template>
      <div v-for=" item in AttriList " :key="item.id" :class="item.entitle">
        <span>{{ item.title }}：</span>
        <a-input-number id="inputNumber" v-model:value="item.valueName.value" class="input"/>
        <span>px</span>
      </div>
      <div class="rotating">
          <span>旋转：</span><br/>
          <div class="rotating-info">
            <div class="fangxiang">
              <span>方向：</span>
              <a-space>
                  <a-select
                    ref="select"
                    v-model:value="value1"
                  >
                    <a-select-option value="right">向右</a-select-option>
                    <a-select-option value="left">向左</a-select-option>
                  </a-select>  
              </a-space>
            </div>
            <div class="jiaodu">
              <span>角度：</span>
              <a-input-number id="inputNumber" v-model:value="valueRadius" placeholder="请输入角度" class="input"/>
            </div>
          </div>
        </div>
      <div class="background">
        <span>背景：&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>颜色</span><a-switch v-model:checked="checked1" class="switch"/><span>图片</span>
        <div class="color-select">
             <input type="color" v-if="!checked1"/>
             <a-upload v-if="checked1"
                    v-model:file-list="fileList"
                    name="file"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    :headers="headers"
                    @change="handleChange"
                    >
                    <a-button>
                    <upload-outlined></upload-outlined>
                    点击上传
                    </a-button>
             </a-upload>
        </div>
        <div class="border">
          <a-checkbox v-model:checked="checked2" class="a-checkbox"></a-checkbox>
          <span>边框：</span><br/>
          <div class="border-info">
            <div class="cuxi">
              <span>粗细：</span>
              <a-input-number id="inputNumber" v-model:value="valueBorder" class="input"/>
              <span>px</span><br/>
            </div>
            <div class="yanse">
              <span>颜色：</span>
              <input type="color" class="color"/>
            </div>
            <div class="fengge">
              <span>风格：</span>
              <a-space class="select">
                  <a-select
                    ref="select"
                    v-model:value="value2"
                    class="select"
                  >
                    <a-select-option value="solid" selected>实线</a-select-option>
                    <a-select-option value="dotted">点线</a-select-option>
                    <a-select-option value="dashed">破折线</a-select-option>
                     <a-select-option value="double ">双线</a-select-option>
                  </a-select>  
              </a-space>
            </div>
          </div>
        </div>
      </div>
</template>

<script lang="ts">
import { message } from 'ant-design-vue';
import { UploadOutlined } from '@ant-design/icons-vue';
import type { UploadChangeParam } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import type { SelectProps } from 'ant-design-vue';

export default defineComponent({
  components: {
    UploadOutlined
  },
  setup() {
    //选择
    const checked1 = ref<boolean>(false);
    const checked2 = ref<boolean>(false);
    //上传文件
    const handleChange = (info: UploadChangeParam) => {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    };
    const fileList = ref([]);

    //多选框
    const options1 = ref<SelectProps['options']>([
      {
        value: 'right',
        label: 'right',
      },
      {
        value: 'left',
        label: 'left',
      },
    ]);

    //data
    const valueWidth = ref<number>(0);
    const valueHeight = ref<number>(0);
    const valueRadius = ref<number>(0);
    const valueXposition = ref<number>(0);
    const valueYposition = ref<number>(0);

    const valueBorder = ref<number>(0);

    const AttriList = [
      { id: 1,  title: '宽度', entitle: 'width', valueName: valueWidth},
      { id: 2,  title: '高度', entitle: 'height', valueName: valueHeight},
      { id: 3,  title: '弧度', entitle: 'radius', valueName: valueRadius},
      { id: 4,  title: 'x坐标', entitle: 'xposition', valueName: valueXposition},
      { id: 5,  title: 'y坐标', entitle: 'yposition', valueName: valueYposition}
    ]

    return {
      checked1,
      checked2,
      fileList,
      headers: {
        authorization: 'authorization-text',
      },
      handleChange,
      value1: ref('向右'),
      value2: ref('实线'),
      options1,
      valueWidth,
      valueHeight,
      valueRadius,
      valueXposition,
      valueYposition,
      AttriList,
      valueBorder
    };
  },
});
</script>

<style lang="less">
    .attribute {
      text-align: center;
      .width,
      .height,
      .radius,
      .xposition,
      .yposition {
        margin-top: 30px;
        span {
          font-size: 14px;
        }
        .input {
          width: 156px;
          height: 32px;
          border: 1px solid rgb(199, 199, 199);
          outline: none;
          margin: 0 10px;
          padding-left: 10px;
          border-radius: 4px;
          font-size: 14px;
        }
      }
      .rotating {
        margin-top: 30px;
        >span {
          display: inline-block;
          margin-right: 185px;
        }
        .input {
          width: 105px;
          height: 32px;
          text-align: center;
          margin: 0 15px;
          padding-left: 5px;
          border-radius: 4px;
          margin-top: 15px;
        }
        .rotating-info {
          margin-top: 15px;
          .fangxiang {
            margin-top: 15px;
            text-align: left;
            padding-left: 50px;
            .ant-space {
              width: 105px;
              border-radius: 4px;
              margin-left: 14px;
            }
          }
          .jiaodu {
            text-align: left;
            padding-left: 50px;
          }
        }
      }
      .background {
        margin-top: 30px;
        padding: 0 28px;
        text-align: left;
            span {
                text-align: left;
            }
            .switch {
                margin: 0 10px;
            }
            .color-select {
              text-align: center;
                input {
                  width: 35px;
                  height: 35px;
                  margin-top: 15px;
                }
                .ant-btn {
                    margin-top: 24px;
                    margin-left: 28px;
                }
            }
      }
      .border {
        margin-top: 30px;
        .a-checkbox {
          margin-right: 15px;
        }
        .input {
          width: 105px;
          height: 32px;
          text-align: center;
          margin: 0 15px;
          padding-left: 5px;
          border-radius: 4px;
          margin-top: 15px;
        }
        .border-info {
          margin-top: 15px;
          .cuxi,
          .yanse {
            padding-left: 20px;
            .select {
              width: 15px;
            }
            .color {
              width: 25px;
              height: 25px;
              margin-top: 15px;
              margin-left: 15px;
            }
          }
          .fengge {
            margin-top: 15px;
            padding-left: 20px;
            .ant-space {
              width: 105px;
              margin-left: 15px;
            }
          }
        }
      }
    }
</style>