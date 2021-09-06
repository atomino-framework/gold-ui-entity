import AbstractInput, {component, layout} from "../abstract-input";
import CCheckboxes from "../../../components/form/input/checkboxes.svelte"

interface IOption {
	label: string,
	value: any
}

@component(CCheckboxes)
@layout("row")
export default class CheckboxesInput extends AbstractInput {

	public options: Array<IOption> = [];

	Options(options: Array<IOption>): this {
		this.options = options;
		return this;
	}
}
