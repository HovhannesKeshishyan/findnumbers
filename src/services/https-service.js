import axios from "axios";

/**
 * @returns {Promise<axios.AxiosResponse<{id: string, attempts: number}>>}
 */
export const startGame = () => {
    return axios.get("/api/start-game");
}

/**
 * @param {string} id - Game ID.
 * @returns {Promise<axios.AxiosResponse<{id: string, attempts: number}>>}
 */
export const restartGame = (id) => {
    return axios.post("api/restart-game", {id});
}

/**
 * @param {string} id - Game ID.
 * @param {Array[]} matrix - Selected values.
 * @returns {Promise<axios.AxiosResponse<{is_winner: boolean, is_loss: boolean, cols: {}, rows: {}, attempts: number}>>}
 */
export const checkGameResult = (id, matrix) => {
    return axios.post("/api/check-result", {id, matrix});
}