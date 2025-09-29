import Category from "@/components/pages/home/Category";
import { Hero } from "@/components/pages/home/Hero";
import NewArrival from "@/components/pages/home/NewArrival";
import NewCategory from "@/components/pages/home/NewCategory";
import { PartnersSlider } from "@/components/pages/home/PartnersSlider";
import ProductDeals from "@/components/pages/home/ProductDeals";
import { Testimonial } from "@/components/pages/home/Testimonials";


export default function Home() {
  return (
    <div className=" w-full container mx-auto">
      <Hero/>
      <NewCategory/>
      <Category/>
      <NewArrival/>
      <ProductDeals/>
      <PartnersSlider/>
      <Testimonial/>
      
      

    </div>
  );
}
