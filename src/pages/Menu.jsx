import { Helmet } from "react-helmet";
import Cover from "../layout/shared/Cover";
import menuImg from '../assets/menu/banner3.jpg'
import dessertImg from '../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../assets/menu/pizza-bg.jpg'
import soupImg from '../assets/menu/soup-bg.jpg'
import saladImg from '../assets/menu/salad-bg.jpg'
import useMenu from "../hooks/useMenu";
import SectionTitle from "../component/SectionTitle";
import MenuCategory from "./MenuCategory";
// import PopularMenu from "./PopularMenu";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Restro || Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our menu"></Cover>
            {/* main cover */}
            <SectionTitle subheading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert} title="dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
            
          
        </div>
    );
};

export default Menu;