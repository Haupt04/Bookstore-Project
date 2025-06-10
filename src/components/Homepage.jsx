import { useLocation } from 'react-router-dom';
import BookSection from './BookSection';
import DiscountSection from './DiscountSection';
import FeaturedSection from './FeaturedSection';
import JoinSection from './JoinSection';
import NewBookSection from './NewBookSection';
import ServicesSection from './ServicesSection';
import TestimonialSection from './TestimonialSection';
import { useEffect } from 'react';

const Homepage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash){
      const element = document.querySelector(location.hash)
      if (element){
        element.scrollIntoView({behavior: 'smooth'})
      }
    }
  }, [location])
  return (
    <div className="main">
        <BookSection /> 
        <ServicesSection /> 
        <FeaturedSection /> 
        <DiscountSection />
        <NewBookSection />
        <JoinSection />
        <TestimonialSection /> 
    </div>
  );
};

export default Homepage;
