const PATCH = async (url, data, token = '', json_return = true, withToken = true) => {
    try {
        let header =
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        if (withToken) {
            header['Authorization'] = `TOKEN ${token}`
        }
        const res = await fetch(url, {
            method: 'PATCH',
            headers: header,
            data: JSON.stringify(data)
        })
        let json = await res.json()
        if (json_return) {
            return json
        } else {
            let text = await res.text()
            return text
        }
    } catch (e) {
        return {status: 'Bad Request', data: [], message: 'Error Occured'}

    }

}
export default PATCH
