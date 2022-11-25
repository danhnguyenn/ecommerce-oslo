import { Box, Container } from '@mui/material';
import SwiperCore, { Navigation, Pagination, Scrollbar, Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import CommentBox from './CommentBox';
import HeadingText from './HeadingText';

SwiperCore.use([Navigation, Pagination, Scrollbar, Zoom]);

const UserReview = () => {
	const headingText = {
		title: 'User Reviews',
		desc: 'Elegance isn not solely defined by what you wear. It is how you carry yourself, how you speak, what you read.'
	};
	return (
		<Box
			sx={{
				backgroundColor: '#fafafa',
				paddingBottom: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))',
				paddingTop: 'calc(45px + (100 - 45) * ((100vw - 320px) / (1920 - 320)))'
			}}
		>
			<HeadingText heading={headingText} />
			<Container>
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					pagination={{ clickable: true }}
					loop
					breakpoints={{
						480: {
							slidesPerView: 1,
							spaceBetween: 10
						},
						640: {
							slidesPerView: 2,
							spaceBetween: 10
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 10
						},
						1024: {
							slidesPerView: 2,
							spaceBetween: 5
						}
					}}
					params={{
						zoom: {
							enabled: true
						}
					}}
				>
					<SwiperSlide>
						<CommentBox />
					</SwiperSlide>
					<SwiperSlide>
						<CommentBox />
					</SwiperSlide>
					<SwiperSlide>
						<CommentBox />
					</SwiperSlide>
					<SwiperSlide>
						<CommentBox />
					</SwiperSlide>
					<SwiperSlide>
						<CommentBox />
					</SwiperSlide>
					<SwiperSlide>
						<CommentBox />
					</SwiperSlide>
				</Swiper>
			</Container>
		</Box>
	);
};

export default UserReview;
