<template>

<div>
	<spacer></spacer>
	<header class="fixed-top">
		<nav class="navbar navbar-expand-lg navbar-dark"
			style="background-color: #07426a;">
			<div class="container">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a href="#" class="nav-link"><i class="fa fa-anchor"></i> 设为首页</a>
					</li>
					<li class="nav-item">
						<a href="#" class="nav-link"><i class="fa fa-star"></i> 加入收藏</a>
					</li>
				</ul>
				<button class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#nav-global">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="nav-global">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<a href="#" class="nav-link"><i class="fa fa-android"></i></a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link"><i class="fa fa-mobile"></i></a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link"><i class="fa fa-weixin"></i></a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link"><i class="fa fa-weibo"></i></a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link"><i class="fa fa-envelope"></i></a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link"><i class="fa fa-cog"></i></a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link"><i class="fa fa-search"></i> 搜索</a>
						</li>
						<!-- <li class="nav-item"
								@click="isSearchTabShow = !isSearchTabShow">
							<a v-if="isSearchTabShow" class="nav-link font-weight-bold"><i class="fa fa-search"></i> Search</a>
							<a v-else class="nav-link font-weight-bold"><i class="fa fa-times"></i> Close</a>
						</li> -->
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
				<a href="#" class="nav-link">首页</a>
			</li>
			<li class="nav-item">
				<a href="#" class="nav-link">新闻动态</a>
			</li>
			<li class="nav-item">
				<a href="#" class="nav-link">信息公开</a>
			</li>
			<li class="nav-item">
				<a href="#" class="nav-link">办事大厅</a>
			</li>
			<li class="nav-item">
				<a href="#" class="nav-link">综合查询</a>
			</li>
			<li class="nav-item">
				<a href="#" class="nav-link">数据服务</a>
			</li>
			<li class="nav-item">
				<a href="#" class="nav-link">互动交流</a>
			</li>
			<li class="nav-item">
				<a href="#" class="nav-link">蓝海社区</a>
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
			<columnar></columnar>
		</main>
		

		<footer-banner></footer-banner>
		<footer class="">
			<section id="footer-pre" class="bg-light py-2">
				<div class="container">
					<div class="d-flex justify-content-between h1">
						<div class="p-2">
							<a href="" class="d-inline-block text-dark"><i class="fa fa-cloud"></i></a>
							<span>47° F / 8° C </span>

						</div>
						<div class="p-2">
							<a href="" class="d-inline-block text-dark"><i class="fa fa-facebook-square"></i></a>
							<a href="" class="d-inline-block text-dark"><i class="fa fa-twitter"></i></a>
							<a href="" class="d-inline-block text-dark"><i class="fa fa-instagram"></i></a>
							<a href="" class="d-inline-block text-dark"><i class="fa fa-youtube-play"></i></a>
							<a href="" class="d-inline-block text-dark"><i class="fa fa-apple"></i></a>
						</div>
					</div>

				</div>
				
			</section>
			<section id="footer-content">
				<div class="container pt-4 pb-3">
					<div class="row">
						<div class="col" v-for="(link, index) in linkPool"
							:key="index">
							<h5 class="text-uppercase text-danger">{{link.title}}</h5>
							<ul class="list-unstyled">
								<li v-for="(item, index) in link.itemList"
									:key="index"><a :href="item.url" class="text-dark">{{item.text}}</a></li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section id="footer-global"
				class="container-fluid py-3"
				style="background-color: #0c4b75;">
				<div class="container">
					<div class="row">
						<div class="col-md-2">
							<h3 class="mt-3"><a href="" class="text-white">天津海事局</a></h3>
						</div>
						<div class="col-md-10">
							<ul class="nav">
								<li class="nav-item">
									<a href="" class="nav-link text-white">津ICP备020465</a>
								</li>
							</ul>
							<ul class="nav">
								<li class="nav-item">
									<a href="" class="nav-link text-white">地址：天津市河西区解放南路369号</a>
								</li>
								<li class="nav-item">
									<a href="" class="nav-link text-white">邮编：300211</a>
								</li>
							</ul>
							<p class="px-3 pt-2 text-white">中华人民共和国天津海事局版权所有</p>
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
import Columnar from './directory/columnar.vue';
import FooterBanner from './directory/footer-banner.vue';

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
		PictureWithTexts,
		Columnar,
		FooterBanner
	},
	computed: {
		isSubnavCovered() {
			return this.$store.getters.isOverViewer;
		},
	},
	methods: {
		showSearchBar() {
			
		}
	},
	data() {
		return {
			isSearchTabShow: true,
			linkPool: [
				{
					title: '',
					itemList: [
						{
							text: '中国海事局',
							url: 'http://www.msa.gov.cn/'
						},
						{
							text: '上海海事局',
							url: 'http://www.shmsa.gov.cn/html/index.html'
						},
						{
							text: '辽宁海事局',
							url: 'http://www.lnmsa.gov.cn/'
						}
					]
				},
				{
					title: '',
					itemList: [
						{
							text: '河北海事局',
							url: 'http://www.hbmsa.gov.cn/html/index.html'
						},
						{
							text: '山东海事局',
							url: 'http://www.sdmsa.gov.cn/'
						}
					]
				},
				{
					title: '',
					itemList: [
						{
							text: '江苏海事局',
							url: 'http://www.js-msa.gov.cn/'
						},
						{
							text: "浙江海事局",
							url: 'http://www.cnzjmsa.gov.cn/ZJ/'
						},
						{
							text: "香港海事处",
							url: 'https://www.mardep.gov.hk/'
						}
					]
				},
				{
					title: '',
					itemList: [
						{
							text: '福建海事局',
							url: 'http://www.fjmsa.gov.cn/index.jsp'
						},
						{
							text: '广东海事局',
							url: 'https://www.gdmsa.gov.cn/'
						},
						{
							text: '广西海事局',
							url: 'http://www.gxmsa.gov.cn/'
						},
					]
				},
				{
					title: '',
					itemList: [
						{
							text: '海南海事局',
							url: 'http://www.hnmsa.gov.cn/'
						},
						{
							text: '长江海事局',
							url: 'http://www.cjmsa.gov.cn/'
						},
						{
							text: '黑龙江海事局',
							url: 'http://www.hljmsa.gov.cn/'
						},
						{
							text: '深圳海事局',
							url: 'http://sz.msa.gov.cn/'
						},
					]
				}
			],
		}
	}
}
</script>

<style lang="less">
html, body {
	width: 100%;
	height: 100%;
	position: relative;
	font-family: Microsoft YaHei;
}
header {

	#sub-nav.cover-banner {
		background: rgba(0,0,0,.3);
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
			color: #17a2b8;
		}
	}

}
#main-content {
	position: absolute;
	z-index: 1;
	top: 100%;
	width: 100%;
	
	&.scroll-fixed {
		position: fixed;
		top: 112px;
	}
}



</style>
