<template>

<div>
	<router-view></router-view>
	<spacer></spacer>
</div>
</template>

<script>
import Spacer from './components/Spacer.vue';

export default {
	name: 'app',
	components: {
		Spacer
	},
	data() {
		return {
			
		}
	},
	
}
</script>
