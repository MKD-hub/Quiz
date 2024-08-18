import { reactive } from "vue";

const store = reactive({
    result: {},
    update( choice: Object ) {
        this.result = choice;
    }
})

export default store;