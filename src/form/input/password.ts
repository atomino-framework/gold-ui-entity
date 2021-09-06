import AbstractInput, {component, layout} from "../abstract-input";
import CPassword from "../../../components/form/input/password.svelte"

@component(CPassword)
@layout("row")
export default class PasswordInput extends AbstractInput {
}
