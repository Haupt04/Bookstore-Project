import BookSection from './BookSection';
import DiscountSection from './DiscountSection';
import FeaturedSection from './FeaturedSection';
import JoinSection from './JoinSection';
import NewBookSection from './NewBookSection';
import ServicesSection from './ServicesSection';
import TestimonialSection from './TestimonialSection';

const MainSection = () => {
  return (
    <main className="main">
        <BookSection /> 
        <ServicesSection /> 
        <FeaturedSection /> 
        <DiscountSection />
        <NewBookSection />
        <JoinSection />
        <TestimonialSection /> 
    </main>
  );
};

export default MainSection;
