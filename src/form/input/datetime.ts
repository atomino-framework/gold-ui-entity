import AbstractInput, {component, layout} from "../abstract-input";
import CDateTime from "../../../components/form/input/datetime.svelte"

@component(CDateTime)
@layout("row")
export default class DateTimeInput extends AbstractInput {
}
