import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

const withLayout = Component => props =>
	(
		<>
			<Header />
			<Component {...props} />
			<ScrollToTop />
			<Footer />
		</>
	);

export default withLayout;
