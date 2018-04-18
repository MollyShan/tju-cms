<template>

<div style="background: #24262f;">
	<div class="container py-5">
		<div class="row text-center text-white py-5">
			<div class="col-sm-6 offset-sm-3">
				<h2 class="display-4 font-weight-bold">信息公开</h2>
				<p class="h2">政府信息公开</p>
			</div>
		</div>
		<div class="card-deck">
			<div class="card card-float border-0 rounded-0"
				v-for="(info, index) in infoList"
				:key="index">
				<div class="card-img-top">
					<r-image :src="info.imgUrl"
						pattern="16:9">
					</r-image>
				</div>
				<div class="card-body card-with-date">
					<div class="date-box text-center">
						<p class="text-white mb-0">{{info.month}}</p>
						<p class="text-white mb-0">{{info.date}}</p>
					</div>
					<h5 class="card-title text-info">{{info.title}}</h5>
					<h5 class="card-text">{{info.abstract}}</h5>
					<!-- <p class="card-text">{{info.time}}</p> -->
				</div>
			</div>
		</div>
		<div class="d-flex justify-content-center">
			<button class="btn btn-info btn-lg rounded-0 my-5" type="button">
				更多信息公开内容
			</button>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'card-with-date',
	data() {
		return {
			infoList: [
				{
					imgUrl: '/hsj/info1.jpg',
					month: '四月',
					date: '14',
					title: '公开指南',
					abstract: '为了更好提供政府信息公开服务，本机关编制了《天津海事局政府信息公开指南》。',
					time: 'through April 14, 2018'
				},
				{
					imgUrl: '/hsj/info2.jpg',
					month: '四月',
					date: '16',
					title: '公开目录',
					abstract: '政府公开信息目录',
					time: '12:00 PM'
				},
				{
					imgUrl: '/hsj/info3.jpg',
					month: '四月',
					date: '17',
					title: '公开年报',
					abstract: '天津海事局2017政府信息公开年度报告',
					time: '3:30 PM'
				},
				{
					imgUrl: '/hsj/info4.jpg',
					month: '四月',
					date: '17',
					title: '公开申请',
					abstract: '申请人需要本机关主动公开以外的政府信息，可以向本机关申请获取。',
					time: '5:00 PM'
				}
			]
		}
	}
}
</script>

<style lang="less">
.card-with-date {
	position: relative;
	padding-top: 2rem;
	.date-box {
		width: 3.2rem;
		height: 3.4rem;
		padding-top: .3rem;
		background: #24262f;
		position: absolute;
		top: -1.8rem;
	}
}
</style>
