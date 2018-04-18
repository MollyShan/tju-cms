<template>

<!-- <div> -->
	<div class="container py-5">
		<div class="row text-center">
			<div class="col-sm-8 offset-sm-2 py-5">
				<h2 class="display-4 font-weight-bold">办事大厅</h2>
				<p class="h2">包括通航管理、船舶管理、危管防污、船员管理、公司审核和其他行政管理</p>
			</div>
		</div>

		<div class="card-deck">
			<div class="card border-0 rounded-0"
				v-for="(info, index) in infoList"
				:key="index">
				<div class="card-img-top">
					<r-image :src="info.imgUrl" pattern="16:9"></r-image>
				</div>
				<div class="card-body">
					<h5 class="card-title">{{info.title}}</h5>
					<!-- <p class="card-text">{{info.abstract}}</p> -->
					<a href="" class="card-link">{{info.link}}<span>&gt;</span></a>
				</div>
			</div>
		</div>

		<div class="d-flex justify-content-center mt-3">
			<button class="btn btn-info btn-lg rounded-0 my-3" type="button">
				更多办理事项
			</button>
		</div>
	</div>
<!-- </div> -->
</template>

<script>
export default {
	name: 'image-text-briefing',
	data() {
		return {
			infoList: [
				{
					imgUrl: '/hsj/work1.jpg',
					title: '申请发布航行警（通）告',
					abstract: '办公时间：工作日上午8：30-12：00 下午13：30-16：00',
					link: '了解更多'
				},
				{
					imgUrl: '/hsj/work2.jpg',
					title: '水上水下活动许可',
					abstract: '办公时间：工作日上午8：30-12：00 下午13：30-16：00',
					link: '了解更多'
				},
				{
					imgUrl: '/hsj/work3.jpg',
					title: '船舶安全作业区划定',
					abstract: '办公时间：工作日上午8：30-12：00 下午13：30-16：00',
					link: '了解更多'
				},
			]
		}
	}
}
</script>
