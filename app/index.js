'use strict';
import 'jquery/dist/jquery.min.js';

import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import _ from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo);
Vue.use(Vuex);

import RImage from './components/r-image.vue';
Vue.component('r-image', RImage);

import App from './app.vue';
import router from './routes';
import rootStore from './store';

const store = new Vuex.Store(rootStore);

const app = new Vue(
	Object.assign({ router, store }, App)
).$mount('#app');


window.onresize = function () {
	store.commit('setScreenWidth', window.innerWidth);
	store.commit('setScreenHeight', window.innerHeight);
}

window.addEventListener('scroll',  _.throttle(function () {
	store.commit('setScrollOffsetTop', window.scrollY);
	store.commit('setScrollOffsetLeft', window.scrollX);
}), 50);

setInterval(() => {
	const height = window.innerHeight;
	const isOverViewer = store.getters.isOverViewer;

	if (isOverViewer) {
		const spacer = document.getElementById('main-spacer');

		spacer.style.display = 'none';
		spacer.style.height = '0px';
	}
}, 100)