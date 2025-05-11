import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/navbar";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <div className="flex flex-col text-center items-center justify-center mt-10 md:mt-20 relative z-10 px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Flower Beds</h1>
        <p className="text-lg md:text-xl mb-6">Gardens aren&apos;t just plants — they&apos;re memories.</p>
        <p className="text-gray-600 text-sm md:text-base max-w-xl md:max-w-2xl mb-8">Our handcrafted beds are made to last and designed to make growing easy, whether you&apos;re a seasoned gardener or just starting out.</p>
        <Link href="/products" className="inline-block px-6 md:px-8 py-2 md:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 text-base md:text-lg">Shop Now</Link>
      </div>
      <div className="absolute right-0 top-2/3 -translate-y-1/2">
        <Image 
          src="/garden_bed_plant.png"
          alt="Garden Bed"
          width={500}
          height={500}
          className="w-[300px] md:w-[500px] h-auto opacity-90"
        />
      </div>
    </div>
  );
}