<script lang="ts">
	import type ColorInput from "../../../lib/form/input/color";
	import type EntityPage from "../../../lib/form/form-page";
	export let page: EntityPage;

	export let control: ColorInput;
	export let item;
	export let onChange: Function;
</script>

<div class="field has-addons">
	<div class="control is-expanded">
		<div class="is-fullwidth">
			<input class="input is-small" type="text" maxlength="7" minlength="7" bind:value={$item[control.field]} on:change={onChange} placeholder="#......">
		</div>
	</div>
	<div class="control">
		<input class="input is-small" type="color" bind:value={$item[control.field]} on:change={onChange}>
	</div>
</div>

<style lang="scss">
	input[type="color"]{
		-webkit-appearance: none;
		cursor: pointer;
		width: 40px;
		padding:0;
		&::-webkit-color-swatch-wrapper {
			padding: 0;
		}
		&::-webkit-color-swatch {
			border: none;
		}
	}
</style>
