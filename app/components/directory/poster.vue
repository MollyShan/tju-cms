<template>

<!-- <div> -->
	<div class="py-5 fuzzy-block">
		<div class="fuzzy-img-box">
			<img src="/hsj/search.jpg"
				alt=""
				class="img-fluid fuzzy-img"
				:class="{ 'fuzzy': isFuzzyscreenEntered }"
				>

		</div>
		<div class="fuzzy-content container" v-show="isFuzzyscreenEntered">
			<!-- <div class="fuzzy-head">
				<img src="/images/card2.jpg" alt="" class="rounded-circle">
			</div> -->
			<h3 class="font-weight-bold display-4">综合查询</h3>
			<div class="form-group row mt-4">
				<div class="col-sm-6 offset-sm-2">
					<input type="text"
						class="form-control rounded-0"
						placeholder="请输入关键词">
				</div>
				<div class="col-sm-2">
					<button class="btn btn-info btn-block rounded-0"
						type="button">查询</button>
				</div>
			</div>
			<a href="" class="text-white">更多查询内容 <span>&gt;</span></a>
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
		// background: #000;
	}
	.fuzzy-img {
		transform: scale(1);
		width: 100%;
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
