import Image from "next/image";
import Header from "./omponents/Header";
import Header1 from "./omponents/Header1";
import ImageSlide from "./omponents/ImageSlide";
import Benner1 from "./omponents/Benner1";
import Benner2 from "./omponents/Benner2";
import Benner3 from "./omponents/Benner3";



export default function Home() {
  return (
    <div>
      <Header1 />
      <Header />
      <ImageSlide />
      <Benner1 />
      <Benner2 />
      <Benner3/>
    </div>
  );
}
