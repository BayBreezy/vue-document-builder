<script>
	import Vue from "vue";
	import VueDocumentBuilder from "@/vue-document-builder.vue";
	import blks from "./blocks/blocks";
	import obBlks from "./blocks/onboarder-block";
	import commonBlks from "./blocks/common-blocks";

	// Components used to style the content before adding it to the list of blocks
	import Company from "./components/Header/Company.vue";
	export default Vue.extend({
		name: "ServeDev",
		data: () => ({
			blocks: [],
			options: {
				width: "auto",
				height: "100vh",
				fontFamily: "'Roboto', sans-serif",
				fontSize: "14px",
				margin: {
					top: "1.5cm",
					right: "1.5cm",
					bottom: "1.5cm",
					left: "1.5cm",
				},
				showOffsets: 1,
				fromElement: true,
				storageManager: false,
				plugins: ["gjs-preset-document-creator"],
				deviceManager: {
					default: "tablet",
					devices: [
						{
							id: "tablet",
							name: "Tablet",
							width: "992px",
							widthMedia: "992px",
						},
					],
				},
			},
		}),
		components: {
			VueDocumentBuilder,
			Company,
		},
		mounted() {
			this.blocks = [...blks, ...obBlks, ...commonBlks];
		},
		methods: {
			async onSave(htmlcss) {
				console.log(htmlcss);
			},
		},
	});
</script>

<template>
	<div id="app">
		<vue-document-builder :blocks="blocks" @save="onSave" />
	</div>
</template>
<style>
	#app {
		height: 100vh;
	}
	body {
		margin: 0px;
	}
</style>
