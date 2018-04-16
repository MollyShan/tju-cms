<template>

<!-- <div> -->
	<div class="container py-5">
		<div class="row text-center">
			<div class="col-sm-8 offset-sm-2 py-5">
				<h2 class="display-4">Academics</h2>
				<p class="h2">Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world</p>
			</div>
		</div>

		<div class="card-deck">
			<div class="card border-0 rounded-0"
				v-for="(info, index) in infoList"
				:key="index">
				<div class="card-img-top">
					<img :src="info.imgUrl" alt="" class="img-fluid">
				</div>
				<div class="card-body">
					<h5 class="card-title">{{info.title}}</h5>
					<p class="card-text">{{info.abstract}}</p>
					<a href="" class="card-link">{{info.link}}<span>&gt;</span></a>
				</div>
			</div>
		</div>

		<div class="d-flex justify-content-center">
			<button class="btn btn-danger btn-lg rounded-0 my-5" type="button">
				More About Academics
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
					imgUrl: '/images/card1.jpg',
					title: 'Undergraduate Education',
					abstract: 'Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise',
					link: 'Undergraduate Education'
				},
				{
					imgUrl: '/images/card2.jpg',
					title: 'Graduate Education',
					abstract: 'Unsurpassed opportunities to participate in the advancement of entire fields of knowledge',
					link: 'Graduate Education'
				},
				{
					imgUrl: '/images/card3.jpg',
					title: 'Lifelong learning',
					abstract: 'Continuing adult education, executive and professional programs, and programs for K-12 students',
					link: 'Programs for Lifelong Learning'
				},
			]
		}
	}
}
</script>
