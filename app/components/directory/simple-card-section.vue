<template>

<div class="container-fluid bg-light">
	<div class="container pt-5 pb-3">
		<div class="row text-center">
			<div class="col-sm-6 offset-sm-3">
				<h2 class="display-4 font-weight-bold">新闻动态</h2>
				<p class="h2">海事局最新热点新闻</p>
			</div>
		</div>

		<div class="py-5 card-float card-with-big-img">
			<r-image src="/hsj/banner3.jpg"
				pattern="16:9"
				class="card-img-big">
			</r-image>
			<div class="card rounded-0 d-none d-lg-block">
				<div class="card-body">
					<h5 class="card-title text-info">新港海事局</h5>
					<p class="card-text">新港海事局持续加强内河船监管工作</p>
				</div>
			</div>
		</div>

		<div class="card-deck">
			<div class="card card-float"
				v-for="(info, index) in cardInfoList"
				:key="index">
				<div class="card-img-top">
					<r-image :src="info.imgUrl"
						pattern="16:9">
					</r-image>
				</div>
				<div class="card-body">
					<h5 class="card-title text-info">{{info.title}}</h5>
					<p class="card-text">{{info.abstract}}</p>
				</div>
			</div>
		</div>

		<div class="d-flex justify-content-center">
			<button class="btn btn-info btn-lg rounded-0 my-5" type="button">
				更多海事局新闻
			</button>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'card-section',
	data() {
		return {
			cardInfoList: [
				{
					imgUrl: '/hsj/banner1.jpg',
					title: '大沽口海事局',
					abstract: '大沽口海事局办公室党工部联合党支部组织开展红色主题教育活动'
				},
				{
					imgUrl: '/hsj/banner2.jpg',
					title: '新港海事局',
					abstract: '新港海事局持续加强内河船监管工作'
				},
				{
					imgUrl: '/hsj/banner4.jpg',
					title: '中国海事船舶安全检查',
					abstract: '中国海事船舶安全检查网改版打造立体化网络宣传平台'
				},
				{
					imgUrl: '/hsj/banner5.jpg',
					title: '南疆海事局',
					abstract: '南疆海事局圆满完成“供暖季”南疆LNG码头各进港LNG船舶的安全保障工作'
				},
			],
		}
	}
}
</script>

<style lang="less">
.card-float {
	.card-body,
	.card-img-big {
		box-shadow: 2px 3px 10px rgba(0,0,0,.15),
				-2px 3px 10px rgba(0,0,0, .15)
	}
	.card-img-top {
		&:hover {
			cursor: pointer;
			box-shadow: 1px 0 5px rgba(0, 0, 0, .15),
				-1px 0 5px rgba(0, 0, 0, .15);
			img {
				transform: scale(1.2) translate(-50%, -50%);
			}
			& + div {
				box-shadow: 3px 5px 15px rgba(0,0,0,.15),
					-3px 5px 15px rgba(0,0,0, .15);
				
			}
		}
	}
}
.card-with-big-img {
	position: relative;

	.card {
		position: absolute;
		top: 12%;
		right: 3%;
	}
}

</style>
