'use strict';
const HEIGHT_MAX_OFFSET = 60;

export default {
	state: {
		screen: {
			width: window.innerWidth,
			height: window.innerHeight
		},
		scroll: {
			offsetTop: window.scrollY,
			offsetLeft: window.scrollX
		}
	},
	getters: {
		isOverViewer({ screen, scroll }) {
			return scroll.offsetTop <= screen.height - HEIGHT_MAX_OFFSET;
		}
	},
	actions: {

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
		}
	}
};