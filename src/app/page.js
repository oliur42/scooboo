import Image from "next/image";
import Header from "./omponents/Header";
import Header1 from "./omponents/Header1";
import ImageSlide from "./omponents/ImageSlide";
import Benner1 from "./omponents/Benner1";



export default function Home() {
  return (
    <div>
      <Header1 />
      <Header />
     <ImageSlide/>
     <Benner1/>
    </div>
  );
}
