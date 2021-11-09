import text from "../constants/text"
import { ref } from "@vue/reactivity"

export default () => {
    const messages = ref(text.es)

    return {
        messages
    }
}