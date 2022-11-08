import { Box, Container, Grid } from '@mui/material';
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
					params={{
						zoom: {
							enabled: true
						}
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<SwiperSlide>
								<CommentBox />
							</SwiperSlide>
						</Grid>
						<Grid item xs={12} md={6}>
							<SwiperSlide>
								<CommentBox />
							</SwiperSlide>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<SwiperSlide>
								<CommentBox />
							</SwiperSlide>
						</Grid>
						<Grid item xs={12} md={6}>
							<SwiperSlide>
								<CommentBox />
							</SwiperSlide>
						</Grid>
					</Grid>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<SwiperSlide>
								<CommentBox />
							</SwiperSlide>
						</Grid>
						<Grid item xs={12} md={6}>
							<SwiperSlide>
								<CommentBox />
							</SwiperSlide>
						</Grid>
					</Grid>
				</Swiper>
			</Container>
		</Box>
	);
};

export default UserReview;
