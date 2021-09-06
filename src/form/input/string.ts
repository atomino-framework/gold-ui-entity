import AbstractInput, {component, layout} from "../abstract-input";
import CString from "../../../components/form/input/string.svelte"

@component(CString)
@layout("row")
export default class StringInput extends AbstractInput {
}
