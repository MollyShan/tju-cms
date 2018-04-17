<template>

<div class="container-fluid bg-light">
	<div class="container pt-5 pb-3">
		<div class="row text-center">
			<div class="col-sm-6 offset-sm-3">
				<h2 class="display-4 font-weight-bold">Stanford Today</h2>
				<p class="h2">The latest news from Stanford</p>
			</div>
		</div>

		<div class="py-5 card-float card-with-big-img">
			<r-image src="/images/card4.jpg"
				pattern="16:9"
				class="card-img-big">
			</r-image>
			<div class="card rounded-0 d-none d-lg-block">
				<div class="card-body">
					<h5 class="card-title text-danger">CAMPUS LIFE</h5>
					<p class="card-text">Retired Stanford Trees have found a home in Green Library</p>
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
					<h5 class="card-title text-danger">{{info.title}}</h5>
					<p class="card-text">{{info.abstract}}</p>
				</div>
			</div>
		</div>

		<div class="d-flex justify-content-center">
			<button class="btn btn-danger btn-lg rounded-0 my-5" type="button">
				More Stanford News
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
					imgUrl: '/images/card1.jpg',
					title: 'LAW & POLICY',
					abstract: 'Intellectual property and China: Is China stealing American IP?'
				},
				{
					imgUrl: '/images/card2.jpg',
					title: 'UNIVERSITY AFFAIRS',
					abstract: 'Title IX resolution'
				},
				{
					imgUrl: '/images/card3.jpg',
					title: 'LAW & POLICY',
					abstract: 'It’s tax time! Does it really need to be such a painful process?'
				},
				{
					imgUrl: '/images/card4.jpg',
					title: 'SCIENCE & TECHNOLOGY',
					abstract: 'Autonomous robotics class integrates theory and practice'
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
	.card-img-big:hover {
		cursor: pointer;
		box-shadow: 3px 5px 15px rgba(0,0,0,.15),
					-3px 5px 15px rgba(0,0,0, .15);
		img {
			transform: scale(1.2) translate(-50%, -50%);
		}
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
