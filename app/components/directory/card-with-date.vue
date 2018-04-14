<template>

<div>
	<div class="container py-5">
		<div class="card-deck">
			<div class="card card-float border-0 rounded-0"
				v-for="(info, index) in infoList"
				:key="index">
				<div class="card-img-top">
					<img :src="info.imgUrl" alt="" class="img-fluid">
				</div>
				<div class="card-body card-with-date">
					<div class="date-box text-center">
						<p class="text-white mb-0">{{info.month}}</p>
						<p class="text-white mb-0">{{info.date}}</p>
					</div>
					<h5 class="card-title text-danger">{{info.title}}</h5>
					<h5 class="card-text">{{info.abstract}}</h5>
					<p class="card-text">{{info.time}}</p>
				</div>
			</div>
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
					imgUrl: '/images/card1.jpg',
					month: 'APR',
					date: '14',
					title: 'PERFORMANCE',
					abstract: 'Akira Tana and His Secret Agent Band',
					time: 'through April 14, 2018'
				},
				{
					imgUrl: '/images/card2.jpg',
					month: 'APR',
					date: '16',
					title: 'LECTURE',
					abstract: 'Leading a Meaningful Life: A Conversation with Ted Koppel',
					time: '12:00 PM'
				},
				{
					imgUrl: '/images/card3.jpg',
					month: 'APR',
					date: '17',
					title: 'LECTURE',
					abstract: 'A Reading by Elizabeth Alexander - in Honor of National Poetry Month.',
					time: '3:30 PM'
				},
				{
					imgUrl: '/images/card4.jpg',
					month: 'APR',
					date: '17',
					title: 'ARTS',
					abstract: 'Is AI the New Frankenstein? with Ken Goldberg',
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
		padding-top: .2rem;
		background: #2f2424;
		position: absolute;
		top: -12%;
	}
}
</style>
