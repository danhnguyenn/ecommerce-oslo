import Route from '$constants/Route';
import AboutPage from '$pages/AboutPage';
import AddressPage from '$pages/AddressPage';
import BlogPage from '$pages/BlogPage';
import CartPage from '$pages/CartPage';
import ErrorLoginPage from '$pages/CheckLoginPage';
import ContactUsPage from '$pages/ContactUsPage';
import HomePage from '$pages/HomePage';
import LoginPage from '$pages/LoginPage';
import MyWishListPage from '$pages/MyWishListPage';
import NotFoundPage from '$pages/NotFoundPage';
import OrderSuccess from '$pages/OrderSuccess';
import Payment from '$pages/Payment';
import ProductDetailPage from '$pages/ProductDetailPage';
import ProductPage from '$pages/ProductPage';
import RegisterPage from '$pages/RegisterPage';
import UserDashBoard from '$pages/UserDashBoardPage';

const routes = [
	{
		path: Route.HomePage,
		element: <HomePage />
	},
	{
		path: Route.LoginPage,
		element: <LoginPage />
	},
	{
		path: Route.RegisterPage,
		element: <RegisterPage />
	},
	{
		path: Route.AboutPage,
		element: <AboutPage />
	},
	{
		path: Route.ProductPage,
		element: <ProductPage />
	},
	{
		path: Route.ProductDetail,
		element: <ProductDetailPage />
	},
	{
		path: Route.CartPage,
		element: <CartPage />
	},
	{
		path: Route.OrderSuccessPage,
		element: <OrderSuccess />
	},
	{
		path: Route.UserDashboardPage,
		element: <UserDashBoard />
	},
	{
		path: Route.MyLikeProductPage,
		element: <MyWishListPage />
	},
	// {
	// 	path: Route.SearchPage,
	// 	element: <SearchProductPage />
	// },
	{
		path: Route.AddressPage,
		element: <AddressPage />
	},
	{
		path: Route.PaymentPage,
		element: <Payment />
	},
	{
		path: Route.BlogPage,
		element: <BlogPage />
	},
	{
		path: Route.ContactPage,
		element: <ContactUsPage />
	},
	{
		path: Route.ErrorLoginPage,
		element: <ErrorLoginPage />
	},
	{
		path: Route.NotFoundPage,
		element: <NotFoundPage />
	}
];

export default routes;
