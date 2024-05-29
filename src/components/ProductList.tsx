import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap ">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/sl4.jpg"
            alt="product image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/sl5.jpg"
            alt="product image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">EliLock Recoil Smart Lock</span>
          <span className="font-semibold">
            <span>&#8358;</span>150,000
          </span>
        </div>
        <div className="text-sm text-gray-500">
          Smart equipped with all latest security features
        </div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white ">
          Add to cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/sl7.jpg"
            alt="product image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/sl8.jpg"
            alt="product image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">EliLock Recoil Smart Lock</span>
          <span className="font-semibold">
            <span>&#8358;</span>150,000
          </span>
        </div>
        <div className="text-sm text-gray-500">
          Smart equipped with all latest security features
        </div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white ">
          Add to cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/sl8.jpg"
            alt="product image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/sl9.png"
            alt="product image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">EliLock Recoil Smart Lock</span>
          <span className="font-semibold">
            <span>&#8358;</span>150,000
          </span>
        </div>
        <div className="text-sm text-gray-500">
          Smart equipped with all latest security features
        </div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white ">
          Add to cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/sl9.png"
            alt="product image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="/sl1.jpg"
            alt="product image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">EliLock Recoil Smart Lock</span>
          <span className="font-semibold">
            <span>&#8358;</span>150,000
          </span>
        </div>
        <div className="text-sm text-gray-500">
          Smart equipped with all latest security features
        </div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white ">
          Add to cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
