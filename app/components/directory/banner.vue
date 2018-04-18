<template>

<div>

	<div id="home-banner"
		:style="{'filter': searchBarBackground}">
		<r-image src="/hsj/bg.jpg"
			style="filter: brightness(.9) blur(2px);"></r-image>
		<div class=""
			id="banner-title">
			<h1 class="text-white display-4">中华人民共和国天津海事局</h1>
			<p class="h2 text-white">TianJin Maritime Safety Administration</p>
		</div>
		<div class=""
			id="banner-explore">
			<p class="text-white"
				v-scroll-to="{
					el: 'body',
					offset: scrollOffset
				}">了解更多
				<span class="d-block text-center">
					<i class="fa fa-chevron-down"></i>
				</span>
			</p>
		</div>
	</div>
	
	<div v-if="isSearchBarShow" class="container" id="search-bar">
		<div class="form-group row mt-4">
			<div class="col-sm-6 offset-sm-2">
				<input type="text"
					class="form-control rounded-0"
					placeholder="搜索网页或关键词">
			</div>
			<div class="col-sm-2">
				<button class="btn btn-dark btn-block rounded-0"
					type="button">搜索</button>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'banner',
	data() {
		return {
			isSearchBarShow: this.$store.state.isSearchBarShow
		}
	},
	computed: {
		scrollOffset() {
			return this.$store.state.screen.height + 1;
		},
		searchBarBackground() {
			if (this.isSearchBarShow) {
				return 'brightness(.5)';
			}
		}
	},
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
	background-color: #000;

	#banner-title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-shadow: 3px 3px 1px #000;
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
#search-bar {
	position: absolute;
	z-index: 1001;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
