<template>
	<div class="container">
		<!-- 头部部分 -->
		<Header></Header>
		<!-- 主体部分 -->
		<div class="main">
			<!-- 左侧组件部分 -->
			<div class="left">
				<Component-list></Component-list>
			</div>
			<!-- 中间画布部分 -->
			<div class="middle">
				<Operation></Operation>
				<div class="writeBox" @scroll="scroll">
					<EditorPlate></EditorPlate>
				</div>
			</div>
			<!-- 右边组件部分 -->
			<div class="right">
				<Setting></Setting>
			</div>
		</div>
	</div>
</template>

<script>
import Header from '../components/Header.vue'
import ComponentList from '../components/ComponentList.vue'
import Operation from '../components/Operation.vue'
import Setting from '../components/Setting.vue'
import EditorPlate from '../components/EditorPlate.vue'
import elStore from '@/store/elStore.js'
import { onBeforeUnmount, onMounted, provide, ref } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { getRecentlySave } from '@/api'
import userStore from '@/store/userStore'
// import { storeToRefs } from 'pinia'

export default {
	name: 'Home',
	components: { Header, ComponentList, Operation, Setting, EditorPlate },
	setup() {
		const route = useRoute()

		// 防抖
		function debounce(fn, wait) {
			let timeoutID = null
			let flag = true
			return function (e) {
				if (timeoutID != null && flag) clearTimeout(timeoutID)
				timeoutID = setTimeout(fn, wait, e, flag)
			}
		}
		const scrollHandle = (e) => {
			useElStore.editorScroll = e.target.scrollLeft
			console.log(e.target.scrollLeft)
		}
		const scroll = debounce(scrollHandle, 1000)

		const useElStore = elStore()
		const uStore = userStore()
		//获取保存模板数据
		const productName = ref(route.params.productName)
		provide('productName', productName)
		const getSaveByName = async () => {
			const { data } = await getRecentlySave(
				uStore.username,
				route.params.productName
			)
			console.log(data)
		}

		onMounted(() => {
			getSaveByName()
		})

		onBeforeUnmount(() => {
			useElStore.updataEls(Array.from(new Array(5), () => []))
		})

		return { scroll }
	},
}
</script>

<style lang="less" scoped>
* {
	margin: 0;
	padding: 0;
}
.container {
	height: 753px;
	background-color: #eeecf0;
	background-size: cover;
}
.main {
	display: flex;
	justify-content: center;
	padding: 0 15px;
	overflow: hidden;
	.left {
		position: fixed;
		top: 0px;
		left: 15px;
		margin-top: 65px;
		width: 290px;
		height: 673px;
		background-color: #fff;
		border-radius: 6px;
		overflow: hidden;
	}
	.middle {
		margin-top: 65px;
		width: 876px;
		height: 673px;
		border-radius: 6px;
		background-color: #fff;
		.writeBox {
			width: 100%;
			height: calc(100% - 61px);
			overflow-y: scroll;
		}
	}
	.right {
		position: fixed;
		top: 0px;
		right: 15px;
		margin-top: 65px;
		padding-bottom: 30px;
		width: 290px;
		height: 673px;
		background-color: #fff;
		border-radius: 6px;
		overflow: hidden;
		overflow-y: auto;
	}
}
</style>
