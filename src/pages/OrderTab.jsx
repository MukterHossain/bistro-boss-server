import FoodCard from "../component/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div>
            <div className=''>
             
                <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="grid md:grid-cols-3 gap-10">
                {
                    items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
                </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
            </Swiper>
            </div>
            
        </div>
    );
};

export default OrderTab;