import CString from "./string.svelte"
import AbstractInput, {component, layout} from "../../abstract-input";

@component(CString)
@layout("row")
export default class StringInput extends AbstractInput {
}
