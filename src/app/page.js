import Image from "next/image";
import Header from "./sections/Header";
import AboutUs from "./sections/AboutUs";
import Services from "./sections/Services";
import StatsSection from "./sections/StatsSection";
import AttachedPromo from "./sections/AttachedPromo";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import ContactUs from "./sections/ContactUs";
import WorkingAreas from "./sections/WorkingAreas";

export default function Home() {
  return (
   
    <>
    <Header />
    <AboutUs />
    <Services />
    <StatsSection />
    <AttachedPromo />
    <Gallery />
    <WorkingAreas />
    <Testimonials />
    <ContactUs />
    </>
  );
}
