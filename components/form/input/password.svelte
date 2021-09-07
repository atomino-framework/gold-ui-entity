<script lang="ts">
	import {Input} from "svelma"
	import type PasswordInput from "../../../lib/form/input/password";
	import type EntityPage from "../../../lib/form/form-page";
	export let page: EntityPage;
	export let control:PasswordInput;
	export let item;
	export let onChange: Function;
</script>

<Input type="password" autocomplete="new-password" size="is-small" bind:value={$item[control.field]} on:change={onChange} passwordReveal={true}/>
