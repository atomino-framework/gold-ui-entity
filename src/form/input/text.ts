import AbstractInput, {component, layout} from "../abstract-input";
import CText from "../../../components/form/input/text.svelte"

@component(CText)
@layout("column")
export default class TextInput extends AbstractInput {

	public code:boolean = false;
	public markdown: boolean = false;

	Code():this{
		this.code = true;
		return this;
	}

	Markdown():this{
		this.code = true;
		this.markdown = true;
		return this;
	}
}
