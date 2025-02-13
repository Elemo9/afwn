import Header from "./components/Header";
import Banner from "./components/Banner";
import WelcomeToAFWN from "./components/WelcomeToAFWN";
import PageSlider from "./components/PageSlider";
import EventSection from "./components/EventSection";
import GetATicket from "./components/GetATicket";
import StayUpdated from "./components/StayUpdated";
import Footer from "./components/Footer";
import VerticalShow from "./components/VerticalShow";

export default function Home() {
  return (
    <main className="w-screen h-fit ">
      <Header />
      <Banner />
      <WelcomeToAFWN />
      <PageSlider />
      <EventSection />      
      <VerticalShow />
      <GetATicket />
      <StayUpdated />
      <Footer />
    </main>
  );
}