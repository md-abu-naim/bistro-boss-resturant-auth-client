import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'
import SectionTItle from './Shared/SectionTItle';

const Category = () => {
    return (
        <section>
            <SectionTItle
            subHeading={'From 11.00am to 10.00pm'}
            heading={'Order Online'}
            >
            </SectionTItle>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-24"
        >
            <SwiperSlide>
                <img src={slide1} alt="" />
                <h3 className='text-white text-center uppercase -mt-24 text-4xl'>Salads</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" />
                <h3 className='text-white text-center uppercase -mt-24 text-4xl'>Pizzas</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" />
                <h3 className='text-white text-center uppercase -mt-24 text-4xl'>Soups</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" />
                <h3 className='text-white text-center uppercase -mt-24 text-4xl'>Desserts</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt="" />
                <h3 className='text-white text-center uppercase -mt-24 text-4xl'>Salads</h3>
            </SwiperSlide>

        </Swiper>
        </section>
    );
};

export default Category;