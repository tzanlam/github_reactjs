import api from './axiosClient';

const AccountService = {
    getAccounts(page, size){
        return api.get(`getAllAccount/${page}/${size}`)
    },
    createAccount(body){
        return api.post("createAccount",body)
    },
    updateAccount(id, body){
        return api.put("updateAccount/"+id, body)
    },
    deleteAccount(id){
        return api.delete(`deleteAccount/${id}`)
    }
}

export default AccountService;