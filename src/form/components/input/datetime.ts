import CDateTime from "./datetime.svelte"
import AbstractInput, {component, layout} from "../../abstract-input";

@component(CDateTime)
@layout("row")
export default class DateTimeInput extends AbstractInput {
}
