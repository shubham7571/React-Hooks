import axios from "axios"
import { API_COMMON_URL } from "../http"
//prefixapi
export const PrefixApi = async () => {
    let res = await axios.get(`${API_COMMON_URL}/prefixDropdown`)
    return res.data
}
//marriedsatausapi
export const MarriedStatusApi = async () => {
    let res = await axios.get(`${API_COMMON_URL}/getMaritalStatusDropDown`)
    return res.data
}
//genderapi
export const GenderApi = async () => {
    let res = await axios.get(`${API_COMMON_URL}/getGender`)
    return res.data
}
//BloodGroupapi
export const  BloodGroupApi = async () => {
    let res = await axios.get(`${API_COMMON_URL}/getBloodGroupDropDown`)
    return res.data
}
export const  NationalityApi =async()=>{
    let res = await axios.get(`${API_COMMON_URL}/getNationalityDropdown`)
    return res.data
}
export const  IsdApi  =async()=>{
    let res = await axios.get(`${API_COMMON_URL}/getIsdCodeDropdown`)
    return res.data
}