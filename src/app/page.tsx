import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import WelcomeToAFWN from "./components/WelcomeToAFWN";
import PageSlider from "./components/PageSlider";

export default function Home() {
  return (
    <main className="w-screen h-fit">
      <Header />
      <Banner />
      <WelcomeToAFWN />
      <PageSlider />
    </main>
  );
}
