import GET from "./requests/get";
import {BLOGS, SINGLEBLOG} from "../const/urls";

export const BLogs = async (token = null) => {
    let res;
    if (token === null || token === undefined) {
        res = await GET(BLOGS, null, true, false)
    } else {
        res = await GET(BLOGS, token)
    }

    return res
}
export const SIngleBlog = async (id, token = null) => {
    let res;
    if (token === null || token === undefined) {
        res = await GET(SINGLEBLOG(id), null, true, false)
    } else {
        res = await GET(SINGLEBLOG(id), token)
    }
    return res
}
