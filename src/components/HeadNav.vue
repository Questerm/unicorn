<template>
	<div class="headNav">
		<div class="headLeft">
			<div class="headName">Unicorn</div>
			<div class="navItem" @click="toGuide">
				<video-camera-outlined
					class="headIcon"
					:style="{ fontSize: '30px', color: 'rgb(84, 147, 199)' }"
				/>
				新手引导
			</div>
			<div class="navItem" @click="toUserPage">
				<project-outlined
					class="headIcon"
					:style="{ fontSize: '30px', color: 'rgb(178, 224, 98)' }"
				/>
				个人中心
			</div>
		</div>
		<div class="headRight">
			<div class="avator">
				<user-outlined />
			</div>
			<div class="toLogin" @click="toLogin">登录 / 注册</div>
		</div>
	</div>
</template>

<script>
import {
	VideoCameraOutlined,
	ProjectOutlined,
	UserOutlined,
} from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

export default {
	components: { VideoCameraOutlined, ProjectOutlined, UserOutlined },
	setup() {
		//路由
		const router = useRouter()
		//跳转引导页
		const toGuide = () => {
			router.push('/guide')
		}
		//跳转个人中心
		const toUserPage = () => {
			router.push('/userPage')
		}
		//跳转登录注册
		const toLogin = () => {
			router.push('/login')
		}

		return { toGuide, toUserPage, toLogin }
	},
}
</script>

<style lang="less" scoped>
.headNav {
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	box-shadow: 0 3px 6px 1px #4d688829;
	opacity: 0.9;
	.headLeft {
		display: flex;
		margin-left: 140px;
		justify-content: center;
		align-items: center;
		.headName {
			font-size: 30px;
			font-family: Book Antiqua;
			color: rgb(127, 180, 209);
			margin-right: 80px;
		}
		.navItem {
			margin-left: 80px;
			font-size: 20px;
			font-family: Microsoft YaHei-Bold, Microsoft YaHei;
			font-weight: 700;
			color: #333;
			white-space: nowrap;
			align-items: center;
			position: relative;
			cursor: pointer;
			.headIcon {
				position: absolute;
				left: -40px;
			}
		}
	}
	.headRight {
		display: flex;
		margin-right: 80px;
		justify-content: center;
		align-items: center;
		font-size: 17px;
		.toLogin {
			margin-left: 10px;
			cursor: pointer;
		}
	}
}
</style>
