import BookSection from './BookSection';
import DiscountSection from './DiscountSection';
import FeaturedSection from './FeaturedSection';
import JoinSection from './JoinSection';
import NewBookSection from './NewBookSection';
import ServicesSection from './ServicesSection';

const MainSection = () => {
  return (
    <main className="main">
        <BookSection /> 
        <ServicesSection /> 
        <FeaturedSection /> 
        <DiscountSection />
        <NewBookSection />
        <JoinSection />
    </main>
  );
};

export default MainSection;
