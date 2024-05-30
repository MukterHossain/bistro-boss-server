import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios";
import useAuth from "./useAuth";


const useCart = () => {
    const axiosSecure = useSecureAxios()
    const {user} = useAuth()
    const { refetch, data: cart = []} = useQuery({
        queryKey: ['cart'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCart;