import api from "./axiosClient";

const bookingService = {
    getBooking(page, size){
        return api.get(`findAllBooking/${page}/${size}`)
    },
    createBooking(body){
        return api.post("createBooking",body)
    },
    updateBooking(id, body){
        return api.put("updateBooking/"+id, body)
    },
    deleteBooking(id){
        return api.delete("deleteBooking/"+id)
    }
}
export default bookingService;