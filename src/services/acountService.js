import api from "./axiosClient"

const accountService = {
    getAll(page, size) {
        return api.get(`findAllAccount/${page}/${size}`);
    },
    create(body) {
        return api.post('createAccount', body)
    },
    update(id, body) {
        return api.put('updateAccount/' + id, body)
    },
    delete(id) {
        return api.delete('deleteAccount/' + id)
    },
    login(body){
        return api.post('login/', body)
    }
}

export default accountService;