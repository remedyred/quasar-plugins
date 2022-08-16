<template>
	<q-input
		ref="inputRef"
		v-model="formattedValue"
		@update:model-value="updateModelValue"
	>
		<template v-for="(_, slot) in $slots" #[slot]="scope">
			<slot :name="slot" v-bind="scope || {}" />
		</template>
	</q-input>
</template>
<script lang="ts" setup>
import {CurrencyDisplay, CurrencyInputOptions, useCurrencyInput} from 'vue-currency-input'
import {ref, watch} from 'vue'

export interface SCurrencyInputOptions extends Omit<CurrencyInputOptions, 'currencyDisplay'> {
	currencyDisplay?: CurrencyDisplay | 'code' | 'hidden' | 'name' | 'narrowSymbol' | 'symbol'
}

interface Props {
	modelValue: number
	options?: SCurrencyInputOptions
}

const {modelValue, options} = defineProps<Props>()
const $emit = defineEmits(['update:model-value', 'update:modelValue', 'change'])

const defaultCurrency: CurrencyInputOptions = {
	currency: 'USD',
	currencyDisplay: CurrencyDisplay.hidden,
	valueRange: {
		min: 0,
		max: 100000000
	},
	precision: 2,
	hideCurrencySymbolOnFocus: true,
	hideGroupingSeparatorOnFocus: false,
	hideNegligibleDecimalDigitsOnFocus: false,
	autoDecimalDigits: true,
	useGrouping: true,
	accountingSign: false
}

const currencyOptions = ref<CurrencyInputOptions>({...defaultCurrency, ...options} as CurrencyInputOptions)

const {inputRef, setOptions, formattedValue, numberValue} = useCurrencyInput(currencyOptions.value)
watch(() => options, () => {
	setOptions({...defaultCurrency, ...options} as CurrencyInputOptions)
}, {deep: true})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function updateModelValue(_val: any) {
	$emit('update:model-value', numberValue, currencyOptions.value)
}
</script>
<style lang="scss" scoped></style>
