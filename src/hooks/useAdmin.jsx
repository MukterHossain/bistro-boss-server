import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureAxios from "./useSecureAxios";


const useAdmin = () => {
    const {user,loading} = useAuth();
    
    const axiosSecure = useSecureAxios();
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data)
            return res.data?.admin
        },
        enabled:!loading && !!localStorage.getItem('access-token')
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;