<script lang="ts">
	import {Switch} from "svelma"
	import type EntityPage from "../../../lib/form/form-page";
	export let page: EntityPage;
	import type SwitchInput from "../../../lib/form/input/switch";
	export let control:SwitchInput;
	export let item;
	export let onChange: Function;
</script>
<Switch type="is-info" size="is-small" on:click={onChange} bind:checked={$item[control.field]}/>
