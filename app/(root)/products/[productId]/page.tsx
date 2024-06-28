import Gallery from "@/components/shared/Gallery";
import ProductCard from "@/components/shared/ProductCard";
import ProductInfo from "@/components/shared/ProductInfo";
import { getProductDetails } from "@/lib/action";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productDetails = await getProductDetails(params.productId);
  //   const relatedProducts = await getRelatedProducts(params.productId);

  return (
    <>
      <div className="flex w-full justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
        <Gallery productMedia={productDetails.media} />
        <ProductInfo productInfo={productDetails} />
      </div>

      <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
        <p className="text-heading3-bold">Related Products</p>
        {/* <div className="flex flex-wrap gap-16 mx-auto mt-8">
          {relatedProducts?.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div> */}
      </div>
    </>
  );
};

export const dynamic = "force-dynamic";

export default ProductDetails;