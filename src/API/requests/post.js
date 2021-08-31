const POST = async (url, data, token = null, json_return = true, withToken = true,type = 'application/json') => {
    try {
        let header =
            {
                'Accept': 'application/json',
                'Content-Type': type,
            }
        if (withToken && token !== null) {
            header['Authorization'] = `TOKEN ${token}`
        }
        const res = await fetch(url, {
            method: 'POST',
            headers: header,
            body: type === 'application/json'? JSON.stringify(data) : data,
        })
        let json;
        if (json_return) {
            json = await res.json()
        }
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
export default POST
