export const global_store = {
    namespaced: true,

    state: () => ({
        is_loading: false,
        error: null
    }),
    getters: {
        isLoading: state => state.is_loading,
        errorData: state => state.error,
    },
    mutations: {
        setLoading: (state, loading) => state.is_loading = loading,
        setError: (state, error) => {
            if (!error.message) error.message = "Something went wrong";
            state.error = error;
        }
    },
    actions: {
        // incrementIfOddOnRootSum ({ state, commit, rootState }) {
        //     if ((state.count + rootState.count) % 2 === 1) {
        //         commit('increment')
        //     }
        // }
    }
}