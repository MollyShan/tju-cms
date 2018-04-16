<template>

<div>
	<header class="fixed-top">
		<nav class="navbar navbar-expand-lg navbar-dark"
			style="background-color: #b1040e;">
			<div class="container">
				<a href="#" class="navbar-brand">Navbar</a>
				<button class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#nav-global">
					<span class="navbar-toggler-icon"></span>
					Menu
				</button>

				<div class="collapse navbar-collapse" id="nav-global">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active">
							<a href="#" class="nav-link">Students<span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item active">
							<a href="#" class="nav-link">Faculty & Staff</a>
						</li>
						<li class="nav-item active">
							<a href="#" class="nav-link">Parents</a>
						</li>
						<li class="nav-item active">
							<a href="#" class="nav-link">Alumni</a>
						</li>
						<li class="nav-item active"
								@click="isSearchTabShow = !isSearchTabShow">
							<a v-if="isSearchTabShow" class="nav-link font-weight-bold"><i class="fa fa-search"></i> Search</a>
							<a v-else class="nav-link font-weight-bold"><i class="fa fa-times"></i> Close</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<ul class="nav justify-content-center py-2"
			:class="{
				'cover-banner': isSubnavCovered
			}"
			id="sub-nav">
			<li class="nav-item">
				<a href="" class="nav-link">News</a>
			</li>
			<li class="nav-item">
				<a href="" class="nav-link">Events</a>
			</li>
			<li class="nav-item">
				<a href="" class="nav-link">Academics</a>
			</li>
			<li class="nav-item">
				<a href="" class="nav-link">Research</a>
			</li>
			<li class="nav-item">
				<a href="" class="nav-link">Health Care</a>
			</li>
			<li class="nav-item">
				<a href="" class="nav-link">Campus Life</a>
			</li>
			<li class="nav-item">
				<a href="" class="nav-link">Admission</a>
			</li>
			<li class="nav-item">
				<a href="" class="nav-link">About</a>
			</li>
		</ul>

	</header>

	<banner></banner>

	<section id="main-content" :class="{
			'scroll-fixed': isSubnavCovered
		}">
		<main style="min-height: 600px">
			<simple-card-section></simple-card-section>
			<card-with-date></card-with-date>
			<image-text-briefing></image-text-briefing>
			<poster></poster>
			<picture-with-texts></picture-with-texts>
			<div class="container py-3 text-center">
				<div class="row">
					<div class="col-sm-6 offset-sm-3">
						<h2 class="display-4">About Stanford</h2>
						<p class="h2">A place for learning, discovery, innovation, expression and discourse</p>
					</div>
				</div>
				<div class="row py-5">
					<div class="col-sm-4">
						<h2 class="">19</h2>
						<p class="h5">Nobel laureates currently on faculty</p>
					</div>
					<div class="col-sm-4">
						<h2 class="">4:1</h2>
						<p class="h5">Student-to-faculty ratio</p>
					</div>
					<div class="col-sm-4">
						<h2 class="">6,000+</h2>
						<p class="h5">Externally sponsored research projects</p>
					</div>
				</div>
				<div class="d-flex justify-content-center">
					<button class="btn btn-danger btn-lg rounded-0 mb-3" type="button">
						More About Stanford
					</button>
				</div>
			</div>
		</main>
		<spacer></spacer>

		<footer class="">
			<section id="footer-pre" class="bg-light py-3">
				<div class="container">
					<div class="row">
						<div class="col-md-10">
							<a href="" class="d-inline-block"><i class="fa fa-cloud"></i></a>
							<span>47° F / 8° C </span>

						</div>
						<div class="col-md-2">
							<a href="" class="d-inline-block"><i class="fa fa-facebook-square"></i></a>
							<a href="" class="d-inline-block"><i class="fa fa-twitter"></i></a>
							<a href="" class="d-inline-block"><i class="fa fa-instagram"></i></a>
							<a href="" class="d-inline-block"><i class="fa fa-youtube-play"></i></a>
							<a href="" class="d-inline-block"><i class="fa fa-apple"></i></a>
						</div>
					</div>

				</div>
				
			</section>
			<section id="footer-content">
				<div class="container pt-4 pb-3">
					<div class="row">
						<div class="col-md-10">
							<div class="row">
								<div class="col" v-for="(link, index) in linkPool"
									:key="index">
									<h5 class="text-uppercase text-danger">{{link.title}}</h5>
									<ul class="list-unstyled">
										<li v-for="(item, index) in link.itemList"
											:key="index"><a href="" class="text-dark">{{item.text}}</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-md-2">
							<div class="row">
								<div class="col m-2" v-for="(button, index) in footButtonList"
									:key="index">
									<button class="btn btn-outline-dark btn-block rounded-0">{{button.text}}</button>	
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
			<section id="footer-global"
				class="container-fluid py-3"
				style="background-color: #8c1515;">
				<div class="container">
					<div class="row">
						<div class="col-md-2">
							<h3><a href="" class="text-white">Stanford University</a></h3>
						</div>
						<div class="col-md-10">
							<ul class="nav">
								<li class="nav-item">
									<a href="" class="nav-link text-white">Stanford Home</a>
								</li>
								<li class="nav-item">
									<a href="" class="nav-link text-white">Maps & Directions</a>
								</li>
							</ul>
							<ul class="nav">
								<li class="nav-item">
									<a href="" class="nav-link text-white">Terms of Use</a>
								</li>
								<li class="nav-item">
									<a href="" class="nav-link text-white">Privacy Policy</a>
								</li>
							</ul>
							<p class="px-3 pt-2 text-white">©Copyright  Stanford University. Stanford, California 94305.</p>
						</div>
					</div>
				</div>
			</section>
		</footer>

	</section>

</div>
</template>

<script>
import Banner from './directory/banner.vue';
import SimpleCardSection from './directory/simple-card-section.vue';
import CardWithDate from './directory/card-with-date.vue';
import ImageTextBriefing from './directory/image-text-briefing.vue';
import Poster from './directory/poster.vue';
import PictureWithTexts from './directory/picture-with-texts.vue';

import Spacer from './Spacer.vue';

export default {
	name: 'home',
	components: {
		Banner,
		Spacer,
		SimpleCardSection,
		CardWithDate,
		ImageTextBriefing,
		Poster,
		PictureWithTexts
	},
	mounted() {
		console.log(this.$store.state.scroll.offsetTop);
	},
	methods: {
		
	},
	computed: {
		isSubnavCovered() {
			return this.$store.getters.isOverViewer;
		},
		isFuzzyscreenEntered() {
			return this.$store.getters.isEnterViewer;
		}
	},
	data() {
		return {
			isSearchTabShow: true,
			linkPool: [
				{
					title: 'schools',
					itemList: [
						{
							text: 'Business'
						},
						{
							text: 'Earth, Energy & Environmental Sciences'
						},
						{
							text: 'Education'
						}
					]
				},
				{
					title: 'departments',
					itemList: [
						{
							text: 'Departments A - to  Z'
						},
						{
							text: 'Interdisciplinary Programs'
						}
					]
				},
				{
					title: 'HEALTH CARE',
					itemList: [
						{
							text: 'Stanford Health Care'
						},
						{
							text: "Stanford Children's Health"
						}
					]
				},
				{
					title: 'ABOUT STANFORD',
					itemList: [
						{
							text: 'Facts'
						},
						{
							text: 'History'
						},
						{
							text: 'Accreditation'
						},
					]
				},
				{
					title: 'RESOURCES',
					itemList: [
						{
							text: 'A - to  Z Index'
						},
						{
							text: 'Campus Map'
						},
						{
							text: 'Directory'
						},
						{
							text: 'Stanford Profiles'
						},
					]
				}
			],
			footButtonList: [
				{
					text: 'Applying',
					href: ''
				},
				{
					text: 'Visiting',
					href: ''
				},
				{
					text: 'Giving',
					href: ''
				},
				{
					text: 'Careers',
					href: ''
				},
				{
					text: 'Contact',
					href: ''
				},
			]
		}
	}
}
</script>

<style lang="less">
html, body {
	width: 100%;
	height: 100%;
	position: relative;
}
header {

	#sub-nav.cover-banner {
		background: linear-gradient(0deg, transparent 0, #020202 75%);
		box-shadow: none;
		a {
			color: #fff;
		}
	}
	#sub-nav {
		background-color: #fff;
		box-shadow: 0 0 10px rgba(0,0,0,.15),
			0 3px 3px rgba(0,0,0,.15);
		a {
			color: #000;
		}
	}

}
#main-content {
	position: absolute;
	z-index: 1;
	top: 100%;
	width: 100%;
<<<<<<< HEAD
	margin-top: 112px;
	
	&.scroll-fixed {
		margin-top: 0;
=======
	
	&.scroll-fixed {
>>>>>>> b0b9ff5... [ADDED] patterns
		position: fixed;
		top: 112px;
	}
}



</style>
