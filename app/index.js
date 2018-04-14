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
}, 100));