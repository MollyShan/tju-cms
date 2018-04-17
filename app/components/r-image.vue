<template>

<div class="image-loader" style="height: 100%">
	<img :src="src"
		alt=""
		class="img-responsive">
</div>
</template>

<script>
const heightPattern = {
	'16:9'(width) {
		return width / 16 * 9;
	},
	'4:3'(width) {
		return width / 4 * 3;
	}
}
export default {
	name: 'image-processor',
	props: ['src', 'pattern'],
	mounted() {
		if (!this.pattern) {
			return;
		}

		this.widthWatcher = setInterval(() => {
			if (this.offsetWidth === this.$el.offsetWidth) {
				return;
			}

			const element = this.$el;
			const newWidth = this.offsetWidth = element.offsetWidth;

			const height =
				parseInt(heightPattern[this.pattern](newWidth));

			element.style.height = `${height}px`;
		}, 50);
	},
	beforeDestroy() {
		clearInterval(this.widthWatcher);
	}
}
</script>

<style lang="less">
.image-loader {
	position: relative;
	overflow: hidden;
	background-color: black;

	> .img-responsive {
		min-height: 100%;
		min-width: 100%;
		// max-width: 100%;
		height: 100%;
		transform: translate(-50%, -50%);
		position: absolute;
		top: 50%;
		left: 50%;
	}
}
</style>
