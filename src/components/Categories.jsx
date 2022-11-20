import Category from '$components/Category';
import useCategory from '$hooks/useCategory';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import SwiperCore, { Grid, Navigation, Pagination, Scrollbar, Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../assets/css/custom.css';
import CategoriesSkeleton from './CategoriesSkeleton';

SwiperCore.use([Navigation, Pagination, Scrollbar, Zoom]);

const Categories = () => {
	const { categories, isLoading, fetchCategoriesAll } = useCategory();
	useEffect(() => {
		fetchCategoriesAll();
	}, [fetchCategoriesAll]);
	const [isActive, setIsActive] = useState('');

	const handleToggle = categoryId => {
		setIsActive(categoryId);
	};

	const handleClickOutside = categoryId => {
		setIsActive(!categoryId);
	};

	return (
		<Box>
			{isLoading ? (
				<CategoriesSkeleton count={categories.length} />
			) : (
				<Swiper
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
							slidesPerView: 4,
							spaceBetween: 10
						},
						1024: {
							slidesPerView: 6,
							spaceBetween: 0
						}
					}}
					pagination={{ clickable: true }}
					params={{
						zoom: {
							enabled: true
						}
					}}
					modules={[Grid, Pagination]}
				>
					{categories.map(category => (
						<SwiperSlide key={category._id}>
							<Category
								category={category}
								onClick={() => handleToggle(category._id)}
								isActive={isActive}
								onClickOutside={() => handleClickOutside(category._id)}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</Box>
	);
};

export default Categories;
