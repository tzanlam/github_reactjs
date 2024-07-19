import api from "./axiosClient"

const ENDPOINT = '/user/'

const userService = {
    getAll() {
        return api.get(ENDPOINT)
    },
    create(body) {
        return api.post(ENDPOINT, body)
    },
    update(id, body) {
        return api.put(ENDPOINT + id, body)
    },
    delete(id) {
        return api.delete(ENDPOINT + id)
    }
}

export default userService