import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide font-bold">
              <span className="text-[#050a30]">ELI</span>
              <span className="text-[#ebaf52]">LOCK</span>
            </div>
          </Link>
          <p>28 Akinloye Street Ikota Bus Stop Lekki Lagos Nigeria</p>
          <span className="font-semibold">
            elilockintegratedservices@gmail.com
          </span>
          <span className="font-semibold"> +2349069983442</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="smlogo" width={16} height={16} />
            <Image src="/instagram.png" alt="smlogo" width={16} height={16} />
            <Image src="/youtube.png" alt="smlogo" width={16} height={16} />
            <Image src="/x.png" alt="smlogo" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Affiliates</Link>
              <Link href="/">Contact Us</Link>
              <Link href="/">Blogs</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">OUR SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">New Arrivals</Link>
              <Link href="/">Accessories</Link>
              <Link href="/">Smart Locks</Link>
              <Link href="/">Doors</Link>
              <Link href="/">Ironery</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">My Account</Link>
              <Link href="/">Legal & Privacy</Link>
              <Link href="/">Vouchers</Link>
              <Link href="/">Customer service</Link>
              <Link href="/">Locating Us</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">Our News Letter</h1>
          <p>
            Never miss out on our latest promo and offers, subscribe to our news
            letter now by submitting your email address!{" "}
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">JOIN</button>
          </div>
          <span className="font-semibold ">100% Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/paypal.png" alt="paymentlogo" width={40} height={20} />
            <Image
              src="/mastercard.png"
              alt="paymentlogo"
              width={40}
              height={20}
            />
            <Image src="/visa.png" alt="paymentlogo" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOm */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 ELILOCK</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">Nigeria | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">
              <span>&#8358;</span> Naira{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
