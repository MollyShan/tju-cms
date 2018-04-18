'use strict';

export default {
	state: {
		screen: {
			width: window.innerWidth,
			height: window.innerHeight
		},
		scroll: {
			offsetTop: window.scrollY,
			offsetLeft: window.scrollX
		},
		// isSearchBarShow: false
	},
	getters: {
		isOverViewer({ screen, scroll }) {
			return scroll.offsetTop <= screen.height;
		},
		isEnterViewer({ screen, scroll }) {
			return scroll.offsetTop >= screen.height * 3.7;
		}
	
	},
	actions: {
		toggleSearchBar({ commit, state }) {
			// state.isSearchBarShow ? commit('hideSearchBar') : commit('showSearchBar');
		}
	},
	mutations: {
		setScreenWidth(state, width) {
			state.screen.width = width;
		},
		setScreenHeight(state, height) {
			state.screen.height = height;
		},
		setScrollOffsetTop(state, top) {
			state.scroll.offsetTop = top;
		},
		setScrollOffsetLeft(state, left) {
			state.scroll.offsetLeft = left;
		},
		showSearchBar(state) {
			// state.isSearchBarShow = true;
		},
		hideSearchBar(state) {
			// state.isSearchBarShow = false;
		}
	}
};