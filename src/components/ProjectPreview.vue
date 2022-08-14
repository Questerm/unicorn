<template>
	<div class="projectPreview">
		<!-- 矩形 -->
		<div
			v-for="p of els[0]"
			:key="p.id"
			:class="p.class"
			:style="{
				...styleFormat({ ...p.style }),
			}"
		></div>
		<!-- 文本 -->
		<div
			v-for="p of els[1]"
			:key="p.id"
			:class="p.class"
			:style="{
				...styleFormat({ ...p.style }),
			}"
		>
			{{ p.content }}
		</div>
		<!-- 图片 -->
		<!-- <img src="" alt=""> -->
		<img
			v-for="p of els[2]"
			:key="p.id"
			:class="p.class"
			:src="p.url"
			:style="{
				...styleFormat({ ...p.style }),
			}"
		/>
		<!-- 按钮 -->
		<button
			v-for="p of els[3]"
			:key="p.id"
			:class="p.class"
			:style="{
				...styleFormat({ ...p.style }, 'btn'),
			}"
		>
			<a :href="p.href">{{ p.content }}</a>
		</button>
		<!-- 表单 -->
		<input
			v-for="p of els[4]"
			:key="p.id"
			:class="p.class"
			:style="{
				...styleFormat({ ...p.style }),
			}"
			:type="p.type"
			v-model="p.content"
			:placeholder="p.tip"
		/>
	</div>
</template>

<script>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import elStore from '@/store/elStore'

export default {
	setup() {
		//路由
		const route = useRoute()

		//pinia数据
		const useElStore = elStore()

		let els = useElStore.els

		function styleFormat(obj, type) {
			for (let key in obj) {
				if (typeof obj[key] == 'number' && key != 'rotate')
					obj[key] = obj[key].toString() + 'px'
			}
			obj.transform = `rotate(${obj.rotate}deg)`
			delete obj.rotate
			if (type == 'btn') obj.lineHeight = obj.height
			return obj
		}

		onMounted(() => {
			console.log(useElStore)
			console.log(route.params)
		})

		return { els, styleFormat }
	},
}
</script>

<style lang="less" scoped>
.projectPreview {
	position: relative;
	width: 100%;
	height: 100%;
	div {
		position: absolute;
		width: 100px;
		word-wrap: break-word;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	input,
	button {
		position: absolute;
		box-sizing: border-box;
	}
	img {
		position: absolute;
	}
}
</style>
