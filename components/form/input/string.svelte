<script lang="ts">
	import {Input} from "svelma"
	import type StringInput from "../../../lib/form/input/string";
	import type EntityPage from "../../../lib/form/form-page";
	export let page: EntityPage;
	export let control:StringInput;
	export let item;
	export let onChange: Function;
</script>

<Input type="text" size="is-small" bind:value={$item[control.field]} on:change={onChange} />
