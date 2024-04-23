import {createStore} from 'vuex';
import {global_store} from "@/store/global-store.js";

export default createStore({
    modules: {
        global: global_store
    }
})