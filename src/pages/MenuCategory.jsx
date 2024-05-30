import { Link } from "react-router-dom";
import Cover from "../layout/shared/Cover";
import MenuItem from "../layout/shared/MenuItem";


const MenuCategory = ({ items, title, img }) => {

    return (
        <div className="pt-7">

            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-6 mt-16">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;