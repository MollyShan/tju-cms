<template>

<div>
	<div class="container py-5">
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

			<div class="col-md-6 mt-sm-3 mt-md-0">
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
	.card-body {
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
					-3px 5px 15px rgba(0,0,0, .15)
			}
		}
	}
}

</style>
