import Image from "next/image";
import Carousel from "./components/homeCarousel";
export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    // </div>
    <div>
      <Carousel/>
      <div className="flex flex-col items-center justify-center gap-4 p-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magni consequatur! Eligendi, delectus iusto. Rem facilis assumenda, quisquam dignissimos officia, at voluptate inventore, tempore sapiente reprehenderit fuga saepe error explicabo.</div>
    </div>
  );
}
