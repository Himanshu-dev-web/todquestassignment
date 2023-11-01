import Img from "/src/assets/logo.png"
import Apple from "/src/assets/newsletter/apple.svg";
import Store from "/src/assets/newsletter/pstore.svg";


const Footer = () => {
  return (
    <>
      <div className="w-[100%] h-[260px] py-8 bg-slate-900 flex-col justify-start items-center gap-2 inline-flex">
  <div className="w-[860px] justify-start items-start gap-5 inline-flex">
    <div className="flex-col justify-start items-start gap-[13px] inline-flex">
      <div className="w-[120px] h-[50px] relative">
        <img className="w-[120px] h-[50px] left-0 top-0 absolute" src={Img} />
        <div className="w-[120px] h-[50px] left-0 top-0 absolute">
          <div className="w-[85px] h-[50px] left-[35px] top-0 absolute " />
        </div>
      </div>
      <div className="w-[200px] text-white text-xs font-normal leading-none">Lorem Ipsum is simply dummy of the printing and type setting.</div>
      <div className="flex-col justify-start items-start gap-2 flex">
        <div className="w-32 px-3 py-2 bg-white rounded-lg shadow border border-gray-200 justify-center items-center gap-1 inline-flex">
          <div className="w-6 h-6 relative">
            <img className="w-6 h-6 left-0 top-0 absolute" src={Store} />
            <div className="w-6 h-6 left-0 top-0 absolute bg-white bg-opacity-10" />
          </div>
          <div className="flex-col justify-center items-start  inline-flex">
            <div className="text-neutral-500 text-[8px] font-medium ">Download From</div>
            <div className="text-slate-900 text-xs font-semibold  uppercase">App Store</div>
          </div>
        </div>
        <div className="w-32 px-3 py-2 bg-white rounded-lg shadow border border-gray-200 justify-center items-center gap-1 inline-flex">
          <img className="w-6 h-6" src={Apple} />
          <div className="flex-col justify-center items-start  inline-flex">
            <div className="text-neutral-500 text-[8px] font-medium ">Download From</div>
            <div className="text-slate-900 text-xs font-semibold  uppercase">Play Store</div>
          </div>
        </div>
      </div>
    </div>
    <div className="grow shrink basis-0 pt-4 flex-col justify-start items-start gap-4 inline-flex">
      <div className="text-red-600 text-xs font-semibold  uppercase pl-2">Company</div>
      <div className="flex-col justify-start items-start gap-3 flex">
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">About Us</div>
        </div>
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">Privacy Policy</div>
        </div>
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium">Terms</div>
        </div>
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">Blogs</div>
        </div>
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">Branding</div>
        </div>
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">Career</div>
        </div>
      </div>
    </div>
    <div className="grow shrink basis-0 pt-4 flex-col justify-start items-start gap-4 inline-flex">
      <div className="text-red-600 text-xs font-semibold  uppercase  pl-2">General</div>
      <div className="flex-col justify-start items-start gap-3 flex">
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">Partner With us</div>
        </div>
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">Write to us</div>
        </div>
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">Mobile App</div>
        </div>
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">Site map</div>
        </div>
      </div>
    </div>
    <div className="grow shrink basis-0 pt-4 flex-col justify-start items-start gap-4 inline-flex">
      <div className="text-red-600 text-xs font-semibold  uppercase  pl-2">Pages</div>
      <div className="flex-col justify-start items-start gap-3 flex">
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">Amazon Offer</div>
        </div>
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">Google Pay Offers</div>
        </div>
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">PayPal Offers</div>
        </div>
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">PhonePe Offers</div>
        </div>
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">Festival Offers</div>
        </div>
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">Bank Offers</div>
        </div>
      </div>
    </div>
    <div className="grow shrink basis-0 pt-4 flex-col justify-start items-start gap-4 inline-flex">
      <div className="text-red-600 text-xs font-semibold  uppercase  pl-2">More</div>
      <div className="flex-col justify-start items-start gap-3 flex">
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">City Offers</div>
        </div>
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">Brand Offers</div>
        </div>
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">Product Deals</div>
        </div>
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className="w-2.5 h-2.5 relative" />
          <div className="text-white text-[10px] font-medium ">Gift Cards</div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Footer