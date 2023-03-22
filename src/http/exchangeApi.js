import axios from "axios";

export const fetchExchangeRates = async (from, to) => {
    const response = await axios.get(`https://api.exchangerate.host/convert?from=${from}&to=${to}`)
    return response.data
}
export const fetchExchangeResult = async (from, to, amount) => {
    const response = await axios.get(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`)
    return response.data
}