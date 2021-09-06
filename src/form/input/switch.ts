import AbstractInput, {component, layout} from "../abstract-input";
import CSwitch from "../../../components/form/input/switch.svelte"

@component(CSwitch)
@layout("row")
export default class SwitchInput extends AbstractInput {}
