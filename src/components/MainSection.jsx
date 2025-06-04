import BookSection from './BookSection';
import DiscountSection from './DiscountSection';
import FeaturedSection from './FeaturedSection';
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
    </main>
  );
};

export default MainSection;
