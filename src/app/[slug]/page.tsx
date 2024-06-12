import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 ">
        <h1 className="text-4xl font-medium">ELILOCK PREMIUM ITALIAN DOOR</h1>
        <p className="text-gray-500">
          The Elilock Italian Door is a masterpiece of craftsmanship, embodying
          the pinnacle of Italian design and quality. Constructed from the
          finest wood, it boasts an unparalleled finish that exudes elegance and
          sophistication.{" "}
        </p>
        <div className="h-[2px] bg-gray" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">
            <span>&#8358;</span>70,000
          </h3>
          <h2 className="font-medium text-2xl">
            <span>&#8358;</span>60,000
          </h2>
        </div>
        <div className="h-[2px] bg-gray" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">ELILOCK ITALIAN BREEZY DOOR</h4>
          <p>
            The wood used in its construction is carefully selected for its
            superior quality, ensuring durability and longevity. The door’s
            exquisite finish highlights the natural beauty of the wood,
            enhancing its rich, warm tones and intricate grain patterns.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">ELILOCK ITALIAN BREEZY DOOR</h4>
          <p>
            This door is not just a functional element, but a statement piece
            that adds a touch of luxury and refinement to any space. The Elilock
            Italian Door truly represents the perfect blend of aesthetics,
            quality, and craftsmanship.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">ELILOCK ITALIAN BREEZY DOOR</h4>
          <p>
            This door is not just a functional element, but a statement piece
            that adds a touch of luxury and refinement to any space. The Elilock
            Italian Door truly represents the perfect blend of aesthetics,
            quality, and craftsmanship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
