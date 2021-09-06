import AbstractInput, {component, layout} from "../abstract-input";
import CTime from "../../../components/form/input/time.svelte"

@component(CTime)
@layout("row")
export default class TimeInput extends AbstractInput {
}
