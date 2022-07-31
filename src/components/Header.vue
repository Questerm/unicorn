<template>
    <header class="nav">
        <a href="#" class="hd-logo">
            <img src="../assets/logo.png" alt="logo">
        </a>
        <div class="hd-btns">
            <a-button class="btn">保存</a-button>
            <a-button class="btn">预览</a-button>
            <a-button class="btn">发布</a-button>
        </div>
        <div class="hd-user">
            <div class="user-img"></div>
            <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent>
            Quester
            <DownOutlined />
            </a>
            <template #overlay>
            <a-menu>
                <a-menu-item>
                <a href="javascript:;">我的模板</a>
                </a-menu-item>
                <a-menu-item>
                <a href="javascript:;">首页</a>
                </a-menu-item>
            </a-menu>
            </template>
            </a-dropdown>
        </div>
    </header>
</template>


<script>
    import { defineComponent } from 'vue';
    import { DownOutlined } from '@ant-design/icons-vue';
    export default defineComponent({
        name: 'Header',
        components: {
            DownOutlined,
        },
    });
</script>

<style lang="less" scoped>
    .nav {
        display: flex;
        width: 100%;
        height: 50px;
        padding: 0 20px;
        background: linear-gradient(to right, #80D3DF, #A97DDB);
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
        justify-content: space-between;
        align-items: center;
        .hd-logo {
            display: block;
            width: 100px;
            height: 30px;
            background-color: aquamarine;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .hd-btns {
            .btn {
                margin: 0 20px;
                border: none;
                background-color: #fff;
                font-size: 14px;
                box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2);
            }
        }
        .hd-user {
            display: flex;
            align-items: center;
            .user-img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: antiquewhite;
                margin-right: 10px;
            }
            .ant-dropdown-link {
                color: #000;
            }
        }
    }
</style>