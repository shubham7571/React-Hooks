import axios from "axios"
import { API_COMMON_URL } from "../http"
export const Prefix = async () => {
    let res = await axios.get(`${API_COMMON_URL}/getPrefixDropDown`)
    return res.data
}