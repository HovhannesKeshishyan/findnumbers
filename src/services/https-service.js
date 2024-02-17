import axios from "axios";

/**
 * @returns {Promise<axios.AxiosResponse<{id: string, attempts: number}>>}
 */
export const startGame = () => {
    return axios.get("/api/start-game");
}


export const restartGame = () => {
    //
}

/**
 * @param {string} id - Game ID.
 * @param {Array[]} matrix - Selected values.
 * @returns {Promise<axios.AxiosResponse<{is_winner: boolean, cols: {}, rows: {}, attempts: number}>>}
 */
export const checkGameResult = (id, matrix) => {
    return axios.post("/api/check-result", {id, matrix});
}