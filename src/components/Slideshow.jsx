import SwiperCore, { Navigation, Pagination, Scrollbar, Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './Slide';

SwiperCore.use([Navigation, Pagination, Scrollbar, Zoom]);

const Slideshow = () => {
	return (
		<Swiper
			spaceBetween={0}
			slidesPerView={1}
			pagination={{ clickable: true }}
			loop
			params={{
				zoom: {
					enabled: true
				}
			}}
		>
			<SwiperSlide>
				<Slide />
			</SwiperSlide>
			<SwiperSlide>
				<Slide />
			</SwiperSlide>
			<SwiperSlide>
				<Slide />
			</SwiperSlide>
		</Swiper>
	);
};

export default Slideshow;
