import SectionTitle from "../component/SectionTitle";
import featuredImg from '../assets/home/featured.jpg'
import "./Featured.css";


const Featured = () => {
    return (
        <div className="featured-item  bg-fixed text-white pt-7 my-16">
            <SectionTitle heading="Featured Item" subheading="check it out"></SectionTitle>
            <div className="md:flex justify-center bg-slate-400 opacity-50 items-center pb-16 pt-12 px-24 ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug, 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsum ducimus assumenda soluta, rem error ut a expedita tenetur vero aliquid pariatur aperiam cum libero necessitatibus alias eligendi vel fugiat.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
        
    );
};

export default Featured;