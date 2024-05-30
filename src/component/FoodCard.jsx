
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useSecureAxios from "../hooks/useSecureAxios";
import useCart from "../hooks/useCart";



const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useSecureAxios()
    const [, refetch] = useCart()

    const handleAddCart = () => {
        if (user && user.email) {
            //sent cart item to the database

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      // refetch cart to update the cart items count
                      refetch()
                }
            })
        }
        else {
            Swal.fire({
                title: "You are not Logged in",
                text: "Please Login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className=" absolute right-0 mr-4 mt-4 px-3 rounded-[5px] bg-slate-900 text-white">{price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>

                    <div className="card-actions justify-end">
                        <button onClick={ handleAddCart} className="btn btn-primary bg-slate-300">Add to Cart</button>
                        {/* <button onClick={() => handleAddCart(item)} className="btn btn-primary bg-slate-300">Add to Cart</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;