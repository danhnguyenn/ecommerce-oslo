import AboutBrand from '$components/AboutBrand';
import AvoneOn from '$components/AvoneOn';
import Benefit from '$components/Benefit';
import BrandLove from '$components/BrandLove';
import Categories from '$components/Categories';
import CouptionList from '$components/CouptionList';
import NewArrivals from '$components/NewArrivals';
import Slideshow from '$components/Slideshow';
import SpecialProduct from '$components/SpecialProduct';
import TopCollection from '$components/TopCollection';
import withLayout from '$components/withLayout';

const HomePage = () => {
	window.scrollTo(0, 0);
	return (
		<>
			<Slideshow />
			<Categories />
			<CouptionList />
			<AboutBrand />
			<TopCollection />
			<SpecialProduct />
			<NewArrivals />
			<BrandLove />
			<AvoneOn />
			<Benefit />
		</>
	);
};

export default withLayout(HomePage);
