<template>
	<div>
		<q-btn
			:color="color"
			:dense="dense"
			:disable="disabled"
			:flat="flat"
			:icon="icon"
			:round="round"
			:size="size"
			:text-color="textColor"
			@click="isOpen = true"
		>
			<q-tooltip>
				More Info
			</q-tooltip>
		</q-btn>
		<q-dialog v-model="isOpen">
			<q-card class="s-helper-content">
				<q-card-section>
					<slot/>
				</q-card-section>
			</q-card>
		</q-dialog>
	</div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'

defineProps({
	size: {
		type: String,
		default: 'md'
	},
	color: {
		type: String,
		default: 'grey'
	},
	textColor: {
		type: String,
		default: 'white'
	},
	round: {
		type: Boolean,
		default: true
	},
	flat: {
		type: Boolean,
		default: true
	},
	disabled: Boolean,
	dense: Boolean,
	icon: {
		type: String,
		default: 'help'
	},
	tip: {
		type: String,
		default: 'Help'
	}
})

const isOpen = ref(false)
</script>
<style lang="scss">
.s-helper-content {
	width: 100%;
	max-width: 80vw;
	min-width: 400px;
}
</style>
