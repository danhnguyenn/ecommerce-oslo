import AboutSection from '$components/AboutSection';
import MeetOurTeam from '$components/MeetOurTeam';
import Breadcrumbs from '$components/MyBreadcrumbs';
import OurServices from '$components/OurServices';
import UserReview from '$components/UserReview';
import withLayout from '$components/withLayout';
import Route from '$constants/Route';

const AboutPage = () => {
	const breadcrumb = {
		title: 'About Us',
		currentLink: Route.AboutPage,
		prevLink: Route.HomePage
	};
	window.scrollTo(0, 0);

	return (
		<>
			<Breadcrumbs breadcrumb={breadcrumb} />
			<AboutSection />
			<UserReview />
			<MeetOurTeam />
			<OurServices />
		</>
	);
};

export default withLayout(AboutPage);
