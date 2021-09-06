import AbstractInput, {component, layout} from "../abstract-input";
import CRadio from "../../../components/form/input/radio.svelte"


interface IOption {
	label: string,
	value: any
}

@component(CRadio)
@layout("row")
export default class RadioInput extends AbstractInput {

	public options: Array<IOption> = [];

	Options(options: Array<IOption>): this {
		this.options = options;
		return this;
	}
}
