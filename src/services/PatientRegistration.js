import axios from "axios"
import { ADDRESS_COMMON_URL, API_COMMON_URL } from "../http"
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
export const BloodGroupApi = async () => {
    let res = await axios.get(`${API_COMMON_URL}/getBloodGroupDropDown`)
    return res.data

}
// nationality api 
export const NationalityApi = async () => {
    let res = await axios.get(`${API_COMMON_URL}/getNationalityDropdown`)
    return res.data
}
//isdapi
export const IsdApi = async () => {
    let res = await axios.get(`${API_COMMON_URL}/getIsdCodeDropdown`)
    return res.data
}


//address details apis

// country api
export const countryApi = async () => {
    let res = await axios.get(`${ADDRESS_COMMON_URL}/countries`)
    return res.data
}
 
  