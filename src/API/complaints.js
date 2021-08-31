import GET from "./requests/get";
import {COMPLAINTS, COMPLAINTSCOUNTER, COMPLAINTS_ADD, SINGLECOMPLAINT} from "../const/urls";
import POST from "./requests/post";

export const COmplaints = async (token, counter = false) => {
    try {
        let res
        res = await GET(counter ? COMPLAINTSCOUNTER : COMPLAINTS, token)
        return res

    } catch (e) {
    }
}
export const SIngleComplaints = async (id, token) => {
    let res;
    res = await GET(SINGLECOMPLAINT(id), token)
    return res
}
export const ADdComplaint = async (token, data) => {
    let res;
    let data_ = new FormData()
    Object.keys(data).forEach(item => {
        data_.append(item,data[item])
    })
    res = await POST(COMPLAINTS, data_, token,true,true,'multipart/form-data')
    return res
}