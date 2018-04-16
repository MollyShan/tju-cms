<template>

<!-- <div> -->
	<div class="container py-5">
		<div class="row text-center">
			<div class="col-sm-6 offset-sm-3">
				<h2 class="display-4">Stanford Today</h2>
				<p class="h2">The latest news from Stanford</p>
			</div>
		</div>

		<div class="py-5 card-float card-with-big-img">
			<img src="/images/card4.jpg" alt="" class="img-fluid card-img-big">
			<div class="card rounded-0 d-none d-lg-block">
				<div class="card-body">
					<h5 class="card-title text-danger">CAMPUS LIFE</h5>
					<p class="card-text">Retired Stanford Trees have found a home in Green Library</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="card-deck">
					<div class="card card-float"
						v-for="(info, index) in cardInfoList"
						:key="index">
						<div class="card-img-top">
							<img :src="info.imgUrl" alt="" class="img-fluid">
						</div>
						<div class="card-body">
							<h5 class="card-title text-danger">{{info.title}}</h5>
							<p class="card-text">{{info.abstract}}</p>
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-6 mt-sm-5 mt-md-0">
				<div class="card-deck">
					<div class="card card-float"
						v-for="(info, index) in cardInfoList2"
						:key="index">
						<div class="card-img-top">
							<img :src="info.imgUrl" alt="" class="img-fluid">
						</div>
						<div class="card-body">
							<h5 class="card-title text-danger">{{info.title}}</h5>
							<p class="card-text">{{info.abstract}}</p>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div class="d-flex justify-content-center">
			<button class="btn btn-danger btn-lg rounded-0 my-5" type="button">
				More Stanford News
			</button>
		</div>
	</div>
<!-- </div> -->
</template>

<script>
export default {
	name: 'card-section',
	data() {
		return {
			cardInfoList: [
				{
					imgUrl: '/images/card1.jpg',
					title: 'UNIVERSITY AFFAIRS',
					abstract: 'Faculty Senate adjusts policies on GRE, graduate advising'
				},
				{
					imgUrl: '/images/card2.jpg',
					title: 'UNIVERSITY AFFAIRS',
					abstract: 'Faculty Senate adjusts policies on GRE, graduate advising'
				},
			],
			cardInfoList2: [
				{
					imgUrl: '/images/card3.jpg',
					title: 'UNIVERSITY AFFAIRS',
					abstract: 'Faculty Senate adjusts policies on GRE, graduate advising'
				},
				{
					imgUrl: '/images/card4.jpg',
					title: 'UNIVERSITY AFFAIRS',
					abstract: 'Faculty Senate adjusts policies on GRE, graduate advising'
				},
			]
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
			& + div {
				box-shadow: 3px 5px 15px rgba(0,0,0,.15),
					-3px 5px 15px rgba(0,0,0, .15);
				.card-text {
					// color: blue;
				}
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
