<template>

<div id="main-spacer">

</div>
</template>

<script>
import Vue from 'vue';

// export default {
// 	el: '#main-spacer',
// 	name: 'spacer'

// }

export default new Vue({
	el: '#main-spacer',
	name: 'spacer'
});
</script>


<style lang="less">
#main-spacer {
	visibility: hidden;
	z-index: -100;
	height: 1800px;
	// width: auto;
	display: block;
}
</style>
