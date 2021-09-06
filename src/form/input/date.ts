import AbstractInput, {component, layout} from "../abstract-input";
import CDate from "../../../components/form/input/date.svelte"

@component(CDate)
@layout("row")
export default class DateInput extends AbstractInput {
}
