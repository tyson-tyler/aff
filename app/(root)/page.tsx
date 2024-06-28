import Collection from "@/components/layout/Collection";
import Navbar from "@/components/layout/Navbar";
import ProductList from "@/components/shared/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src={"/banner.png"}
        width={2000}
        height={1000}
        alt="hello"
        className="w-screen"
      />
      <Collection />
      <ProductList />
    </div>
  );
}
