import AbstractInput, {component, layout} from "../abstract-input";
import CSelect from "../../../components/form/input/select.svelte"


interface IOption {
	label: string,
	value: any
}

@component(CSelect)
@layout("row")
export default class SelectInput extends AbstractInput {

	public options: Array<IOption> = [];

	Options(options: Array<IOption>): this {
		this.options = options;
		return this;
	}
}
