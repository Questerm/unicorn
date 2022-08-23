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
import snapshot from '@/store/snapshot'
import { deepCopy } from '@/hooks/deepCopy'
// import { storeToRefs } from 'pinia'

export default {
	name: 'Home',
	components: { Header, ComponentList, Operation, Setting, EditorPlate },
	setup() {
		const route = useRoute()
		const useSnapshot = snapshot()
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
			getSaveByName();
			console.log('初始化')
			useSnapshot.snapshotIndex = -1;
			useSnapshot.snapshotData = [];
			useSnapshot.snapshotData[++useSnapshot.snapshotIndex] = deepCopy(
				useElStore.els
			)
			// useSnapshot.snapshotData[++useSnapshot.snapshotIndex] = deepCopy(
			// 	useElStore.els
			// )
			useElStore.elsIdx[0] = -1;
			useElStore.elsIdx[1] = -1;
			useElStore.editorScroll = 0;
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
	width: 100%;
	height: 100%;
	background-color: #eeecf0;
	// background-size: cover;
}
.main {
	display: flex;
	justify-content: center;
	padding: 0 15px;
	overflow: hidden;
	.left {
		// position: fixed;
		// top: 0px;
		// left: 15px;
		margin-top: 65px;
		padding-left: 0;
		width: 290px;
		height: 673px;
		background-color: #fff;
		border-radius: 6px;
		overflow: hidden;

	}
	.middle {
		// flex:1;
		margin: 0 20px;
		margin-top: 65px;
		width: 876px;
		height: 673px;
		border-radius: 6px;
		background-color: #fff;
		.writeBox {
			width: 100%;
			height: calc(100% - 61px);
			overflow-y: scroll;
			&::-webkit-scrollbar {
				width: 10px;
				height: 10px;
			}

			&::-webkit-scrollbar-thumb {
				background-color: #c5c8c7;
				border-radius: 32px;
			}
			
			&::-webkit-scrollbar-track {
				background-color: #f3f3f3;
				border-radius: 32px;
			}	
		}
	}
	.right {
		// position: fixed;
		// top: 0px;
		// right: 15px;
		margin-top: 65px;
		padding-right: 0;
		padding-bottom: 30px;
		width: 290px;
		height: 673px;
		background-color: #fff;
		border-radius: 6px;
		overflow: hidden;
		overflow-y: auto;
		&::-webkit-scrollbar {
				width: 10px;
				height: 10px;
			}

			&::-webkit-scrollbar-thumb {
				background-color: #c5c8c7;
				border-radius: 32px;
			}
			
			&::-webkit-scrollbar-track {
				background-color: #f3f3f3;
				border-radius: 32px;
			}	
	}
}
</style>
