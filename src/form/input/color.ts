import AbstractInput, {component, layout} from "../abstract-input";
import CColor from "../../../components/form/input/color.svelte"

@component(CColor)
@layout("row")
export default class ColorInput extends AbstractInput {}
