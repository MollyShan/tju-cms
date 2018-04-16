<template>

<!-- <div> -->
	<div class="py-5 fuzzy-block">
		<div class="fuzzy-img-box">
			<img src="/images/banner.jpg"
				alt=""
				class="img-fluid fuzzy-img"
				:class="{ 'fuzzy': isFuzzyscreenEntered }"
				>

		</div>
		<div class="fuzzy-content" v-show="isFuzzyscreenEntered">
			<div class="fuzzy-head">
				<img src="/images/card2.jpg" alt="" class="rounded-circle">
			</div>
			<h3>“It’s an exciting time to be an aerospace engineer… and thrilling to think that our work could eventually impact space exploration.”</h3>
			<p class="font-weight-bold mt-5">Debbie Senesky</p>
			<p class="font-italic">Assistant Professor of Aeronautics and Astronautics</p>
			<a href="" class="text-white">More about Debbie <span>&gt;</span></a>
		</div>
	</div>
<!-- </div> -->
</template>

<script>
export default {
	name: 'fuzzy-screen',
	computed: {
		isFuzzyscreenEntered() {
			return this.$store.getters.isEnterViewer;
		}
	}
}
</script>


<style lang="less">
.fuzzy {
	filter: blur(10px) brightness(.9);
	transition: all .7s ease-out;
}
.fuzzy-block {
	position: relative;
	overflow: hidden;

	.fuzzy-img-box {
		position: relative;
		overflow: hidden;
		background: #000;
	}
	.fuzzy-img {
		transform: scale(1);
	}

	.fuzzy-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #fff;
		text-align: center;

		.fuzzy-head {
			width: 150px;
			height: 150px;
			position: relative;
			left: 50%;
			transform: translate(-50%, -12%);

			img.rounded-circle {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
