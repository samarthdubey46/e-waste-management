import colors from "./colors";
import layout_ from "./layout";

export const color = colors
export const themeColor = colors.green
export const layout = layout_
export const APIURL = 'http://192.168.1.206:8000/api/'
export function ascii(a) {
    return a.charCodeAt(0);
}

export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
