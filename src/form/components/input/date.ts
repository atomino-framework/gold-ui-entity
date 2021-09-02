import CDate from "./date.svelte"
import AbstractInput, {component, layout} from "../../abstract-input";

@component(CDate)
@layout("row")
export default class DateInput extends AbstractInput {
}
