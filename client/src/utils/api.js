import axios from 'axios'
import toast from 'react-toastify'

export const api = axios.create({
    baseURL: "http://localhost:4000"
});

export const createUser = async(email) => {
    try {
        await api.post("/api/user/signup")
    }catch(error){
        toast.error("Something went wrong, Please try again")
        throw error
    }
}