<template>

<div>

	<div id="home-banner">
		<img src="/images/banner.jpg"
			alt=""
			class="img-fluid"
			id="banner-img">
		<div class=""
			id="banner-title">
			<h1 class="text-white">Stanford</h1>
		</div>
		<div class=""
			id="banner-explore">
			<p class="text-white"
				v-scroll-to="{
					el: 'body',
					offset: scrollOffset
				}"
			>Explore Stanford
				<span class="d-block text-center">
					<i class="fa fa-chevron-down"></i>
				</span>
			</p>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'banner',
	data() {
		return {
			bannerHeight: Number
		}
	},
	computed: {
		scrollOffset() {
			return this.$store.state.screen.height + 1;
		}
	},
	mounted() {
		
	},
	methods: {
	}
}
</script>

<style lang="less">
#home-banner {
	position: absolute;
	z-index: 1000;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-shadow: 0 0 10px rgba(0,0,0,.15),
			0 3px 3px rgba(0,0,0,.15);

	#banner-img {
		position: absolute;
		height: 100%;
		width: 100%;
	}

	#banner-title {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 50%;
		transform: translateX(-50%);
	}

	#banner-explore {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);

		&:hover {
			cursor: pointer;
		}
	}
}
</style>
