import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";





const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()


    const onSubmit = data => {
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('user profile info updated')
                        //create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    reset()
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Sign up successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
    }
    // console.log(watch("example"))
    return (
        <>
            <Helmet>
                <title>Restro || Sign UP</title>
            </Helmet>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center md:w-1/2 lg:text-left">
                            <h1 className="text-5xl font-bold">Sign Up now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">phot URL</span>
                                    </label>
                                    <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true, minLength: 6, maxLength: 20,
                                        pattern: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!#$%&*?"])/
                                    })} name="password" placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className="text-red-600">Password is at least 6 character required</span>}
                                    {errors.password?.type === 'maxLength' && <span className="text-red-600">Password is at less then 20 character required</span>}
                                    {errors.password?.type === 'pattern' && <span className="text-red-600">password must have one uppercase, one lowercase , one number and one special character</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className="px-6"><small>Already have an account <Link to='/login' className="text-blue-600 font-bold">Please Login</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;