import Image from "next/image";
import Header from "./omponents/Header";
import Header1 from "./omponents/Header1";
import ImageSlide from "./omponents/ImageSlide";



export default function Home() {
  return (
    <div>
      <Header1 />
      <Header />
     <ImageSlide/>
    </div>
  );
}
