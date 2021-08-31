const Get = async (url, token = null, json_return = true, withToken = true) => {
    try {
        let header =
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        if (withToken && token !== null) {
            header['Authorization'] = `TOKEN ${token}`
        }
        const res = await fetch(url, {
            method: 'GET',
            headers: header
        })
        let json = await res.json()
        if (json_return) {
            return json
        } else {
            return await res.text()
        }
    } catch (e) {
        return {status : 'Bad Request',data : [],message :'Error Occured'}
    }

}
export default Get
